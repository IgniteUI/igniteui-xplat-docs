import { APIPlatform } from "./MappingLoader";
export declare class PlatformDetector {
    private _rules;
    constructor();
    detectPlatform(fencedBlockInfo: FencedBlockInfo): APIPlatform[];
}
export declare class FencedBlockInfo {
    code: string;
    lang: string;
}
export declare abstract class PlatformDetectorRule {
    abstract match(info: FencedBlockInfo): boolean;
    abstract get platform(): APIPlatform;
    static isTS(lang: string): boolean;
    static isTSX(lang: string): boolean;
    static isHTML(lang: string): boolean;
    static isJS(lang: string): boolean;
    static isJson(lang: string): boolean;
    static isRazor(lang: string): boolean;
}
//# sourceMappingURL=PlatformDetector.d.ts.map