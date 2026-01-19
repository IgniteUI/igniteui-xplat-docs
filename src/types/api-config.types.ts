export type Platform = 'Angular' | 'React' | 'WebComponents' | 'Blazor';

export interface PlatformConfig {
    prefix: string;
    suffix: string;
    apiRoot: string;
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