// provides functions for verifying content of markdown files

console.log("MarkdownVerifier... loaded");

import { MarkdownContent, MarkdownSection, MarkdownMetadata, MarkdownLine } from './MarkdownContent';
import { LOG } from './Logger';

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
    // public error: string = ""; 
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
    isSample(section: string): boolean { return section.indexOf('sample="') >= 0; }
    isNote(section: string): boolean {  return section.startsWith("> "); }
    isTable(section: string): boolean { return section.startsWith("| "); }    
    isHeader(section: string): boolean { return section.startsWith("#"); }
    isImage(section: string): boolean {  return section.startsWith("<img "); }
    isBullet(section: string): boolean { return section.startsWith("* "); }
    
    count(str: string, search: string) { 
        var result = 0;
        for (let i = 0; i < str.length; i++)
            if (str[i] === search) result++;
        return result;
    };

    isVariable(str: string): boolean { return str.indexOf("{")  >= 0 && str.indexOf("}") >= 0; }
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

        content = this.verifyBuildFlags(content);

        var md = new MarkdownContent(content, filePath);
        // console.log(md.sections[0]);
        // md.sections[0].log();

        this.verifyMetadata(md);
     
        for (const section of md.sections) {

            if (section.isHeader()) 
                this.verifySectionHeader(section);
            else if (section.isCode()) 
                this.verifySectionCode(section);
            else if (section.isSample()) 
                this.verifySectionSample(section);
            else if (section.isTable()) 
                this.verifySectionTable(section);
            else if (section.isImage()) 
                this.verifySectionImage(section);
            // else 
                // console.log("verifyMarkdown else section");
                // console.log(section);
            //     this.verifySectionParagraph(section);
        }

        this.filePath = filePath;
        this.isValid = true;
        // this.error = "";
 

        // TODO cleanup markdown
        // content = this.cleanup(content, filePath);
  
        // var sections: string[] = content.split(DOUBLE_LINE); 

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
        // markdown.error = this.error;

        if (this.errors.length > 0) {
            markdown.isValid = false;
            markdown.error = this.errors.join(NEWLINE);
            LOG.error(markdown.error);
            // for (const msg of this.errors) {
            //     LOG.error(msg);
            // }
            // console.log(markdown.error);
        } else {
            markdown.isValid = true;
        }

        return markdown;
    }

    verifyMetadata(md: MarkdownContent) {
        if (md.metadata === undefined || !md.metadata.hasContent()) {
            this.errors.push("ERROR: metadata is missing wrapped with '---'");
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
                this.errors.push("Metadata is missing 'title:'");
            else if (!md.metadata.hasDescription())
                this.errors.push("Metadata is missing '_description:'");
            else if (!md.metadata.hasKeywords())
                this.errors.push("Metadata is missing '_keywords:'");
            else if (!md.metadata.hasLanguage() && !md.isLocalEN())
                this.errors.push("Metadata is missing '_language:'");
             
            if (md.metadata.mentionedTypes.includes("`"))
                this.errors.push("Metadata has backticks (`) instead of double quotes (\") in: " + md.metadata.mentionedTypes);
            else if (md.metadata.mentionedTypes.includes("'"))
                this.errors.push("Metadata has single quote (') instead of double quotes (\") in: " + md.metadata.mentionedTypes);
        
            if (md.metadata.hasMentionedLinks())
            {
                if (!md.metadata.hasMentionedTypes() && !md.metadata.hasSharedComponents())
                    this.errors.push("Metadata is missing 'mentionedTypes'");
                
                if (md.metadata.mentionedLinks.includes("`true`"))
                    this.errors.push("Source keyword `true` is tagged as API members instead of **true**");
                else if (md.metadata.mentionedLinks.includes("`false`"))
                    this.errors.push("Source keyword `false` is tagged as API members instead of **false**");
            }
        }
    }

    
    verifyBuildFlags(content: string): string {
    
        // finding all build flags for components
        var lines = content.split(NEWLINE);

        var platformBuildFlags: string[] = [];
        var componentsStartFlags: string[] = [];
        var componentsEndFlags: string[] = [];
 
        for (let i = 0; i < lines.length; i++) {
            let line = lines[i].trim();

            if (line.startsWith("<!-- end:")) {
                if (!platformBuildFlags.includes(line)) {
                     platformBuildFlags.push(line);
                }
            }

            if (line.startsWith("<!-- ComponentStart")) {
                if (! componentsStartFlags.includes(line)) {
                     componentsStartFlags.push(line);
                }
            }
            if (line.startsWith("<!-- ComponentEnd")) {
                if (!componentsEndFlags.includes(line)) {
                    componentsEndFlags.push(line);
                }
            }
        }
    
        // verifying matching platform build flags:
        for (const platformFlagEnd of platformBuildFlags) {
            var platformFlagStart = platformFlagEnd.replace('end: ', '');
            var platformFlagStartCount = this.count(content, platformFlagStart);
            var platformFlagEndCount = this.count(content, platformFlagEnd);

            if (platformFlagStartCount < platformFlagEndCount) {
                this.errors.push('Topic is missing "' + platformFlagStart + '" platform flag');
            } else if (platformFlagStartCount > platformFlagEndCount) {
                this.errors.push('Topic is missing "' + platformFlagEnd + '" platform flag');
            } else {
                content = content.split(platformFlagStart).join("");
                content = content.split(platformFlagEnd).join("");
            }
        }

        // verifying if the topic has matching component's start flags
        for (const buildFlagStart of  componentsStartFlags) {
            var buildFlagEnd = buildFlagStart.replace('ComponentStart','ComponentEnd');
            var countBuildFlagStart = this.count(content, buildFlagStart);
            var countBuildFlagEnd = this.count(content, buildFlagEnd);

            if (countBuildFlagStart < countBuildFlagEnd) {
                this.errors.push('Topic is missing "' + buildFlagStart + '" component flag');
            } else if (countBuildFlagStart > countBuildFlagEnd) {
                this.errors.push('Topic is missing "' + buildFlagEnd + '" component flag');
            }
        }

        // verifying if the topic has matching component's end flags
        for (const buildFlagEnd of componentsEndFlags) {
            var buildFlagStart = buildFlagEnd.replace('ComponentEnd','ComponentStart');
            var countBuildFlagStart = this.count(content, buildFlagStart);
            var countBuildFlagEnd = this.count(content, buildFlagEnd);

            if (countBuildFlagStart < countBuildFlagEnd) {
                this.errors.push('Topic is missing "' + buildFlagStart + '" component flag');
            } else if (countBuildFlagStart > countBuildFlagEnd) {
                this.errors.push('Topic is missing "' + buildFlagEnd + '" component flag');
            }
        }

        if ( componentsStartFlags.length > 0 || componentsEndFlags.length > 0) {

            for (const buildFlag of  componentsStartFlags) {
                content = content.split(buildFlag).join("");
            } 
            for (const buildFlag of componentsEndFlags) {
                content = content.split(buildFlag).join("");
            } 

            // LOG.action('verifyBuildFlags',  componentsStartFlags.length + ' ' + componentsEndFlags.length);
            // console.log(componentsStartFlags);
            // console.log(componentsEndFlags);
        }

        return content;
    }

    verifySectionHeader(section: MarkdownSection) {
        // console.log("verifySectionHeader >> " + section.content);
        
        // var forbidden: string[] = ['`', '\'', '"', '@', '$', '%', '^', '*', '=', '+', '_', '!', '~', '.', '<', ';', ':', '|', '\\', '<', '>', '[', ']', ]
        // for (const symbol of forbidden) {
        //     if (section.content.indexOf(symbol) >= 0) {
        //         this.errors.push('Header has invalid character (' + symbol + ') in: ' + section.content);
        //         break;
        //     }
        // }
       
    }

    verifySectionCode(section: MarkdownSection) {
        // console.log("verifySectionCode");

        // starts with ```LANG
        // end with ```
    }

    verifySectionTable(section: MarkdownSection) {
        // console.log("verifySectionNote");
    }

    verifySectionNote(section: MarkdownSection) {
        // console.log("verifySectionNote");
    }
 
    verifySectionSample(section: MarkdownSection) {
        // console.log("verifySectionSample >> " + section.content);
        this.isValid = false;

        var sample = section.content;
        // console.log(content);

        if (!sample.startsWith('`')) {
            this.errors.push('Sample does not start with backtick (`): '+ sample);
        } else if (!sample.endsWith('`')) {
            this.errors.push('Sample does not end with backtick (`): '+ sample);
        }

        if (sample.indexOf('sample=') < 0) {
            this.errors.push('Sample is missing a link in: '+ sample);
        } else if (sample.indexOf('height=') < 0) {
            this.errors.push('Sample is missing "height" setting in: '+ sample);
        } else if (sample.indexOf('alt=') < 0) {
            this.errors.push('Sample is missing "alt" setting in: '+ sample);
        } 

        var parts = sample.split('`').join('').split(', ');
        // console.log(words);
        for (var word of parts) {
            var item = word.trim();
            if (item.startsWith("sample=")) {
                var link = item.replace('sample=','').split('"').join('');
                if (!link.startsWith("/")) {
                    this.errors.push('Sample link must start with "/" in: '+ sample);
                }
                if (link.endsWith("/")) {
                    this.errors.push('Sample link cannot end with "/" in: '+ sample);
                } 
            } 
            if (item.startsWith("height=")) {
                var height = item.replace('height=','').split('"').join('');
                if (!this.isNumber(height))
                    this.errors.push('Sample must have "height" set to a numeric value in: ' + sample);
            } 
        }

    }

    verifySectionParagraph(section: MarkdownSection) {
        var paragraph = section.content;
        if (paragraph === "") return;

        // console.log("------------------------")
        // LOG.action("verifySectionParagraph:", NEWLINE + paragraph);
               
        var brackets: any[] = [ 
            { left: '{', right: '}' },
            { left: '(', right: ')' },
            { left: '[', right: ']' },
            { left: '**', right: '**' },
            { left: '`', right: '`' },
        ];

        for (var bracket of brackets) {
            var countLeftBrackets = this.count(paragraph, bracket.left);
            var countRightBrackets = this.count(paragraph, bracket.right);
    
            if (countLeftBrackets < countRightBrackets) {
                this.errors.push('Paragraph is missing "' + bracket.left + '" in:' + NEWLINE + paragraph);
            } else if (countLeftBrackets > countRightBrackets) {
                this.errors.push('Paragraph is missing "' + bracket.right + '" in:' + NEWLINE + paragraph);
            }
        }
        
        var words = paragraph.split(' ');
        for (var word of words) {

            if (word.indexOf("{") >= 0 && word.indexOf("}") >= 0){
                this.verifyVariable(word);
            }
            else if (word.indexOf("`") >= 0) {
                this.verifyLinkToAPI(word);
            }
            else if (word.indexOf("(") >= 0 && word.indexOf("(") >= 0)
            {
                if (word.indexOf("http") >= 0 || word.indexOf("www.") >= 0)
                    this.verifyLinkToSite(word);
                else if (word.indexOf(".md") >= 0)
                    this.verifyLinkToTopic(word);
                
            }
        }
    }

    verifySectionImage(section: MarkdownSection) {
        var content = section.content;
        if (content === "") return;

        // console.log(" ------------------------ verifySectionImage ------------------------")
        // console.log(section);
        // console.log("------------------------")
        // LOG.action("verifySectionParagraph:", NEWLINE + paragraph);
        
        // var words = content.split(' ');
        // for (var word of words) {
        //     if (content.indexOf("src=") >= 0 && word.indexOf(".png") < 0){
        //         this.errors.push('Topic is missing "' + ".png" + '" extension in ' + section.filePath + ":" + section.index + "\n" + content);
        //     }
        // }
    }

    verifyVariable(str: string) {
        // LOG.action("verifyVariable >>", str);

        // TODO check if the variable matches with existing variable in docsConfig.json
    }
 
    verifyLinkToTopic(str: string) {
        // LOG.action("verifyLinkToTopic >>", str);

        // TODO check if the link to a topic matches with existing topics
    }

    verifyLinkToSite(str: string) {
        // LOG.action("verifyLinkToSite >>", str);
    }

    verifyLinkToAPI(str: string) {
        // LOG.action("verifyLinkToAPI >>", str.trim());

        // 'true', 'false' 'string' 'number' 'boolean'

        // TODO check if the api member matches with existing api mappings
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
  
    verifyLinkToAPI22(str: string, filePath: string, lineIndex: number): string | null {

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
