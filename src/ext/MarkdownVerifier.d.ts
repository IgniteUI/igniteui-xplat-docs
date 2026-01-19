import { MarkdownContent, MarkdownSection } from './MarkdownContent';
export declare enum SectionType {
    Unknown = 0,
    Metadata = 1,
    Header = 2,
    Bullet = 3,
    Code = 4,
    Sample = 5,
    Table = 6,
    Paragraph = 7,
    Image = 8,
    Note = 9
}
export declare enum MarkdownWordType {
    Unknown = 0,
    LinkToApi = 1,
    LinkToTopic = 2,
    LinkExternal = 3,
    Text = 4,
    Note = 5
}
export declare enum MarkdownStatus {
    Unknown = 0,
    Pass = 1,
    Fail = 2
}
export declare class MarkdownResult {
    filePath: string;
    isValid: boolean;
    content: string;
    error: string;
    sections: string[];
}
export declare class MarkdownMetadata22 {
    isValid: boolean;
    hasTitle: boolean;
    hasTypes: boolean;
    hasDescription: boolean;
    hasKeywords: boolean;
    hasNamespace: boolean;
}
export declare class MarkdownVerifier {
    filePath: string;
    errors: string[];
    isValid: boolean;
    docsAutoCorrect: boolean;
    trim(line: string): string;
    isMetadata(section: string): boolean;
    isCode(section: string): boolean;
    isSample(section: string): boolean;
    isNote(section: string): boolean;
    isTable(section: string): boolean;
    isHeader(section: string): boolean;
    isImage(section: string): boolean;
    isBullet(section: string): boolean;
    count(str: string, search: string): number;
    isVariable(str: string): boolean;
    isNumber(str: string): boolean;
    getSectionType(section: string): SectionType;
    cleanup(content: string, filePath: string): string;
    verifyMarkdown(content: string, filePath: string): MarkdownResult;
    verifyMetadata(md: MarkdownContent): void;
    verifyBuildFlags(content: string): string;
    verifySectionHeader(section: MarkdownSection): void;
    verifySectionCode(section: MarkdownSection): void;
    verifySectionTable(section: MarkdownSection): void;
    verifySectionNote(section: MarkdownSection): void;
    verifySectionSample(section: MarkdownSection): void;
    verifySectionParagraph(section: MarkdownSection): void;
    verifySectionImage(section: MarkdownSection): void;
    verifyVariable(str: string): void;
    verifyLinkToTopic(str: string): void;
    verifyLinkToSite(str: string): void;
    verifyLinkToAPI(str: string): void;
    verifyDocsVariable(content: string): void;
    getSectionName(sectionType: SectionType): string;
    initialize(): void;
    verifyLinkToAPI22(str: string, filePath: string, lineIndex: number): string | null;
}
//# sourceMappingURL=MarkdownVerifier.d.ts.map