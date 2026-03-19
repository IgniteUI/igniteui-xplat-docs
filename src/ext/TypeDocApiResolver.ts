import * as fs from 'fs';
import apiConfig from '../../api-config.json';
import type { ApiConfig, Platform, PlatformConfig } from '../types/api-config.types';
// Blazor DocFX adapter — remove this import once Blazor ships real TypeDoc JSON
import { isBlazorDocFxJson, parseBlazorDocFxJson, buildBlazorUrl, buildBlazorMemberHash } from './BlazorDocFxAdapter';

// TypeDoc kind constants
const KIND = {
    MODULE: 2,
    ENUM: 8,
    ENUM_MEMBER: 16,
    VARIABLE: 32,
    FUNCTION: 64,
    CLASS: 128,
    INTERFACE: 256,
    CONSTRUCTOR: 512,
    PROPERTY: 1024,
    METHOD: 2048,
    CALL_SIGNATURE: 4096,
    PARAMETER: 32768,
    TYPE_LITERAL: 65536,
    GET_SIGNATURE: 262144,
    REFERENCE: 1048576,
    TYPE_ALIAS: 2097152,
} as const;

type TypeCategory = 'enum' | 'class' | 'interface' | 'type';
type MemberCategory = 'property' | 'method' | 'accessor' | 'event' | 'enum-member';

export interface TypeDocTypeInfo {
    /** Platform-specific name, e.g. "IgrList" */
    name: string;
    /** Generic name without prefix/suffix, e.g. "List" */
    genericName: string;
    kind: TypeCategory;
    /** Module name from TypeDoc, e.g. "igniteui-react" or "igniteui-react-grids" */
    module: string;
    /** Blazor namespace, e.g. "IgniteUI.Blazor.Controls" */
    namespace?: string;
    members: Map<string, TypeDocMemberInfo>;
    /** Base class names (platform-specific) from inheritance metadata */
    inheritance?: string[];
}

export interface TypeDocMemberInfo {
    name: string;
    kind: MemberCategory;
    typeName?: string;
    /** Blazor DocFX uid, used for anchor generation */
    uid?: string;
}

interface TypeDocNode {
    id: number;
    name: string;
    kind: number;
    variant?: string;
    packageName?: string;
    flags?: Record<string, boolean>;
    children?: TypeDocNode[];
    signatures?: TypeDocNode[];
    comment?: any;
    type?: any;
    sources?: { fileName: string; line: number; character: number }[];
    parameters?: TypeDocNode[];
}

export class TypeDocApiResolver {
    private platform: Platform;
    private config: PlatformConfig;
    private typePatterns: Record<string, string>;

    /** Lookup by platform-specific name: "IgrList" → TypeDocTypeInfo */
    private typesByPlatformName = new Map<string, TypeDocTypeInfo>();
    /** Lookup by generic name (prefix/suffix stripped): "List" → TypeDocTypeInfo */
    private typesByGenericName = new Map<string, TypeDocTypeInfo>();
    /** Lookup by lowercase name for case-insensitive fallback */
    private typesByLowerName = new Map<string, TypeDocTypeInfo>();

    constructor(platform: Platform) {
        this.platform = platform;
        const typedConfig = apiConfig as ApiConfig;
        this.config = typedConfig.platforms[platform];
        this.typePatterns = typedConfig.typePatterns;
    }

    /**
     * Loads and parses a TypeDoc JSON file, populating the lookup maps.
     * The module name is taken from the root node's `packageName` field when present
     * (e.g. "igniteui-dockmanager"), falling back to the filename stem so that
     * packageOverrides keys are matched correctly.
     */
    load(jsonPath: string): void {
        const path = require('path');
        const raw = JSON.parse(fs.readFileSync(jsonPath, 'utf8'));

        // Blazor DocFX adapter — remove this block once Blazor ships real TypeDoc JSON
        if (isBlazorDocFxJson(raw)) {
            const entries = parseBlazorDocFxJson(raw, (name) => this.stripPlatformAffixes(name));
            for (const info of entries) {
                this.indexType(info);
            }
            return;
        }

        const fileBasedModule = path.basename(jsonPath, '.json') as string;
        const rootModule = raw.packageName ?? fileBasedModule;
        this.parseProject(raw as TypeDocNode, rootModule);
    }

    /**
     * Loads and parses TypeDoc data from a pre-parsed JSON object.
     */
    loadFromObject(json: TypeDocNode): void {
        this.parseProject(json);
    }

    get typeCount(): number {
        return this.typesByPlatformName.size;
    }

    /**
     * Resolves a backtick reference from markdown to a URL.
     *
     * Supports formats:
     *   - "List"          → type lookup
     *   - "List.size"     → type + member lookup
     *   - "IgrList"       → platform-specific name
     *
     * Returns null if the type is not found in the TypeDoc data.
     */
    resolveApiLink(ref: string): { url: string; displayText: string } | null {
        let typeName: string;
        let memberName: string | undefined;

        const dotIndex = ref.indexOf('.');
        if (dotIndex >= 0) {
            typeName = ref.substring(0, dotIndex);
            memberName = ref.substring(dotIndex + 1);
        } else {
            typeName = ref;
        }

        const typeInfo = this.findType(typeName);
        if (!typeInfo) return null;

        // Validate member if specified
        if (memberName) {
            const member = this.findMember(typeInfo, memberName);
            if (member) {
                const anchor = typeInfo.namespace
                    ? buildBlazorMemberHash(typeInfo, member.name, member.uid)
                    : this.buildMemberAnchor(typeInfo.module, member.name);
                const url = this.buildUrl(typeInfo) + '#' + anchor;
                return { url, displayText: member.name };
            }

            // Member not found on direct type — walk the inheritance chain
            const inherited = this.findMemberInherited(typeInfo, memberName);
            if (inherited) {
                const anchor = inherited.ownerType.namespace
                    ? buildBlazorMemberHash(inherited.ownerType, inherited.member.name, inherited.member.uid)
                    : this.buildMemberAnchor(inherited.ownerType.module, inherited.member.name);
                const url = this.buildUrl(inherited.ownerType) + '#' + anchor;
                return { url, displayText: inherited.member.name };
            }

            // Even if member not found anywhere, still create the link
            // (the type is known, member might exist on the page)
            const anchor = typeInfo.namespace
                ? buildBlazorMemberHash(typeInfo, memberName)
                : this.buildMemberAnchor(typeInfo.module, memberName);
            const url = this.buildUrl(typeInfo) + '#' + anchor;
            return { url, displayText: memberName };
        }

        const url = this.buildUrl(typeInfo);
        return { url, displayText: typeInfo.name };
    }

    /**
     * Resolves a bare member name (e.g. `selection`) against context types
     * from front matter (`mentionedTypes`) and current file type.
     */
    resolveMemberLink(memberName: string, contextTypes: string[]): { url: string; displayText: string } | null {
        if (!memberName || !contextTypes || contextTypes.length === 0) {
            return null;
        }

        for (const contextType of contextTypes) {
            const typeInfo = this.findType(contextType);
            if (!typeInfo) continue;

            // Direct member lookup
            const member = this.findMember(typeInfo, memberName);
            if (member) {
                const anchor = typeInfo.namespace
                    ? buildBlazorMemberHash(typeInfo, member.name, member.uid)
                    : this.buildMemberAnchor(typeInfo.module, member.name);
                const url = this.buildUrl(typeInfo) + '#' + anchor;
                return { url, displayText: member.name };
            }

            // Walk inheritance chain for inherited members
            const inherited = this.findMemberInherited(typeInfo, memberName);
            if (inherited) {
                const anchor = inherited.ownerType.namespace
                    ? buildBlazorMemberHash(inherited.ownerType, inherited.member.name, inherited.member.uid)
                    : this.buildMemberAnchor(inherited.ownerType.module, inherited.member.name);
                const url = this.buildUrl(inherited.ownerType) + '#' + anchor;
                return { url, displayText: inherited.member.name };
            }
        }

        return null;
    }

    /**
     * Checks if a given type name exists in the TypeDoc data.
     */
    hasType(name: string): boolean {
        return this.findType(name) !== null;
    }

    /**
     * Gets the type info for a given name.
     */
    getType(name: string): TypeDocTypeInfo | null {
        return this.findType(name);
    }

    // ── Private helpers ──────────────────────────────────────────

    private findType(name: string): TypeDocTypeInfo | null {
        // 1. Exact platform name match (e.g. "IgrList")
        if (this.typesByPlatformName.has(name)) {
            return this.typesByPlatformName.get(name)!;
        }
        // 2. Generic name match (e.g. "List")
        if (this.typesByGenericName.has(name)) {
            return this.typesByGenericName.get(name)!;
        }
        // 3. Try adding platform prefix (e.g. "List" → "IgrList")
        const prefixed = this.config.prefix + name;
        if (this.typesByPlatformName.has(prefixed)) {
            return this.typesByPlatformName.get(prefixed)!;
        }
        // 4. Try adding platform prefix + suffix (e.g. "List" → "IgcListComponent")
        if (this.config.suffix) {
            const prefixedWithSuffix = prefixed + this.config.suffix;
            if (this.typesByPlatformName.has(prefixedWithSuffix)) {
                return this.typesByPlatformName.get(prefixedWithSuffix)!;
            }
        }
        // 5. Case-insensitive fallback 
        const lower = name.toLowerCase();
        if (this.typesByLowerName.has(lower)) {
            return this.typesByLowerName.get(lower)!;
        }
        // 6. Namespace-qualified name: "Infragistics.Controls.Layouts.Implementation.ExpansionPanel" → "ExpansionPanel"
        if (name.indexOf('.') >= 0) {
            const shortName = name.substring(name.lastIndexOf('.') + 1);
            return this.findType(shortName);
        }
        return null;
    }

    private findMember(typeInfo: TypeDocTypeInfo, memberName: string): TypeDocMemberInfo | null {
        const exact = typeInfo.members.get(memberName);
        if (exact) return exact;

        const lower = memberName.toLowerCase();

        const loweredKey = typeInfo.members.get(lower);
        if (loweredKey) return loweredKey;

        for (const [key, value] of typeInfo.members.entries()) {
            if (key.toLowerCase() === lower) {
                return value;
            }
        }

        return null;
    }

    /**
     * Walks the inheritance chain of a type to find a member defined on a base class.
     * Returns both the member and the owning type (needed for correct URL generation).
     */
    private findMemberInherited(typeInfo: TypeDocTypeInfo, memberName: string): { member: TypeDocMemberInfo; ownerType: TypeDocTypeInfo } | null {
        if (!typeInfo.inheritance) return null;

        for (const baseName of typeInfo.inheritance) {
            const baseType = this.findType(baseName);
            if (!baseType) continue;

            const member = this.findMember(baseType, memberName);
            if (member) {
                return { member, ownerType: baseType };
            }

            // Recurse into the base type's own inheritance chain
            const deeper = this.findMemberInherited(baseType, memberName);
            if (deeper) return deeper;
        }

        return null;
    }

    private buildUrl(typeInfo: TypeDocTypeInfo): string {
        // Blazor DocFX adapter — remove this block once Blazor ships real TypeDoc JSON
        if (typeInfo.namespace) {
            return buildBlazorUrl(this.config.apiRoot, typeInfo);
        }

        const categoryPath = this.typePatterns[typeInfo.kind] ?? 'classes/';

        // If a packageOverride exists for this module (e.g. igniteui-dockmanager),
        // use its apiRoot directly and skip any typeDocApiRoot.
        const override = this.config.packageOverrides?.[typeInfo.module];
        const baseApiRoot = override?.apiRoot ?? this.config.typeDocApiRoot ?? this.config.apiRoot;

        // When an override provides its own root it already points to that package's
        // docs, so no package-name prefix is needed in the path.
        const packagePrefix = override?.apiRoot ? '' : this.getPackagePrefix(typeInfo.module);

        // When typeDocFilenameUseModulePrefix is set the TypeDoc site uses filenames
        // like "igniteui-react.igraccordion.html" instead of "igraccordion.html".
        const modulePrefix = this.config.typeDocFilenameUseModulePrefix && !override?.apiRoot
            ? typeInfo.module + '.'
            : '';

        return `${baseApiRoot}${categoryPath}${packagePrefix}${modulePrefix}${typeInfo.name.toLowerCase()}.html`;
    }

    private buildMemberAnchor(moduleName: string, memberName: string): string {
        const override = this.config.packageOverrides?.[moduleName];
        const preserve = override?.preserveMemberCasing ?? this.config.preserveMemberCasing ?? false;
        return preserve ? memberName : memberName.toLowerCase();
    }

    private getPackagePrefix(moduleName: string): string {
        // The module name from TypeDoc (e.g. "igniteui-react-grids") maps to a URL prefix.
        // Core module (igniteui-react / igniteui-webcomponents) → no prefix
        // Sub-packages get a prefix like "igniteui_react_grids."
        const platformLower = this.platform.toLowerCase();
        const join = this.config.packageJoin ?? '_';

        // Core packages: no prefix needed
        if (moduleName === `igniteui-${platformLower}` ||
            moduleName === 'igniteui-webcomponents' ||
            moduleName === 'igniteui-react') {
            return '';
        }

        // Convert module name to URL prefix: "igniteui-react-grids" → "igniteui_react_grids."
        return moduleName.replace(/-/g, join) + '.';
    }

    private parseProject(root: TypeDocNode, defaultModuleName?: string): void {
        // Some TypeDoc outputs emit declarations under module nodes, while others
        // place declarations directly under the project root. Traverse recursively
        // so we can collect types in either shape.
        if (!defaultModuleName) {
            defaultModuleName = `igniteui-${this.platform.toLowerCase()}`;
        }

        const walk = (node: TypeDocNode, currentModuleName: string) => {
            let moduleName = currentModuleName;
            if (node.kind === KIND.MODULE) {
                // Skip the "typescript" built-in module.
                if (node.name === 'typescript') {
                    return;
                }
                moduleName = node.name;
            }

            if (this.classifyType(node.kind)) {
                this.parseType(node, moduleName);
            }

            for (const child of node.children ?? []) {
                walk(child, moduleName);
            }
        };

        walk(root, defaultModuleName);
    }

    private parseType(node: TypeDocNode, moduleName: string): void {
        const typeCategory = this.classifyType(node.kind);
        if (!typeCategory) return;

        const members = new Map<string, TypeDocMemberInfo>();

        // Parse direct children (properties, methods, accessors, enum members)
        for (const child of node.children ?? []) {
            const memberKind = this.classifyMember(child.kind);
            if (!memberKind) continue;

            members.set(child.name, {
                name: child.name,
                kind: memberKind,
                typeName: this.resolveTypeName(child.type),
            });
        }

        // For React wrappers that are functions (kind 128 but no children, only signatures),
        // parse the signature parameters' type to find props if needed
        // This handles components like IgrList which are function components 
        // with signatures but no direct property children.

        const genericName = this.stripPlatformAffixes(node.name);

        const info: TypeDocTypeInfo = {
            name: node.name,
            genericName,
            kind: typeCategory,
            module: moduleName,
            members,
        };

        this.indexType(info);
    }

    /** Adds a TypeDocTypeInfo to all lookup maps. */
    private indexType(info: TypeDocTypeInfo): void {
        this.typesByPlatformName.set(info.name, info);
        this.typesByLowerName.set(info.name.toLowerCase(), info);

        // Only set generic name if not already taken (first match wins)
        if (!this.typesByGenericName.has(info.genericName)) {
            this.typesByGenericName.set(info.genericName, info);
        }

        // Also index by lowercase generic name 
        const genericLower = info.genericName.toLowerCase();
        if (!this.typesByLowerName.has(genericLower)) {
            this.typesByLowerName.set(genericLower, info);
        }
    }

    private stripPlatformAffixes(name: string): string {
        // Remove platform prefix: Igr, Igc, Igx, Igb
        let stripped = name.replace(/^(Igr|Igc|Igx|Igb)/, '');
        // Remove Component suffix if present
        stripped = stripped.replace(/Component$/, '');
        return stripped || name; // fallback to original if stripping empties it
    }

    private classifyType(kind: number): TypeCategory | null {
        switch (kind) {
            case KIND.ENUM: return 'enum';
            case KIND.CLASS: return 'class';
            case KIND.INTERFACE: return 'interface';
            case KIND.TYPE_ALIAS: return 'type';
            default: return null;
        }
    }

    private classifyMember(kind: number): MemberCategory | null {
        switch (kind) {
            case KIND.PROPERTY: return 'property';
            case KIND.METHOD: return 'method';
            case KIND.GET_SIGNATURE: return 'accessor';
            case KIND.REFERENCE: return 'event';
            case KIND.ENUM_MEMBER: return 'enum-member';
            default: return null;
        }
    }

    private resolveTypeName(type: any): string | undefined {
        if (!type) return undefined;
        if (type.type === 'intrinsic') return type.name;
        if (type.type === 'literal') return String(type.value);
        if (type.type === 'reference') return type.name;
        if (type.type === 'union') {
            return type.types?.map((t: any) => this.resolveTypeName(t)).filter(Boolean).join(' | ');
        }
        if (type.type === 'array') {
            const el = this.resolveTypeName(type.elementType);
            return el ? el + '[]' : undefined;
        }
        if (type.type === 'reflection') return '(callback)';
        return undefined;
    }
}
