export declare class MarkdownContent {
    sections: MarkdownSection[];
    metadata: MarkdownMetadata;
    content: string;
    filePath: string;
    sectionStrings: string[];
    apiMembers: string[];
    isLocalEN(): boolean;
    isLocalJP(): boolean;
    isLocalKR(): boolean;
    toString(): string;
    constructor(content: string, filePath: string);
}
export declare class MarkdownSection {
    content: string;
    lines: MarkdownLines;
    index: number;
    type: string;
    filePath: string;
    isHeader(): boolean;
    isCode(): boolean;
    isSample(): boolean;
    isNote(): boolean;
    isTable(): boolean;
    isImage(): boolean;
    isDivisor(): boolean;
    isBullet(): boolean;
    log(): void;
    toString(): string;
    constructor(content: string);
}
export declare class MarkdownMetadata {
    content: string;
    lines: MarkdownLine[];
    mentionedTypes: string;
    mentionedLinks: string[];
    sharedComponents: string;
    targetComponent: string;
    title: string;
    keywords: string;
    description: string;
    language: string;
    isEmpty(): boolean;
    hasContent(): boolean;
    hasMentionedTypes(): boolean;
    hasMentionedLinks(): boolean;
    hasSharedComponents(): boolean;
    hasTitle(): boolean;
    hasKeywords(): boolean;
    hasLanguage(): boolean;
    hasDescription(): boolean;
    toString(): string;
    constructor(content: string);
}
export declare class MarkdownLine {
    content: string;
    index: number;
    toString(): string;
    log(): void;
    constructor(content: string);
    isCodeViewerWithGithub(): boolean;
    isCodeViewerWithAltName(): boolean;
    isCodeViewerWithIFrame(): boolean;
    isCodeViewerWithURL(): boolean;
    isCodeViewerWithStyle(): boolean;
    isCodeViewer(): boolean;
    isDivider(): boolean;
    isListItem(): boolean;
    isTitle(): boolean;
    isEmpty(): boolean;
    isCodeSnippet(): boolean;
    isParagraph(): boolean;
}
export declare class MarkdownLines extends Array<MarkdownLine> {
    toString(): string;
}
//# sourceMappingURL=MarkdownContent.d.ts.map