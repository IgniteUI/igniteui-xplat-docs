

console.log("MarkdownVerifier... loaded");

var NEWLINE: string = '\r\n';
var DOUBLE_LINE: string = '\r\n\r\n';
var SECTION_SEPARATOR: string = '\r\n\r\n';

export enum SectionType {
    Unknown,
    Metadata,
    Header,
    Bullet,
    Code,
    Sample,
    Table,
    Paragraph,
    Image,
    Note,
}

export enum MarkdownWordType {
    Unknown,
    LinkToApi,
    LinkToTopic,
    LinkExternal,
    Text,
    Note,
}

export class MarkdownVerifier {



    private filePath: string = ""; 

    trim(line: string): string {
        // if (!this.isBullet(line)) {
        //     return line.trim();
        // }
        return line;
    }

    isMetadata(line: string): boolean { return line.startsWith("---"); }    
    isCode(line: string): boolean { return line.startsWith("```"); }   
    isSample(line: string): boolean {  return line.startsWith("`sample="); }
    isNote(line: string): boolean {  return line.startsWith("> "); }
    isTable(line: string): boolean { return line.startsWith("| "); }    
    isHeader(line: string): boolean { return line.startsWith("#"); }
    isImage(line: string): boolean {  return line.startsWith("<img "); }
    isBullet(line: string): boolean { return line.startsWith("* "); }
    
    getSectionType(section: string): SectionType {
        if (this.isMetadata(section)) { return SectionType.Metadata; }
        if (this.isHeader(section)) { return SectionType.Header; }
        if (this.isSample(section)) { return SectionType.Sample;}
        if (this.isNote(section)) { return SectionType.Note; }
        if (this.isTable(section)) { return SectionType.Table; }
        if (this.isImage(section)) { return SectionType.Image; }
        if (this.isBullet(section)) { return SectionType.Bullet; }
        if (this.isCode(section)) { return SectionType.Code; }
        return SectionType.Paragraph;
        // return SectionType.Unknown;
    }
    
    cleanup(content: string, filePath: string): string {
 
        content = content.trim();
        var lines = content.split(NEWLINE);
        
        for (let i = 0; i < lines.length; i++) {
            // lines[i] = lines[i].trim();
            lines[i] = this.trim(lines[i]);
        }

        var wrapWithEmptyLines: string[] = ["#", "`sample="];
        for (let i = 0; i < lines.length; i++) {

            for (const item of wrapWithEmptyLines) {
                
                if (lines[i].startsWith(item)) {
                    if (lines[i-1] !== ""){
                        lines[i] = NEWLINE + lines[i];
                    }
                    if (lines[i+1] !== ""){
                        lines[i] = lines[i] + NEWLINE;
                    }
                }
            }
            
        }

        var multipleLines = lines.join(NEWLINE);
        multipleLines = multipleLines.split(NEWLINE+NEWLINE+NEWLINE+NEWLINE+NEWLINE).join(SECTION_SEPARATOR);
        multipleLines = multipleLines.split(NEWLINE+NEWLINE+NEWLINE+NEWLINE).join(SECTION_SEPARATOR);
        // multipleLines = multipleLines.split(NEWLINE+NEWLINE+NEWLINE).join(DOUBLE_LINE);
        
        var test = multipleLines.split(NEWLINE);
        for (let i = 0; i < 20; i++) {
            console.log('>' + test[i] + '<');
        }
        return multipleLines;
    }

    verifyMarkdown(content: string, filePath: string) {

        this.initialize();

        this.filePath = filePath;

        var result: any = {};
        result.isValid = true;
        result.content = content;

        content = this.cleanup(content, filePath);

        // var lines = content.split('\r\n');
         
        // var file = lines.join('\n\r').split('\n\r\r').join('\n\r');

        var sections: string[] = content.split(SECTION_SEPARATOR);
        // var sections: string[] = file.split('\n\r\n\r');
        // var sections: string[] = content.split('\n\r\n\r');
        // var sections = content.split('\n\n');

        // console.log(sections[0]);
        // console.log("-------------------------------------")
        // console.log(sections[1]);

        for (let i = 0; i < 10; i++) {
            // console.log("_____ " + i + " ____");
            // console.log(sections[i]);

            var section = sections[i];
            var sectionType = this.getSectionType(section);
            console.log("_____ " + i + " _____ " + this.getSectionName(sectionType) + " _____ ");
            // console.log(">>>" + section + "<<<");
            console.log(section);

            if (sectionType === SectionType.Metadata) {
                this.verifySectionMetadata(section);
            }
            else if (sectionType === SectionType.Header) {
                this.verifySectionHeader(section);
            }
            else if (sectionType === SectionType.Sample) {
                this.verifySectionSample(section);
            }
            else if (sectionType === SectionType.Code) {
                this.verifySectionCode(section);
            }
            else if (sectionType === SectionType.Table) {
                this.verifySectionTable(section);
            }
            else if (sectionType === SectionType.Paragraph) {
                this.verifySectionParagraph(section);
            } else {
                
                // console.log("verifySection Unknown");
            }

        }

        return result;
    }

    
    verifySectionMetadata(content: string) {
        // console.log("verifySectionMetadata");
    }

    verifySectionHeader(content: string) {
        // console.log("verifySectionHeader");
    }

    verifySectionCode(content: string) {
        // console.log("verifySectionCode");

        // starts with ```LANG
        // end with ```
    }

    verifySectionSample(content: string) {
        // console.log("verifySectionSample");
    }

    verifySectionParagraph(content: string) {
        // console.log("verifySectionParagraph");
    }

    verifySectionTable(content: string) {
        // console.log("verifySectionNote");
    }

    verifySectionNote(content: string) {
        // console.log("verifySectionNote");
    }

    verifyLinkToAPI(content: string) {
        // console.log("verifyLinkToAPI");
    }

    verifyLinkToTopic(content: string) {
        // console.log("verifyLinkToTopic");
    }

    verifyDocsVariable(content: string) {
        // console.log("verifyDocsVariable");
    }


    getSectionName(sectionType: SectionType): string {
        var names: string[] = [];
        for (var n in SectionType) {
            if (typeof SectionType[n] === 'number') 
                names.push(n);
        }
        return names[sectionType];
    }

    initialize() {


    }
}

// exports.verifyMarkdownFile = verifyMarkdownFile;