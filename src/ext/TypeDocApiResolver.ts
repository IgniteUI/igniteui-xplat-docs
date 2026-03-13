import * as fs from 'fs';
import apiConfig from '../../api-config.json';
import type { ApiConfig, Platform, PlatformConfig } from '../types/api-config.types';

// TypeDoc kind constants
const KIND = {
    MODULE: 2,
    ENUM: 8,
    ENUM_MEMBER: 16,
    CLASS: 128,
    INTERFACE: 256,
    PROPERTY: 1024,
    METHOD: 2048,
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
    members: Map<string, TypeDocMemberInfo>;
}

export interface TypeDocMemberInfo {
    name: string;
    kind: MemberCategory;
}

interface TypeDocNode {
    name: string;
    kind: number;
    packageName?: string;
    children?: TypeDocNode[];
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
     */
    load(jsonPath: string): void {
        const raw = JSON.parse(fs.readFileSync(jsonPath, 'utf8')) as TypeDocNode;
        this.parseProject(raw);
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
            // Even if member not found in our data, still create the link
            // (the type is known, member might be inherited)
            const resolvedMember = member?.name ?? memberName;
            const url = this.buildUrl(typeInfo) + '#' + resolvedMember;
            return { url, displayText: resolvedMember };
        }

        const url = this.buildUrl(typeInfo);
        return { url, displayText: typeInfo.name };
    }

    /**
     * Resolves a bare member name using one or more context types.
     *
     * Example:
     *   memberName: "label"
     *   contextTypes: ["TreeItem", "Tree"]
     *
     * Returns the first matching member link or null.
     */
    resolveMemberLink(memberName: string, contextTypes: string[]): { url: string; displayText: string } | null {
        if (!memberName || !contextTypes || contextTypes.length === 0) {
            return null;
        }

        for (const contextType of contextTypes) {
            const typeInfo = this.findType(contextType);
            if (!typeInfo) continue;

            const member = this.findMember(typeInfo, memberName);
            if (!member) continue;

            const resolvedMember = member.name;
            const url = this.buildUrl(typeInfo) + '#' + resolvedMember;
            return { url, displayText: resolvedMember };
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
        return null;
    }

    private buildUrl(typeInfo: TypeDocTypeInfo): string {
        const categoryPath = this.typePatterns[typeInfo.kind] ?? 'classes/';
        const apiRoot = this.config.typeDocApiRoot ?? this.config.apiRoot;
        const filePrefix = this.buildFilenamePrefix(typeInfo.module);
        return `${apiRoot}${categoryPath}${filePrefix}${typeInfo.name.toLowerCase()}.html`;
    }

    /**
     * Builds the filename prefix for the type in a TypeDoc URL.
     *
     * When `typeDocFilenameUseModulePrefix` is true (e.g. React), every type filename
     * is prefixed with the module name using hyphens:
     *   "igniteui-react"       → "igniteui-react."
     *   "igniteui-react-grids" → "igniteui-react-grids."
     *
     * Otherwise (e.g. WebComponents) the legacy behaviour is used:
     *   core module            → "" (no prefix)
     *   sub-package            → "igniteui_webcomponents_grids." (underscore-joined)
     */
    private buildFilenamePrefix(moduleName: string): string {
        if (this.config.typeDocFilenameUseModulePrefix) {
            return moduleName + '.';
        }
        return this.getLegacyPackagePrefix(moduleName);
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

    private getLegacyPackagePrefix(moduleName: string): string {
        // Legacy apiMap-style prefix (used when typeDocFilenameUseModulePrefix is false/unset).
        // Core module → no prefix; sub-packages → underscore-joined prefix.
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

    private parseProject(root: TypeDocNode): void {
        const children = root.children ?? [];
        const modules = children.filter((child) => child.kind === KIND.MODULE);

        // Newer TypeDoc outputs can either:
        // 1) group declarations under module nodes (kind === MODULE), or
        // 2) emit declarations directly under the project root.
        if (modules.length > 0) {
            for (const module of modules) {
                // Skip the "typescript" built-in module
                if (module.name === 'typescript') continue;

                const moduleName = module.name;

                for (const typeNode of module.children ?? []) {
                    this.parseType(typeNode, moduleName);
                }
            }
            return;
        }

        // Flat project-root fallback (e.g. igniteui-webcomponents.json).
        // Use root packageName when present to keep URL prefix behavior consistent.
        const fallbackModuleName = root.packageName ?? `igniteui-${this.platform.toLowerCase()}`;
        for (const typeNode of children) {
            this.parseType(typeNode, fallbackModuleName);
        }
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

        this.typesByPlatformName.set(node.name, info);
        this.typesByLowerName.set(node.name.toLowerCase(), info);

        // Only set generic name if not already taken (first match wins)
        if (!this.typesByGenericName.has(genericName)) {
            this.typesByGenericName.set(genericName, info);
        }

        // Also index by lowercase generic name 
        const genericLower = genericName.toLowerCase();
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

}
