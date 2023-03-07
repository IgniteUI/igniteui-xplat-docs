export class MappingLoader {

    public namespace: string | null = null;

    getPlatformTypeName(name: string, platform: APIPlatform) {
        let type = this.getType(name);
        if (type) {
            for (let name of type.names) {
                if (name.platform == platform) {
                    return name.mappedName;
                }
            }
        }
        return null;
    }

    getTypeMember(name: string, memberName: string) {
        let typeInfo = this.getType(name);
        if (!typeInfo) {
            return null;
        }
        if (this._memberMap.has(typeInfo.originalNamespace + "." + typeInfo.originalName)) {
            let map = this._memberMap.get(typeInfo.originalNamespace + "." + typeInfo.originalName)!;
            if (map.has(memberName)) {
                return map.get(memberName)!;
            }
        }
        return null;
    }

    getPlatformMemberName(name: string, platform: APIPlatform, memberName: string) {
        let member = this.getTypeMember(name, memberName);
        if (member == null) {
            return null;
        }

        for (let platformName of member.names) {
            if (platformName.platform == platform) {
                return platformName.mappedName;
            }
        }

        return null;
    }

    getType(name: string) : APITypeInfo | undefined {
        if (name === undefined || name === null){
            return undefined;
        }
        if (!(typeof name == "string")) {
            return undefined;
        }
        else if (name.indexOf(".") >= 0) {
            return this._typeMap.get(name);
        } else {
            if (this._aliasedNames.has(name)) {

                if (this.namespace === null && name === "Grid") {
                    this.namespace = "Infragistics.Controls"; // defaulting to WebGrid's namespace
                }

                if (this.namespace) {
                    return this.getType(this.namespace + "." + name);
                } else {
                    throw new Error("type name is not unique, use namespace qualified!. Found '" + name + "' with namespace: " + this.namespace);
                    // console.log(this._aliasedNames);
                    // if (name === "Grid") {
                    //     var gridAPI = this._quickTypeMap.get("Grid");
                    //     if (gridAPI !== undefined) {
                    //         // console.log(gridAPI);
                    //         return gridAPI;
                    //     }
                    //     return gridAPI;
                    // }
                    // else {
                        // console.log(this._quickTypeMap);
                        // for (const [key, v] of this._quickTypeMap) {
                        //     console.log(" " + v.originalNamespace + " " +  key); //
                        // }
                        // throw new Error("type name is not unique, use namespace qualified!. Found '" + name + "' with namespace: " + this.namespace);
                    // }
                }
            }
            return this._quickTypeMap.get(name);
        }
    }

    mergeNames(target: APIPlatformNameGroup, source: APIPlatformNameGroup): any {

    }

    mergeMember(target: APIMemberInfo, source: APIMemberInfo): any {
        for (var name of source.names) {
            let targ: APIPlatformNameGroup | null = null;
            for (var targetName of target.names) {
                if (name.platform == targetName.platform) {
                    targ = targetName;
                    break;
                }
            }
            if (targ == null) {
                target.names.push(name);
            } else {
                this.mergeNames(targ, name);
            }
        }
    }

    mergeType(target: APITypeInfo, source: APITypeInfo): any {
        if (!this._memberMap.has(target.originalNamespace + "." + target.originalName)) {
            this._memberMap.set(target.originalNamespace + "." + target.originalName, new Map<string, APIMemberInfo>());
        }
        let map = this._memberMap.get(target.originalNamespace + "." + target.originalName)!;

        if (source.members) {
            if (!target.members) {
                target.members = [];
            }
            for (let member of source.members) {
                if (!map.has(member.originalName)) {
                    target.members.push(member);
                    map.set(member.originalName, member);
                } else {
                    this.mergeMember(
                        map.get(member.originalName)!,
                        member
                    )
                }
            }
        }

        if (source.names) {
            if (!target.names) {
                target.names = [];
            }
            for (let i = 0; i < source.names.length; i++) {
                let sourceName = source.names[i];
                let found = false;
                for (let j = 0; j < target.names.length; j++) {
                    let targetName = target.names[j];
                    if (targetName.platform == sourceName.platform) {
                        found = true;
                        break;
                    }
                }
                if (!found) {
                    target.names.push(sourceName);
                }
            }

        }
    }

    private key(target: APITypeInfo) {
        return target.originalNamespace + "." + target.originalName;
    }

    constructor() {

    }

    get mapping(): APIMapping {
        return this._mapping;
    }

    private _memberMap: Map<string, Map<string, APIMemberInfo>> = new
        Map<string, Map<string, APIMemberInfo>>();

    private _mapping: APIMapping = {
        extraFiles: [],
        types: []
    };

    import(mapping: APIMapping) {
        if (mapping.extraFiles && this._mapping.extraFiles) {
            for (let val of mapping.extraFiles) {
                this._mapping.extraFiles.push(val);
            }
        }
        for (let val of mapping.types) {
            this.importType(val);
        }
    }

    private _typeMap: Map<string, APITypeInfo> = new Map<string, APITypeInfo>();
    private _aliasedNames: Map<string, boolean> = new Map<string, boolean>();
    private _quickTypeMap: Map<string, APITypeInfo> = new Map<string, APITypeInfo>();


    importType(type: APITypeInfo) {
        if (type.members) {
            for (let member of type.members) {
                for (let name of member.names) {
                    name.platform = (<any>APIPlatform)[<string><any>name.platform];
                }
            }
        }
        for (let name of type.names) {
            name.platform = (<any>APIPlatform)[<string><any>name.platform];
        }

        let existing: APITypeInfo | undefined;
        if (this._typeMap.has(type.originalNamespace + "." +type.originalName)) {
            existing = this._typeMap.get(type.originalNamespace + "." + type.originalName);
        }
        if (!existing) {
            this._typeMap.set(type.originalNamespace + "." + type.originalName,
            type);
            if (!this._quickTypeMap.has(type.originalName)) {
                this._quickTypeMap.set(type.originalName, type);
            } else {
                this._aliasedNames.set(type.originalName, true);
            }
            this._mapping.types.push(type);
            if (type.members) {
                let memberMap = new Map<string, APIMemberInfo>();
                this._memberMap.set(type.originalNamespace + "." + type.originalName, memberMap);
                for (let member of type.members) {
                    memberMap.set(member.originalName, member);
                }
            }
        } else {
            this.mergeType(existing, type);
        }
    }
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
    members?: APIMemberInfo[];
    names: APIPlatformNameGroup[];
    isEnum: boolean;
}

export enum APIPlatform {
    WPF,
    UWP,
    XamarinAndroid,
    XamariniOS,
    XamarinForms,
    JQuery,
    Angular,
    WindowsForms,
    React,
    WebComponents,
    Blazor
}