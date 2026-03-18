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
    typeName?: string;
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
    sources?: {
        fileName: string;
        line: number;
        character: number;
    }[];
    parameters?: TypeDocNode[];
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
     * The module name is taken from the root node's `packageName` field when present
     * (e.g. "igniteui-dockmanager"), falling back to the filename stem so that
     * packageOverrides keys are matched correctly.
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
     * Resolves a bare member name (e.g. `selection`) against context types
     * from front matter (`mentionedTypes`) and current file type.
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
    private findMember;
    private buildUrl;
    private buildMemberAnchor;
    private getPackagePrefix;
    private parseProject;
    private parseType;
    private stripPlatformAffixes;
    private classifyType;
    private classifyMember;
    private resolveTypeName;
}
export {};
//# sourceMappingURL=TypeDocApiResolver.d.ts.map