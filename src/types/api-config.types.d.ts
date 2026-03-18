export declare type Platform = 'Angular' | 'React' | 'WebComponents' | 'Blazor';
export interface PlatformConfig {
    prefix: string;
    suffix: string;
    apiRoot: string;
    /** API root used when resolving TypeDoc-based links. Falls back to apiRoot if not set. */
    typeDocApiRoot?: string;
    /** When true, member anchors keep their original casing for TypeDoc links. Defaults to false (lowercased). */
    preserveMemberCasing?: boolean;
    /** When true, prepend the TypeDoc module name (with hyphens) to the type filename in the URL. E.g. "igniteui-react.igravatar.html" */
    typeDocFilenameUseModulePrefix?: boolean;
    packageJoin: string;
    packageOverrides?: Record<string, {
        apiRoot?: string;
        /** When true, member anchors keep their original casing. Defaults to false (lowercased). */
        preserveMemberCasing?: boolean;
    }>;
}
export interface ApiConfig {
    platforms: Record<Platform, PlatformConfig>;
    typePatterns: Record<string, string>;
}
//# sourceMappingURL=api-config.types.d.ts.map