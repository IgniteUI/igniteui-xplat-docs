import { APIPlatform } from "./MappingLoader";
import { FencedBlockInfo } from "./PlatformDetector";
export declare class ComponentDetector {
    constructor();
    detectComponents(docComponents: any, fencedBlockInfo: FencedBlockInfo): string[];
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
//# sourceMappingURL=ComponentDetector.d.ts.map