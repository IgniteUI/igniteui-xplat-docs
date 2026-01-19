import apiConfig from '../../api-config.json';
import type { ApiConfig, Platform, PlatformConfig } from '../types/api-config.types';

export class SimpleApiResolver {
    private platform: Platform;
    private config: PlatformConfig;
    private componentPackageMap: Record<string, string>;
    private typePatterns: Record<string, string>;
    private componentAvailability: Record<string, any>;

    constructor(platform: string) {
        if (!this.isValidPlatform(platform)) {
            throw new Error(`Invalid platform: ${platform}. Must be one of: Angular, React, WebComponents, Blazor`);
        }
        
        this.platform = platform as Platform;
        const typedConfig = apiConfig as ApiConfig;
        this.config = typedConfig.platforms[this.platform];
        this.componentPackageMap = typedConfig.componentPackageMap;
        this.typePatterns = typedConfig.typePatterns;
        this.componentAvailability = typedConfig.componentPlatformAvailability || {};
    }

    private isValidPlatform(platform: string): platform is Platform {
        return ['Angular', 'React', 'WebComponents', 'Blazor'].includes(platform);
    }

    /**
     * Resolves an API reference to a platform-specific URL
     * @param apiRef Format: @api:[type:]TypeName[.memberName]
     * @param componentContext Optional context for determining package
     * @returns URL string or null if component not available on platform
     */
    resolveApiLink(apiRef: string, componentContext?: string): string | null {
        // Parse reference: @api:[type:]TypeName[.memberName]
        const match = apiRef.match(/@api:(?:(enum|interface|type):)?([A-Z]\w+)(?:\.(\w+))?/);
        console.log('Resolving API ref:', match);
        if (!match) return apiRef.replace('@api:', '');

        const [, typeHint, typeName, memberName] = match;
        
        // Check if component is available on this platform
        const availabilityCheck = this.checkComponentAvailability(typeName);
        if (!availabilityCheck.available) {
            return this.handleUnavailableComponent(typeName, availabilityCheck.fallbackPlatform, typeHint, memberName);
        }

        // Determine type category (class, enum, interface)
        const typeCategory = this.inferType(typeHint, typeName);
        
        // Apply platform naming convention (suffix only for components/classes)
        const platformType = this.applyNamingConvention(typeName, typeCategory);
        
        // Determine which API root to use based on package
        const apiRoot = this.getApiRootForComponent(typeName, componentContext);
        
        // Build URL
        let url = `${apiRoot}${this.typePatterns[typeCategory]}${platformType.toLowerCase()}.html`;
        
        if (memberName) {
            url += `#${memberName.toLowerCase()}`;
        }

        return url;
    }

    private checkComponentAvailability(typeName: string): { available: boolean; fallbackPlatform?: Platform } {
        // Check if component has platform restrictions
        const availability = this.componentAvailability[typeName];
        
        if (!availability) {
            // No restrictions, available everywhere
            return { available: true };
        }

        // Check if current platform is in the available list
        if (availability.availableOn.includes(this.platform)) {
            return { available: true };
        }

        // Not available on this platform - determine fallback
        let fallbackPlatform: Platform | undefined;
        
        // Check for platform-specific fallback first
        if (availability.fallbackByPlatform && availability.fallbackByPlatform[this.platform]) {
            fallbackPlatform = availability.fallbackByPlatform[this.platform];
        } else if (availability.defaultFallback) {
            // Use default fallback
            fallbackPlatform = availability.defaultFallback;
        }

        return { 
            available: false, 
            fallbackPlatform 
        };
    }

    private handleUnavailableComponent(
        typeName: string, 
        fallbackPlatform?: Platform,
        typeHint?: string,
        memberName?: string
    ): string | null {
        // If there's a fallback platform, generate URL for that platform
        if (fallbackPlatform) {
            const fallbackResolver = new SimpleApiResolver(fallbackPlatform);
            const apiRef = this.buildApiRef(typeName, typeHint, memberName);
            return fallbackResolver.resolveApiLink(apiRef);
        }

        // No fallback available, return null or warning
        console.warn(`Component ${typeName} is not available on ${this.platform} platform and no fallback is configured`);
        return null;
    }

    private buildApiRef(typeName: string, typeHint?: string, memberName?: string): string {
        let ref = '@api:';
        if (typeHint) {
            ref += `${typeHint}:`;
        }
        ref += typeName;
        if (memberName) {
            ref += `.${memberName}`;
        }
        return ref;
    }

    private getApiRootForComponent(typeName: string, componentContext?: string): string {
        // First, try to determine package from the type name itself
        let packageName = this.componentPackageMap[typeName];
        
        // If not found, try using the component context (current topic)
        if (!packageName && componentContext) {
            packageName = this.componentPackageMap[componentContext];
        }
        
        // Check if this package has an override for the current platform
        if (packageName && 
            this.config.packageOverrides && 
            this.config.packageOverrides[packageName] &&
            this.config.packageOverrides[packageName].apiRoot) {
            return this.config.packageOverrides[packageName].apiRoot!;
        }
        
        // Fall back to default API root
        return this.config.apiRoot;
    }

    private applyNamingConvention(typeName: string, typeCategory: string): string {
        // Remove any existing platform prefix (Igx, Igr, Igc, Igb)
        const cleanName = typeName.replace(/^(Igx|Igr|Igc|Igb)/, '');
        console.log('----------Using the new system--------');
        
        // Enums don't get platform prefix
        if (typeCategory === 'enum') {
            return cleanName;
        }
        
        // Only apply suffix for actual component classes
        const shouldApplySuffix = this.shouldApplyComponentSuffix(cleanName, typeCategory);
        const suffix = shouldApplySuffix ? this.config.suffix : '';
        
        // Apply platform-specific prefix and suffix (but not for enums)
        return `${this.config.prefix}${cleanName}${suffix}`;
    }

    private shouldApplyComponentSuffix(typeName: string, typeCategory: string): boolean {
        // Don't apply suffix to non-class types
        if (typeCategory !== 'class') {
            return false;
        }

        // Don't apply suffix to event args, options, settings, etc.
        const nonComponentSuffixes = [
            'EventArgs',
            'Options',
            'Settings',
            'Config',
            'State',
            'Context',
            'Provider',
            'Service',
            'Directive',
            'Pipe',
            'Module',
            'Strategy',
            'Factory',
            'Builder',
            'Handler',
            'Controller',
            'Helper',
            'Util',
            'Utils'
        ];

        // Check if the type name ends with any non-component suffix
        for (const suffix of nonComponentSuffixes) {
            if (typeName.endsWith(suffix)) {
                return false;
            }
        }

        // Apply suffix to actual UI components
        return true;
    }

    private inferType(hint: string | undefined, typeName: string): string {
        if (hint) {
            return hint === 'enum' ? 'enum' : hint;
        }
        
        // Simple heuristics for type detection
        if (typeName.startsWith('I') && typeName[1] === typeName[1].toUpperCase()) {
            return 'interface';
        }
        
        // Check if it ends with common interface/type patterns
        if (typeName.endsWith('EventArgs') || 
            typeName.endsWith('Options') || 
            typeName.endsWith('Settings') ||
            typeName.endsWith('Config') ||
            typeName.endsWith('State')) {
            return 'interface';
        }
        
        return 'class'; // default
    }
}