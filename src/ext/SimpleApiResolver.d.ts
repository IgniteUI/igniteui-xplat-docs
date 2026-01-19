export declare class SimpleApiResolver {
    private platform;
    private config;
    private componentPackageMap;
    private typePatterns;
    private componentAvailability;
    constructor(platform: string);
    private isValidPlatform;
    /**
     * Resolves an API reference to a platform-specific URL
     * @param apiRef Format: @api:[type:]TypeName[.memberName]
     * @param componentContext Optional context for determining package
     * @returns URL string or null if component not available on platform
     */
    resolveApiLink(apiRef: string, componentContext?: string): string | null;
    private checkComponentAvailability;
    private handleUnavailableComponent;
    private buildApiRef;
    private getApiRootForComponent;
    private applyNamingConvention;
    private shouldApplyComponentSuffix;
    private inferType;
}
//# sourceMappingURL=SimpleApiResolver.d.ts.map