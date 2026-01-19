export declare class MappingLoader {
    namespace: string | null;
    getPlatformTypeName(name: string, platform: APIPlatform, filePath: string): string | null;
    getTypeMember(name: string, memberName: string, filePath: string): APIMemberInfo | null;
    getPlatformMemberName(name: string, platform: APIPlatform, memberName: string, filePath: string): string | null;
    getType(name: string, filePath: string): APITypeInfo | undefined;
    mergeNames(target: APIPlatformNameGroup, source: APIPlatformNameGroup): any;
    mergeMember(target: APIMemberInfo, source: APIMemberInfo): any;
    mergeType(target: APITypeInfo, source: APITypeInfo): any;
    private key;
    constructor();
    get mapping(): APIMapping;
    private _memberMap;
    private _mapping;
    import(mapping: APIMapping): void;
    private _typeMap;
    private _aliasedNames;
    private _quickTypeMap;
    importType(type: APITypeInfo): void;
}
export interface APIMapping {
    extraFiles?: string[];
    types: APITypeInfo[];
}
export interface APIPlatformNameGroup {
    platform: APIPlatform;
    mappedName: string;
    mappedType: string;
    moduleName?: string;
    fileName?: string;
    dynamicModuleName?: string;
}
export interface APIMemberInfo {
    isVirtual?: boolean;
    names: APIPlatformNameGroup[];
    originalName: string;
    originalType: string;
}
export interface APITypeInfo {
    originalBaseTypeName?: string;
    originalBaseTypeNamespace?: string;
    originalName: string;
    originalNamespace: string;
    packageName: string;
    members?: APIMemberInfo[];
    names: APIPlatformNameGroup[];
    isEnum: boolean;
    isInterface: boolean;
    isType: boolean;
}
export declare enum APIPlatform {
    WPF = 0,
    UWP = 1,
    XamarinAndroid = 2,
    XamariniOS = 3,
    XamarinForms = 4,
    JQuery = 5,
    Angular = 6,
    WindowsForms = 7,
    React = 8,
    WebComponents = 9,
    Blazor = 10
}
//# sourceMappingURL=MappingLoader.d.ts.map