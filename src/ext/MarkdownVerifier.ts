// provides functions for verifying content of markdown files

console.log("MarkdownVerifier... loaded");

import { MarkdownContent, MarkdownSection, MarkdownMetadata, MarkdownLine } from './MarkdownContent';

var NEWLINE: string = '\r\n';
var DOUBLE_LINE: string = '\r\n\r\n'; 

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

export enum MarkdownStatus {
    Unknown,
    Pass,
    Fail,
}

export class MarkdownResult {
    public filePath: string = ""; 
    public isValid: boolean = true; 
    public content: string = ""; 
    public error: string = ""; 
    public sections: string[] = [];
    // public status: MarkdownStatus = MarkdownStatus.Unknown;

}

export class MarkdownMetadata22 {
    public isValid: boolean = true; 
    public hasTitle: boolean = true; 
    public hasTypes: boolean = true; 
    public hasDescription: boolean = true; 
    public hasKeywords: boolean = true; 
    public hasNamespace: boolean = true; 
}

export class MarkdownVerifier {

    // public markdown: MarkdownResult = new MarkdownResult(); 
    public filePath: string = ""; 
    public error: string = ""; 
    public errors: string[] = []; 
    public isValid: boolean = true; 
    public docsAutoCorrect: boolean = false;

    trim(line: string): string {
        if (!this.isBullet(line)) {
            return line.trim();
        }
        return line;
    }

    isMetadata(section: string): boolean { return section.startsWith("---"); }    
    isCode(section: string): boolean { return section.startsWith("```"); }   
    isSample(section: string): boolean {  return section.startsWith("`sample="); }
    isNote(section: string): boolean {  return section.startsWith("> "); }
    isTable(section: string): boolean { return section.startsWith("| "); }    
    isHeader(section: string): boolean { return section.startsWith("#"); }
    isImage(section: string): boolean {  return section.startsWith("<img "); }
    isBullet(section: string): boolean { return section.startsWith("* "); }
    
    isNumber(str: string): boolean { 
        var numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "-"];
        for (let i = 0; i < str.length; i++) {
            if (numbers.indexOf(str[i]) < 0) return false;
        }
        return true; 
    }
    

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
        multipleLines = multipleLines.split(NEWLINE+NEWLINE+NEWLINE+NEWLINE+NEWLINE).join(DOUBLE_LINE);
        multipleLines = multipleLines.split(NEWLINE+NEWLINE+NEWLINE+NEWLINE).join(DOUBLE_LINE);
        multipleLines = multipleLines.split(NEWLINE+NEWLINE+NEWLINE).join(DOUBLE_LINE);
        
        // var test = multipleLines.split(NEWLINE);
        // for (let i = 0; i < 20; i++) {
        //     console.log('>' + test[i] + '<');
        // }
        return multipleLines;
    }

    verifyMarkdown(content: string, filePath: string): MarkdownResult {

        this.initialize();

        this.errors = [];
        var md = new MarkdownContent(content, filePath);
        // console.log(md.sections[0]);
        // md.sections[0].log();

        this.verifyMetadata(md);
        // TODO refactor
        // var verContent = this.verifyLinksToTopic(content);

        this.filePath = filePath;
        this.isValid = true;
        this.error = "";
 

        // TODO cleanup markdown
        content = this.cleanup(content, filePath);
  
        var sections: string[] = content.split(DOUBLE_LINE); 

        // console.log(sections[0]);
        // console.log("-------------------------------------")
        // console.log(sections[1]);

        // var count = 5; //sections.length; // 10
        // for (let i = 0; i < count; i++) {
        //     // console.log("_____ " + i + " ____");
        //     // console.log(sections[i]);

        //     var section = sections[i];
        //     var sectionType = this.getSectionType(section);
        //     // console.log("_____ " + i + " _____ " + this.getSectionName(sectionType) + " _____ ");
        //     // console.log(">>>" + section + "<<<");
        //     // console.log(section);

        //     if (sectionType === SectionType.Metadata) {
        //         this.verifySectionMetadata(section);
        //     }
        //     else if (sectionType === SectionType.Header) {
        //         this.verifySectionHeader(section);
        //     }
        //     else if (sectionType === SectionType.Sample) {
        //         this.verifySectionSample(section);
        //     }
        //     else if (sectionType === SectionType.Code) {
        //         this.verifySectionCode(section);
        //     }
        //     else if (sectionType === SectionType.Table) {
        //         this.verifySectionTable(section);
        //     }
        //     else if (sectionType === SectionType.Paragraph) {
        //         this.verifySectionParagraph(section);
        //     } 
        //     else if (sectionType === SectionType.Bullet) {
        //         this.verifySectionParagraph(section);
        //     } 
        //     else {                
        //         // console.log("verifySection Unknown");
        //     }

        //     this.isValid = this.error === "";

        //     if (!this.isValid) {
        //         console.log(this.error);
        //         break;
        //     }
        // }

        var markdown = new MarkdownResult(); 
        markdown.filePath = filePath;
        markdown.content = content;
        markdown.isValid = this.isValid;
        markdown.error = this.error;

        if (this.errors.length > 0){
            markdown.error = this.errors.join('\r\n');
            markdown.isValid = false;
        } else {
            markdown.isValid = true;
        }

        return markdown;
    }

    verifyMetadata(md: MarkdownContent) {
        if (md.metadata === undefined || !md.metadata.hasContent()) {
            this.errors.push("ERROR: metadata is missing wrapped with '---' in " + md.filePath);
        } else {
            // if (md.isLocalEN()) {
            //     md.metadata.language = '_language: en';
            // }

            // auto-correct metadata
            // if (md.isLocalJP()) {
            //     md.metadata.language = '_language: jp';
            // }

            // if (md.isLocalKR()) {
            //     md.metadata.language = '_language: kr';
            // }

            //fileContent = md.toString();
            // console.log("metadata: \n" + md.metadata);

            //var meta = md.metadata.toString();
            if (!md.metadata.hasTitle())
                this.errors.push("ERROR: metadata is missing 'title:' in " + md.filePath);
            else if (!md.metadata.hasDescription())
                this.errors.push("ERROR: metadata is missing '_description:' in " + md.filePath);
            else if (!md.metadata.hasKeywords())
                this.errors.push("ERROR: metadata is missing '_keywords:' in " + md.filePath);
            else if (!md.metadata.hasLanguage() && !md.isLocalEN())
                this.errors.push("ERROR: metadata is missing '_language:' in " + md.filePath);
             
            if (md.metadata.mentionedTypes.includes("`"))
                this.errors.push('ERROR: metadata has backticks (`) instead of double quotes (") ' + md.filePath);
        
            if (md.metadata.hasMentionedLinks())
            {
                if (!md.metadata.hasMentionedTypes() && !md.metadata.hasSharedComponents())
                    this.errors.push("ERROR: metadata is missing 'mentionedTypes:' in " + md.filePath);
                else if (md.metadata.mentionedLinks.includes("`true`"))
                    this.errors.push("ERROR: replace `true` with **true** in " + md.filePath);
                else if (md.metadata.mentionedLinks.includes("`false`"))
                    this.errors.push("ERROR: replace `false` with **false** in " + md.filePath);
            }
        }
    }

    verifySectionMetadata(content: string) {
        var meta = new MarkdownMetadata22();

        var lines = content.split(NEWLINE); 
        for (let i = 0; i < lines.length; i++) {
            if (lines[i].startsWith("title")) {
                meta.hasTitle = true; 
            } else if (lines[i].startsWith("_description")) {
                meta.hasDescription = true; 
            } else if (lines[i].startsWith("_keywords")) {
                meta.hasKeywords = true; 
            } else if (lines[i].startsWith("namespace")) {
                meta.hasNamespace = true; 
            } else if (lines[i].startsWith("mentionedTypes")) {
                meta.hasTypes = true; 

                if (lines[i].indexOf('`') > 0) {
                    this.error = "Metadata cannot contain backticks in 'mentionedTypes'";
                } else if (lines[i].indexOf("'") > 0) {
                    this.error = "Metadata cannot contain single quotes in 'mentionedTypes'";
                }
                // TODO
                // var types = lines[i].replace("mentionedTypes: ", "").replace("[","").replace("]","").trim().split(',');
            }
        }

        if (!meta.hasTitle) this.error = "Metadata is missing 'title'";
        else if (!meta.hasKeywords) this.error = "Metadata is missing '_keywords'";
        else if (!meta.hasDescription) this.error = "Metadata is missing '_description'";
        else if (!meta.hasNamespace) this.error = "Metadata is missing 'namespace'";
        else if (!meta.hasTypes) this.error = "Metadata is missing 'mentionedTypes'";

        // console.log("verifySectionMetadata");
    }

    verifySectionParagraph(content: string) {
        // console.log("verifySectionParagraph");
        // var words = content.split(' ');
        // for (var word of words) {
            //TODO
        // }
    }


    verifySectionHeader(content: string) {
        // console.log("verifySectionHeader");
    }

    verifySectionCode(content: string) {
        // console.log("verifySectionCode");

        // starts with ```LANG
        // end with ```
    }

    verifySectionTable(content: string) {
        // console.log("verifySectionNote");
    }

    verifySectionNote(content: string) {
        // console.log("verifySectionNote");
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
        //TODO load docsConfig.json to verify variables

    }

    
    verifyLinksToTopic(fileContent: string): string {

        console.log("verifyLinksToTopic");
        
        let lines = fileContent.split('\n');
        for (let i = 0; i < lines.length; i++) {
            const line = lines[i];
            let words = line.split(' ');
            for (let w = 0; w < words.length; w++) {
                let word = words[w];
                let hasPlatformVariable = word.toLowerCase().indexOf("{platform") >= 0;
                if (word.indexOf(".md#") >= 0 && hasPlatformVariable) {
                    word = word.split('{platform}').join('{PlatformLower}');
                    word = word.split('{Platform}').join('{PlatformLower}');
                    word = word.split('{platformlower}').join('{PlatformLower}');
                    if (word !== words[w]) {
                        console.log("auto-correct link: \n" + words[w] + " to \n" + word);
                        words[w] = word;
                    }
                }
            }
            lines[i] = words.join(' ');
        }
        return lines.join('\n');
    }

    verifySectionSample(content: string) {
        // console.log("verifySectionSample");
        this.isValid = false;

        // console.log(content);

        if (content.indexOf('sample=') < 0) {
            this.error = 'Sample is missing a link in: '+ content;
        } else if (content.indexOf('height=') < 0) {
            this.error = 'Sample is missing "height" setting in: '+ content;
        } else if (content.indexOf('alt=') < 0) {
            this.error = 'Sample is missing "alt" setting in: '+ content;
        } 

        var words = content.split('`').join('').split(', ');
        // console.log(words);
        for (var word of words) {
            var item = word.trim();
            if (item.startsWith("sample=")) {
                var link = item.replace('sample=','').split('"').join('');
                if (!link.startsWith("/")) {
                    this.error = 'Sample link must start with "/" in: '+ content;
                }
                if (link.endsWith("/")) {
                    this.error = 'Sample link cannot end with "/" in: '+ content;
                } 
            } 
            if (item.startsWith("height=")) {
                var height = item.replace('height=','').split('"').join('');
                if (!this.isNumber(height)) this.error = 'Sample must have "height" set to a numeric value in: ' + content;
            } 
        }

    }

    verifyLinkToSample(str: string, filePath: string, lineIndex: number) {

    }

    verifyLinksAPI(fileContent: string, filePath: string): any {
        var issues: any[] = [];
        var lines = fileContent.split('\n');
        var links = [];
        for (let i = 0; i < lines.length; i++) {
            let line = lines[i];
            if (line.includes('| ')) continue;

            let words = line.split(' ');
            for (const word of words) {

                var item = word.replace('\r/g', '').replace(',', '');
                if (item.includes('sample=')) continue;
                if (item.includes('```')) continue;

                if (item.includes('-')) continue;
                if (item.includes('<')) continue;
                if (item.includes('`string')) continue;
                if (item.includes('`number')) continue;
                if (item.includes('`boolean')) continue;

                if (item.startsWith('`')) {
                    var check = this.verifyLinkToAPI(item, filePath, i)
                    links.push(item);
                    // console.log( filePath + ':' + i + " " + item);
                }
            }
        }

        console.log(links);
    }

    verifyLinkToAPI(str: string, filePath: string, lineIndex: number): string | null {

        var location = filePath + ":" + lineIndex;
        var skipTypes = ["boolean", "number", "string", "class"];
        var skipValues = ["true", "false", "null", "undefined"];

        if (str.includes('-')) null;
        if (str.includes('<')) null;

        var apiMember = str.split("`").join("").trim();
        if (skipTypes.includes(apiMember)) return null;
        if (skipValues.includes(apiMember)) return null;

        if (str === ``)
        {
            return location + " API link cannot be empty: " + str;
        }

        if (str.startsWith("` "))
        {
            if (this.docsAutoCorrect) str = str.replace("` ", "`");

            return location + " API link cannot start with space: " + str;
        }
        if (str.startsWith(" `"))
        {
            if (this.docsAutoCorrect) str = str.replace(" `", "`");

            return location + " API link cannot end with space: " + str;
        }

        if (str[0] === str[0].toLowerCase())
        {
            if (this.docsAutoCorrect) str = str.replace( str[0].toLowerCase(),  str[0].toUpperCase());

            return location + " API link cannot start with lowercase: " + str;
        }

        var platformPrefixes = ["Igb", "Igx", "Igr", "Igc"];
        for (const prefix of platformPrefixes)
        {
            if (str.startsWith("`" + prefix))
            {
                if (this.docsAutoCorrect) str = str.replace("`" + prefix, "`");

                return location + " API link cannot start with '" + prefix + "' prefix: " + str;
            }
        }

        return null;
    }
}
