import { MappingLoader, APIPlatform } from './MappingLoader';
import { MarkdownVerifier } from './MarkdownVerifier';
export declare class MarkdownTransformer {
    private _platformDetector;
    private _componentDetector;
    private _mappings;
    private _platform;
    private _envTarget;
    private _envBrowser;
    docsLanguage: string;
    docsVerifier: MarkdownVerifier | undefined;
    shouldOmitFencedCode(language: string, platform: APIPlatform[], components: string[], options: any): boolean;
    private _docs;
    configure(mappings: MappingLoader, platform: APIPlatform, docs: any, envTarget: string): void;
    replaceAll(orgStr: string, oldStr: string, newStr: string): string;
    transformContent(typeName: string, fileContent: string, filePath: string, callback: (err: any, results: {
        content: string;
        componentOutput: string | null;
    }[] | null) => void): void;
    getGithubURL(codeViewerLine: string): string;
    verifyMarkdown(fileContent: string, filePath: string): any;
    updateApiSection(fileContent: string, filePath: string): string;
    simplifyJson(jsonContent: string, platform: string): string;
    simplifyJsonNodes(jsonNodes: TocNode[], platform: string): TocNode[];
    generateTOC(jsonPath: string, platform: string, language: string, isFirstRelease: boolean, excludedFiles: string[]): string[];
    generateTopics(paths: string[], tocNodes: TocNode[]): void;
    generateNodes(tocNodes: TocNode[], tabIndent: number, isFirstRelease: boolean, platform: string): string;
    filterTOC(jsonContent: string, platform: string, language: string, excludedFiles: string[]): TocNode[];
    filterContains(nodeReference: string, excludedFiles: string[]): boolean;
    filterNodes(tocNodes: TocNode[], platform: string, language: string, excludedFiles: string[]): TocNode[];
    parseNodeStatus(status: string | string[], platform: string): string;
    getNodeInfo(node: TocNode): string;
}
export declare class Strings {
    static endsWith(str: string, pattern: string): boolean;
    static excludes(str: string, exclusions: string[], useEndsWith?: boolean): boolean;
    static includes(str: string, pattern: string): boolean;
    static replace(orgStr: string, oldStr: string, newStr: string): string;
    static extract(orgStr: string, startStr: string, endStr: string): string;
    static toTitleCase(str: string, separator?: string): string;
    static splitCamel(orgStr: string): string;
    static removeLines(lines: string[], start: number, end: number): string[];
}
export declare class TocNode {
    name: string;
    status?: string | string[];
    href?: string;
    header?: boolean;
    new?: boolean;
    updated?: boolean;
    preview?: boolean;
    beta?: boolean;
    premium?: boolean;
    items?: TocNode[];
    exclude?: string[];
    constructor();
}
//# sourceMappingURL=MarkdownTransformer.d.ts.map