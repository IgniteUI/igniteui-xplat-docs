export type Platform = 'Angular' | 'React' | 'WebComponents' | 'Blazor';

export interface PlatformConfig {
    prefix: string;
    suffix: string;
    apiRoot: string;
    /** API root used when resolving TypeDoc-based links (typically without /api/ path segment). Falls back to apiRoot if not set. */
    typeDocApiRoot?: string;
    /** When true, prepend the TypeDoc module name (with hyphens) to the type filename in the URL. E.g. "igniteui-react.igravatar.html" */
    typeDocFilenameUseModulePrefix?: boolean;
    packageJoin: string;
    packageOverrides?: Record<string, {
        apiRoot?: string;
    }>;
}

export interface ComponentAvailability {
    availableOn: Platform[];
    fallbackByPlatform?: Partial<Record<Platform, Platform>>;
    defaultFallback?: Platform;
}

export interface ApiConfig {
    platforms: Record<Platform, PlatformConfig>;
    componentPackageMap: Record<string, string>;
    componentPlatformAvailability?: Record<string, ComponentAvailability>;
    typePatterns: Record<string, string>;
}