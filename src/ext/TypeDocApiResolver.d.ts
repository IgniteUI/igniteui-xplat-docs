import type { Platform } from '../types/api-config.types';
declare type TypeCategory = 'enum' | 'class' | 'interface' | 'type';
declare type MemberCategory = 'property' | 'method' | 'accessor' | 'event' | 'enum-member';
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
export declare class TypeDocApiResolver {
    private platform;
    private config;
    private typePatterns;
    /** Lookup by platform-specific name: "IgrList" → TypeDocTypeInfo */
    private typesByPlatformName;
    /** Lookup by generic name (prefix/suffix stripped): "List" → TypeDocTypeInfo */
    private typesByGenericName;
    /** Lookup by lowercase name for case-insensitive fallback */
    private typesByLowerName;
    constructor(platform: Platform);
    /**
     * Loads and parses a TypeDoc JSON file, populating the lookup maps.
     */
    load(jsonPath: string): void;
    /**
     * Loads and parses TypeDoc data from a pre-parsed JSON object.
     */
    loadFromObject(json: TypeDocNode): void;
    get typeCount(): number;
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
    resolveApiLink(ref: string): {
        url: string;
        displayText: string;
    } | null;
    /**
     * Resolves a bare member name using one or more context types.
     *
     * Example:
     *   memberName: "label"
     *   contextTypes: ["TreeItem", "Tree"]
     *
     * Returns the first matching member link or null.
     */
    resolveMemberLink(memberName: string, contextTypes: string[]): {
        url: string;
        displayText: string;
    } | null;
    /**
     * Checks if a given type name exists in the TypeDoc data.
     */
    hasType(name: string): boolean;
    /**
     * Gets the type info for a given name.
     */
    getType(name: string): TypeDocTypeInfo | null;
    private findType;
    private buildUrl;
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
    private buildFilenamePrefix;
    private findMember;
    private getLegacyPackagePrefix;
    private parseProject;
    private parseType;
    private stripPlatformAffixes;
    private classifyType;
    private classifyMember;
}
export {};
//# sourceMappingURL=TypeDocApiResolver.d.ts.map