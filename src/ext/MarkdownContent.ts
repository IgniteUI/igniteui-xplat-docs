// this file provides classes for working with markdown content

var NEWLINE: string = '\r\n';
var DOUBLE_LINE: string = '\r\n\r\n'; 

export class MarkdownContent {
    public sections: MarkdownSection[];
    public metadata: MarkdownMetadata;
    public content: string = '';
    public filePath: string = '';
    public sectionStrings: string[];
    public apiMembers: string[] = [];

    public isLocalEN() { return this.filePath.indexOf('\\en\\') >= 0 || this.filePath.indexOf('/en/') >= 0; }
    public isLocalJP() { return this.filePath.indexOf('\\jp\\') >= 0 || this.filePath.indexOf('/jp/') >= 0; }
    public isLocalKR() { return this.filePath.indexOf('\\kr\\') >= 0 || this.filePath.indexOf('/kr/') >= 0; }

    public toString() {
        var str = '';
        if (this.metadata.hasContent()) {
            str = '---\r\n' + this.metadata.toString() + '---\r\n\r\n';
        }
        for (const section of this.sections) {
            str += section.toString() + '\r\n';
        }
        return str;
    }

    constructor(content: string, filePath: string) {

        this.sections = [];
        this.sectionStrings = [];
        this.filePath = filePath;
        this.metadata = new MarkdownMetadata('');

        if (content === undefined) return;

        var words = content.split(' ');
        for (const word of words) {
            if (word.indexOf("```") >= 0) continue;

            if (word.startsWith("`") && word.endsWith("`"))
                this.apiMembers.push(word);
        }
        this.apiMembers = this.apiMembers.filter((v, i, a) => a.indexOf(v) === i);

        var parts = content.split('---');
        if (parts === undefined) return;

        if (parts.length < 3) { // metadata missing
            this.metadata = new MarkdownMetadata('');
            this.sectionStrings = parts[0].split(DOUBLE_LINE);
        } else { // metadata found
            this.metadata = new MarkdownMetadata(parts[1]);
            this.metadata.mentionedLinks = this.apiMembers;
            this.sectionStrings = parts[2].split(DOUBLE_LINE);
        } 

        // TODO store sectionStrings as local var
        for (const str of this.sectionStrings) {
            // var section = new MarkdownSection(str.trim());
            var section = new MarkdownSection(str);
            section.index = this.sections.length;
            this.sections.push(section);
            // console.log("==================== section " +  this.sections.length + " ==================================================");
            // console.log(section.content);
        }
        // this.sections.push(new MarkdownSection());

    }
}

export class MarkdownSection {

    public content: string = '';
    // public lines: MarkdownLine[] = [];
    public lines: MarkdownLines = new MarkdownLines();
    
    public index: number = 0;
    public type: string = "";

    // public withMetadata() { return this.content.indexOf('---') === 0; }
    // public withTopicList() { return this.content.indexOf('## Additional Resources') === 0; }
    // public withApiList() { return this.content.indexOf('## API References') === 0; }
    // public withCodeViewer() { return this.content.indexOf('<code-view') === 0; }
    // public withParagraphs() {
    //     return !this.withMetadata() && !this.withCodeViewer() && !this.withTopicList();
    // }
  
    public isHeader(): boolean { return this.content.startsWith("#"); }
    public isCode(): boolean { return this.content.startsWith("```") || this.content.startsWith("export class"); }  
    public isSample(): boolean {  return this.content.startsWith("`sample="); }
    public isNote(): boolean {  return this.content.startsWith("> "); }
    public isTable(): boolean { return this.content.startsWith("| "); }    
    public isImage(): boolean {  return this.content.startsWith("<img "); }
    public isDivisor(): boolean {  return this.content.startsWith("<div "); }
    public isBullet(): boolean { return this.content.startsWith("* "); }

    public log()  {
        console.log("MarkdownSection {");
        LOG.line('  ' + 'index', this.index);
        // LOG.line('  ' + 'type', this.type);
        // LOG.line('  ' + 'content', this.content);
        console.log('  ' + "lines: [");
        for (const line of this.lines) {
            line.log();
        }
        console.log("  ]");
        console.log("}");
    }

    public toString(): string  {
        var str = '`${index}`';
        for (const line of this.lines) {
            var content = line.content.trim();
            if (line.index === 0)
                str = content + '\n';
            else
                str += content + '\r\n\r\n';
        }
        return str;
    }

    constructor(content: string) {

        if (content === undefined) return;

        this.content = content;
        var contentLines = [];
        // if (this.withTopicList() || this.withApiList() || this.withMetadata()) {
        //     contentLines = content.split('\r\n');
        // } else { // paragraphs
        //     contentLines = content.split('\r\n\r\n');
        // }

        contentLines = content.split(NEWLINE);

        // this.content = content.split('\r\n\r\n').join('\n');

        for (const l of contentLines) {
            var line = new MarkdownLine(l)
            line.index = this.lines.length;
            this.lines.push(line);
            // console.log("== line " +  this.lines.length + " ======================");
            // console.log(line.content);
        }

    }
}

export class MarkdownMetadata  {

    public content: string = '';
    public lines: MarkdownLine[] = [];
    public mentionedTypes: string = '';
    public mentionedLinks: string[] = [];
    public sharedComponents: string = '';
    public targetComponent: string = 'NONE';
    public title: string = '';
    public keywords: string = '';
    public description: string = '';
    public language: string = '';

    public isEmpty() { return this.content === ""; }
    public hasContent() { return this.content !== ""; }
    public hasMentionedTypes() { return this.mentionedTypes !== ""; }
    public hasMentionedLinks() { return this.mentionedLinks.length > 0; }
    public hasSharedComponents() { return this.sharedComponents !== ""; }
    public hasTitle() { return this.title.indexOf('title:') >= 0; }
    public hasKeywords() { return this.keywords.indexOf('_keywords:') >= 0; }
    public hasLanguage() { return this.language.indexOf('_language:') >= 0; }
    public hasDescription() { return this.description.indexOf('_description:') >= 0; }

    public toString() {
        var str: string = this.title + '\n';
        if (this.hasDescription()) str += this.description + '\n';
        if (this.hasLanguage()) str += this.language + '\n';
        if (this.hasKeywords()) str += this.keywords + '\n';
        if (this.hasMentionedLinks()) str += this.mentionedLinks.length + '\n';
        if (this.hasMentionedTypes()) str += this.mentionedTypes + '\n';
        return str;
    }

    constructor(content: string) {
        if (content === undefined) return;

        this.content = content;
        var lines = content.split('\n');
        for (const line of lines) {
            this.lines.push(new MarkdownLine(line.trim()));
            // find metadata lines while ignoring any commented out lines
            if (line.indexOf('#') !== 0 && line.indexOf('title:') >= 0) this.title = line.trim();
            if (line.indexOf('#') !== 0 && line.indexOf('_keywords:') >= 0) this.keywords = line.trim();
            if (line.indexOf('#') !== 0 && line.indexOf('_language:') >= 0) this.language = line.trim();
            if (line.indexOf('#') !== 0 && line.indexOf('_description:') >= 0) this.description = line.trim();
            if (line.indexOf('#') !== 0 && line.indexOf('mentionedTypes:') >= 0) this.mentionedTypes = line.trim();
            if (line.indexOf('#') !== 0 && line.indexOf('sharedComponents:') >= 0) this.sharedComponents = line.trim();
            if (line.indexOf('#') !== 0 && line.indexOf('targetComponent:') >= 0) {
                this.targetComponent = line.replace('targetComponent:', '').trim();
            }
        }
    }



}

export class MarkdownLine {

    public content: string = '';
    public index: number = 0;

    public toString() { 
        return 'index:' + this.index + ' ' + this.content;
    }
    public log()  {        
        console.log("    ML { " + LOG.fmt('index', this.index) + LOG.fmt('content', this.content.split('\r\n').join('\t')) + " }");
     }

    constructor(content: string) {
        if (content !== undefined) {
            this.content = content;
        }
    }
    public isCodeViewerWithGithub() { return this.content.indexOf('github-src') > 0; }
    public isCodeViewerWithAltName() { return this.content.indexOf('alt=') > 0; }
    public isCodeViewerWithIFrame() { return this.content.indexOf('iframe-src=') > 0; }
    public isCodeViewerWithURL() { return this.content.indexOf('data-demos-base-url=') > 0; }
    public isCodeViewerWithStyle() { return this.content.indexOf('style=') > 0; }

    public isCodeViewer() { return this.content.indexOf('<code-view') === 0; }
    public isDivider() { return this.content.indexOf('<div class="divider--half"') === 0; }
    public isListItem() { return this.content.indexOf('- ') === 0; }
    public isTitle() { return this.content.indexOf('#') === 0; }
    public isEmpty() { return this.content.trim() === ''; }
    public isCodeSnippet() {
        return this.content.indexOf('```') === 0 ||
               this.content.indexOf('   ') === 0 ||
               this.content.indexOf('<Ig') >= 0;
    }
    public isParagraph() { return !this.isTitle() && !this.isDivider() && !this.isEmpty() && !this.isListItem() && !this.isCodeViewer(); }

    // public getWords(): string[] {
    //     var words = this.content.split(' ');
    //     return words;
    // }

    // public getMembers(): string[] {
    //     var words = this.getWords();
    //     var apiMembers = [];
    //     for (const word of words) {
    //         if (word.indexOf('`') === 0 &&
    //             apiMembers.indexOf(word) === -1)
    //             apiMembers.push(word);
    //     }
    //     return apiMembers;
    // }
}


export class MarkdownLines extends Array<MarkdownLine> {
    
    public toString() {
        var str = '';
        for (const line of this) {
            var content = line.content.trim();
            if (line.index === 0)
                str = content + '\n';
            else
                str += content + '\r\n\r\n';
        }
        return str;
    }
}


export class LOG {

    public static Colors = {
        reset: "\x1b[0m",
        bright: "\x1b[1m",
        dim: "\x1b[2m",
        underscore: "\x1b[4m",
        blink: "\x1b[5m",
        reverse: "\x1b[7m",
        hidden: "\x1b[8m",
        text: "\x1b[32m",
        number: "\x1b[33m",
        action: "\x1b[34m",
        warning: "\x1b[33m", 
        error: "\x1b[31m",       
        
        fg: {
            black: "\x1b[30m",
            red: "\x1b[31m",
            green: "\x1b[32m",
            yellow: "\x1b[33m",
            blue: "\x1b[34m",
            magenta: "\x1b[35m",
            cyan: "\x1b[36m",
            white: "\x1b[37m",
            gray: "\x1b[90m",
            crimson: "\x1b[38m" 
        },
        bg: {
            black: "\x1b[40m",
            red: "\x1b[41m",
            green: "\x1b[42m",
            yellow: "\x1b[43m",
            blue: "\x1b[44m",
            magenta: "\x1b[45m",
            cyan: "\x1b[46m",
            white: "\x1b[47m",
            gray: "\x1b[100m",
            crimson: "\x1b[48m"
        }
    };
    
    public static fmt(name: string, value: any) {
        if (typeof(value) === "number") {
            return name + ': ' + LOG.Colors.number + value + " " + LOG.Colors.reset;
        } else {
            return name + ': ' + LOG.Colors.text + value + " " + LOG.Colors.reset;
        }
    }

    public static line(name: string, value: any) {
        console.log(LOG.fmt(name, value));
    }

    public static action(name: string, str?: string) {
        if (str === undefined)
            console.log(LOG.Colors.action + name + LOG.Colors.reset);  
        else 
            console.log(LOG.Colors.action + name + LOG.Colors.reset + " " + str + LOG.Colors.reset);
    }

    public static error(name: string, str?: string) {
        if (str === undefined)
            console.log(LOG.Colors.error + "ERROR: " + name + LOG.Colors.reset);  
        else 
            console.log(LOG.Colors.error + "ERROR: " + name + LOG.Colors.reset + " " + str + LOG.Colors.reset);
    }

    public static warn(name: string, str?: string) {
        if (str === undefined)
            console.log(LOG.Colors.warning + " WARN: " + name + LOG.Colors.reset);  
        else 
            console.log(LOG.Colors.warning + " WARN: " + name + LOG.Colors.reset + " " + str + LOG.Colors.reset);
    }

    public static lines(items: any[]) {
        var output = '';
        for (const item of items) { 
            output += LOG.fmt(item.name, item.value); 
        }
        console.log(output);
    }
}

