import { MappingLoader, APIPlatform, APIMapping } from './MappingLoader';
import { PlatformDetector, PlatformDetectorRule, FencedBlockInfo } from './PlatformDetector';
import { JsonEx } from './JsonEx';
import { inherits } from 'util';

let remark = require(`remark`);
let parse = require('remark-parse');
let stringify = require('remark-stringify');
let frontmatter = require('remark-frontmatter');
let visit = require('unist-util-visit');
let jsyaml = require('js-yaml');
let fs = require('fs');


function getApiLink(apiRoot: string, typeName: string, memberName: string | null, options: any): any {
    let mappings: MappingLoader = options.mappings;
    let resolvedTypeName: string | null = typeName;
    let isClass = false;
    let isInterface = false;
    let isEnum = false;

    if (!(typeName.indexOf(options.platformPascalPrefix) == 0)) {

        resolvedTypeName = mappings.getPlatformTypeName(typeName, <APIPlatform>options.platform);
        if (resolvedTypeName) {
            let typeInfo = mappings.getType(typeName);
            if (typeInfo) {
                if (typeInfo.isEnum) {
                    isEnum = true;
                } else {
                    //todo: interfaces.
                    isClass = true;
                }
            }
        }
    } else {
        isClass = true;
    }
    let linkText: string | null = null;
    if (resolvedTypeName) {
        if (isClass) {
            linkText = apiRoot + "classes/" + resolvedTypeName.toLowerCase() + ".html";
        } else if (isEnum) {
            linkText = apiRoot + "enums/" + resolvedTypeName.toLowerCase() + ".html";
        } else if (isInterface) {
            linkText = apiRoot + "interfaces/" + resolvedTypeName.toLowerCase() + ".html";
        }
    }
    if (linkText && memberName) {
        linkText = linkText + "#" + memberName.toLowerCase();
    }

    if (linkText) {
        return {
            type: "link",
            url: linkText,
            value: "",
            children: [{
                type: "inlineCode",
                value: memberName ? memberName : resolvedTypeName
            }]
        };
    } else {
        return null;
    }
}

let warningsCount = 0;
function transformWarning(msg: string) {
    warningsCount += 1;
    console.log(pad(warningsCount, 4) + " WARNING: " + msg);
}

function pad(num: number, width: number) {
    let str = num.toString();
    return str.length >= width ? str : new Array(width - str.length + 1).join('0') + str;
}

function transformCodeRefs(options: any) {

    function transformRef(node: any, index: number, parent: any) {
        let memberName = node.value;
        let docs = options.docs;
        let apiDocRoot: string = docs.apiDocRoot;
        let createLink: boolean = <boolean><any>apiDocRoot;
        let apiTypeName: string | null = null;
        let isTypeName: boolean = false;

        let memberHasCharDot = memberName.includes(".", 0);
        let memberHasCharSpace = memberName.includes(" ");

        if (memberName == "") {
            transformWarning("found empty API member");
        }
        if (memberHasCharSpace && !memberHasCharDot) {
            transformWarning("found a space in API member: `" + memberName + "` did you mean: **" + memberName + "**");
        }
        if (memberName.includes("Igc", 0)) {
            transformWarning("found 'Igc' instead of 'Ig$' in API member: `" + memberName + "`");
        }
        if (memberName.includes("Igr", 0)) {
            transformWarning("found 'Igr' instead of 'Ig$' in API member: `" + memberName + "`");
        }
        if (memberName.includes("Igx", 0)) {
            transformWarning("found 'Igx' instead of 'Ig$' in API member: `" + memberName + "`");
        }

        if (memberName.indexOf("Ig$") >= 0) {
            memberName = memberName.replace("Ig$", options.platformPascalPrefix);
            apiTypeName = memberName;
            if (createLink) {
                let link = getApiLink(apiDocRoot, apiTypeName!, null, options);
                if (link) {
                    parent.children.splice(index, 1, link);
                    return;
                }
            }
            node.value = memberName;
            return;
        }
        if (memberName.indexOf("ig$-") >= 0) {
            memberName = memberName.replace("ig$-", options.platformSpinalPrefix);

            node.value = memberName;
            return;
        }

        if (memberName.indexOf(".") >= 0) {
            let parts = memberName.split(".");
            options.typeName = parts[0];
            apiTypeName = options.typeName;
            parts.splice(0, 1);
            memberName = parts.join(".");
        }

        let mappings: MappingLoader = options.mappings;

        let resolvedName = mappings.getPlatformMemberName(
            <string>options.typeName,
            <APIPlatform>options.platform,
            <string>memberName);
        apiTypeName = options.typeName;

        if (resolvedName == null && options.mentionedTypes &&
            options.mentionedTypes.length > 0) {
            for (var i = 0; i < options.mentionedTypes.length; i++) {
                let type = options.mentionedTypes[i];
                resolvedName = mappings.getPlatformMemberName(
                    <string>type,
                    <APIPlatform>options.platform,
                    <string>memberName);
                if (resolvedName !== null) {
                    apiTypeName = type;
                    break;
                }
            }
        }

        if (resolvedName == null) {
            resolvedName = mappings.getPlatformTypeName(
                <string>memberName,
                <APIPlatform>options.platform);

            if (resolvedName !== null) {
                isTypeName = true;
                apiTypeName = memberName;
                options.typeName = memberName;
            }
        }

        if (resolvedName == null) {
            //console.log("couldn't find name");
            //console.log(options);
            return;
        }

        if (createLink) {
            if (isTypeName) {
                let link = getApiLink(apiDocRoot, apiTypeName!, null, options);
                if (link) {
                    parent.children.splice(index, 1, link);
                    return;
                }
            } else {
                let link = getApiLink(apiDocRoot, apiTypeName!, resolvedName, options);
                if (link) {
                    parent.children.splice(index, 1, link);
                    return;
                }
            }

        }
        node.value = resolvedName;
    }

    return function (tree: any) {
        visit(tree, 'inlineCode', transformRef)
    }
}

function getFrontMatterTypes(options: any) {
    function getTypes(node: any) {
        let ym = jsyaml.load(node.value);
        if (ym.mentionedTypes) {
            let mt = ym.mentionedTypes;
            let arr: string[] = [];
            if (typeof mt == "string") {
                let parts = mt.split(",");
                for (var i = 0; i < parts.length; i++) {
                    arr.push(parts[i].trim());
                }
            } else {
                arr = mt;
            }
            options.mentionedTypes = arr;
            let mappings = <MappingLoader>options.mappings;
            for (let i = 0; i < options.mentionedTypes.length; i++) {
                let currType = options.mentionedTypes[i];
                let currTypeInfo = mappings.getType(currType);
                if (currTypeInfo) {
                    if (currTypeInfo.originalBaseTypeName) {
                        let fullName = currTypeInfo.originalBaseTypeNamespace + "." +
                        currTypeInfo.originalBaseTypeName;

                        if (currTypeInfo.originalBaseTypeName == "Object" ||
                        currTypeInfo.originalBaseTypeName == "Control" ||
                        currTypeInfo.originalBaseTypeName == "DependencyObject" ||
                        currTypeInfo.originalBaseTypeName == "EventArgs") {
                            continue;
                        }

                        if (options.mentionedTypes.indexOf(currTypeInfo.originalBaseTypeName) < 0 &&
                        options.mentionedTypes.indexOf(fullName) < 0) {
                            options.mentionedTypes.splice(i + 1, 0, fullName);
                        }
                    }
                }
            }
        }
        if (ym.namespace) {
            options.namespace = ym.namespace;
            if (options.mappings) {
                options.mappings.namespace = options.namespace;
            }
        }
    }

    return function (tree: any) {
        visit(tree, 'yaml', getTypes)
    }
}

function transformDocLinks(options: any) {
    function transformLink(node: any) {
        let reference = node.url;

        // allows usage of $Platform$ in links to topics/sections
        if (reference.indexOf("$Platform$") > 0) {
            let platform = getPlatformName(options.platform);
            reference = reference.replace("$Platform$", platform).toLowerCase();
            reference = reference.replace("webcomponents", "web-components");
            reference = reference.replace(" ", "-");
        } else if (reference.indexOf("$") > 0) {
            throw new Error("cannot transform a link with this variable:\n" + reference);
        }

        var isApiDocLink = reference.indexOf("{environment:dvApiBaseUrl") > 0;
        var isSampleLink = reference.indexOf("{environment:dvDemo") > 0 ||
                           reference.indexOf("{environment:demo") > 0;

        var isTopicLink = !isApiDocLink && reference.indexOf(".md") > 0;
        if (isTopicLink) {
            // ensuring link to topics/section using lower-case per DocFX requirement
            node.url = reference.toLowerCase();
        }

        let mappings: MappingLoader = options.mappings;
        if (reference.indexOf("doc://") !== 0) {
            return;
        }

        reference = reference.replace("doc://", "");
        let referenceParts = reference.split("/");
        let controlName = referenceParts[0];
        if (options.docs.transformControlNames) {
            let resolvedName = mappings.getPlatformMemberName(
                <string>options.typeName,
                <APIPlatform>options.platform,
                <string>controlName);
            if (resolvedName) {
                controlName = resolvedName;
            }
        }

        let docUrl = "";
        if (referenceParts.length > 1) {
            docUrl = options.docs[referenceParts[1]]
        } else {
            docUrl = options.docs["Main"];
        }
        if (!docUrl) {
            if (referenceParts.length > 1) {
                throw new Error("docUrl pattern was missing for: " + referenceParts[1]);
            } else {
                throw new Error("docUrl pattern was missing for: Main");
            }
        } else {
            docUrl = docUrl.replace("{CONTROL_NAME}", controlName);
        }


        node.url = docUrl;
    }

    return function (tree: any) {
        visit(tree, 'link', transformLink)
    }
}

function transformDocPlaceholders(options: any) {
    function transformText(node: any) {
        if (!node.value) {
            return;
        }
        let value = node.value;

        let docs = options.docs;
        if (docs.replacements) {
            for (let i = 0; i < docs.replacements.length; i++) {
                let curr = docs.replacements[i];
                let name = curr.name;
                let r = new RegExp(name, "g");
                value = value.replace(r, curr.value);
            }

            node.value = value;
        }
    }

    return function (tree: any) {
        visit(tree, null, transformText)
    }
}

function transformNotes(options: any) {
    function gatherText(node: any) {
        options.gatheredText.push({ text: node.value, node: node });
    }

    function transformNote(node: any, index: number, parent: any) {
        if (node.children.length < 1) {
            return;
        }

        if (node.children[0].type !== "paragraph") {
            return;
        }

        if (node.children[0].children[0].type !== "linkReference")
        {
            return;
        }

        let noteType = node.children[0].children[0].identifier;

        let platChecks: any[];
        options.gatheredText.length = 0;
        visit(node, "text", gatherText);
        platChecks = options.gatheredText;

        let notePlats: APIPlatform[] = [];
        let platMatch: any[] = [];
        let matchMatch: RegExp[] = [];

        for (let i = 0; i < platChecks.length; i++) {
            let platCheck = platChecks[i].text;
            let platNode = platChecks[i].node;

            platCheck = platCheck.trim().toLowerCase();
            for (let key in Object.keys(APIPlatform)) {

                let keyStr = APIPlatform[key];
                if (!keyStr) {
                    continue;
                }
                let r = new RegExp("^\\r*\\n*\\s*(for)*(in)*(with)* " + keyStr.toLowerCase() + ":*\\s*\\r*\\n*", "im")
                if ((platCheck as string).match(r))
                {
                    notePlats.push(<APIPlatform>+key);
                    platMatch.push(platNode);
                    matchMatch.push(r);
                }
            }
        }

        if (notePlats.indexOf(options.platform) >= 0) {
            node.children[0].children.splice(0, 1);
            let r = matchMatch[notePlats.indexOf(options.platform)];
            let j = 1;
            for (let i = 0; i < node.children[0].children.length; i++) {
                if (node.children[0].children[i].value) {
                    node.children[0].children[i].value =
                    node.children[0].children[i].value.replace(r, "");

                    if (node.children[0].children[i].value.length == 0) {
                        options.toDelete.add(node.children[0].children[i]);

                        if (node.children[0].children.length == 1) {
                            options.toDelete.add(node.children[0]);
                        }
                    }
                }
                //if (platMatch.indexOf(node.children[0].children[i]) == -1) {
                    // parent.children.splice(index + j,0,node.children[0].children[i]);
                    // j++
                //}
            }
            for (let i = 0; i < node.children.length; i++) {
                if (node.children[i].value) {
                    node.children[i].value =
                    node.children[i].value.replace(r, "");

                    if (node.children[i].value.length == 0) {
                        options.toDelete.add(node.children[i]);
                    }
                }

                //if (platMatch.indexOf(node.children[i]) == -1) {
                    parent.children.splice(index + j,0,node.children[i]);
                    j++;
                //}
            }
            parent.children.splice(index, 1);
            return index;
        } else {
            if (notePlats.length > 0) {
                options.toDelete.add(node);
            }
        }
    }

    return function (tree: any) {
        visit(tree, 'blockquote', transformNote)
    }
}

class PlatformSegment {
    isBegin: boolean;
    platforms: APIPlatform[];
    startIndex: number;
    endIndex: number;

    constructor(isBegin: boolean, platforms: APIPlatform[], startIndex: number, endIndex: number) {
        this.isBegin = isBegin;
        this.platforms = platforms;
        this.startIndex = startIndex;
        this.endIndex = endIndex;
    }
}

function getPlatformSegments(node: any): PlatformSegment[] {
    let reg = /(<!--[^>]*-->)/gm;
    let match: RegExpExecArray | null;
    let ret: PlatformSegment[] = [];
    while (match = reg.exec(node.value)) {
        let val = match[0];
        let isBegin = val.indexOf("end:") == -1;
        let plats = getPlatformsFromString(val);
        if (plats && plats.length > 0) {
            //let platforms: APIPlatform[] = [];
            let seg = new PlatformSegment(isBegin, plats, match.index, match.index + val.length);
            ret.push(seg);
        }
    }

    return ret;
}

function isPlatformComment(node: any): boolean {
    if (node.type == "html" &&
        node.value.trim().indexOf("<!--") >= 0) {

        let platformSegments = getPlatformSegments(node);
        if (platformSegments && platformSegments.length > 0) {
            return true;
        }
    }
    return false;
}

function getPlatformName(enumInt: number): string {
    let platformEnum = APIPlatform[enumInt];
    return platformEnum.toString();
}

function getPlatformsFromString(str: string): APIPlatform[] {
    let val = str.replace("<!--", "");
    val = val.replace("-->", "");
    val = val.replace("end:", "");
    val = val.trim().toLowerCase();

    let vals = val.split(',');
    for (let i = 0; i < vals.length; i++) {
        vals[i] = vals[i].trim();
    }

    let plats: APIPlatform[] = [];

    for (let val of vals) {
        for (let key in Object.keys(APIPlatform)) {
            let keyStr = APIPlatform[key];
            if (!keyStr) {
                continue;
            }
            if (keyStr.toLowerCase() == val) {
                plats.push(<APIPlatform>+key);
            }
        }
    }
    return plats;
}

function getPlatformsFromComment(node: any) : APIPlatform[] {
    return getPlatformsFromString(node.value);
}

function finishRemove(options: any) {
    function removeNodes(node: any, index: number, parent: any) {
        if (options.toDelete.has(node)) {
            parent.children.splice(index, 1);

            return index;
        }
    }

    return function (tree: any) {
        visit(tree, removeNodes);

        options.toDelete.clear();
    }
}

function finishRemoveBlocks(options: any) {
    function removeNodes(node: any, index: number, parent: any) {
        if (options.toDelete.has(node)) {
            parent.children.splice(index, 1);

            return index;
        }
    }

    return function (tree: any) {
        visit(tree, removeNodes);

        options.toDelete.clear();
    }
}

function finishRemoveNotes(options: any) {
    function removeNodes(node: any, index: number, parent: any) {
        if (options.toDelete.has(node)) {
            parent.children.splice(index, 1);

            return index;
        }
    }

    return function (tree: any) {
        visit(tree, removeNodes);

        options.toDelete.clear();
    }
}

function platformsEqual(plats: APIPlatform[], otherPlats: APIPlatform[]): boolean {
    if (plats.length !== otherPlats.length) {
        return false;
    }
    for (let i = 0; i < plats.length; i++) {
        if (plats[i] !== otherPlats[i]) {
            return false;
        }
    }

    return true;
}

function omitPlatformSpecificSections(options: any) {
    function omitSections(node: any, index: number, parent: any) {

        if (node.value.indexOf("end:") >= 0) {
            let segments = getPlatformSegments(node);
            for (let segment of segments) {
                let checkIndex = index;
                while (checkIndex >= 0) {

                    if (parent.children[checkIndex] &&
                    parent.children[checkIndex].type == "html" &&
                    isPlatformComment(parent.children[checkIndex]) &&
                    parent.children[checkIndex].value.indexOf("end:") == -1) {
                        let startSegments = getPlatformSegments(parent.children[checkIndex]);
                        for (let i = segments.length - 1; i >= 0; i--) {
                            //let currPlats = getPlatformsFromComment(parent.children[checkIndex]);
                            let startSeg = startSegments[i];
                            let currPlats = startSeg.platforms;

                            if (platformsEqual(currPlats, segment.platforms) &&
                            segment.platforms.indexOf(options.platform) == -1) {
                                for (let ind = checkIndex + 1; ind < index; ind++) {
                                    options.toDelete.add(parent.children[ind]);
                                }
                                parent.children[checkIndex].value = parent.children[checkIndex].value.substring(0, startSeg.startIndex);
                                if (parent.children[checkIndex].value.length == 0) {
                                    options.toDelete.add(parent.children[checkIndex])
                                }
                                parent.children[index].value = parent.children[index].value.substring(segment.endIndex);
                                if (parent.children[index].value.length == 0) {
                                    options.toDelete.add(parent.children[index]);
                                }
                                break;
                            }
                        }
                    }


                    checkIndex--;
                }
            }
        }
        //console.log(node);
    }



    return function (tree: any) {
        visit(tree, 'html', omitSections)
    }
}

function manageAutoButtons(options: any) {
    function manageButtons(node: any, index: number, parent: any) {
        let docs = options.docs;
        if (node.value.indexOf("sample-button") >= 0) {
            if (!docs.codeSandboxButtonInject) {
                node.value = node.value.replace(/<\s*sample-button\s*[^>]*>\s*<\/\s*sample-button>/, "");
            } else {
                let startFileSubst = docs.codeSandboxButtonStartFileReplace;
                let indexFileSubst = docs.codeSandboxButtonIndexFileReplace;
                if (startFileSubst && indexFileSubst) {
                    if (node.value.indexOf("start-file") >= 0) {
                        node.value = node.value.replace(
                            /<\s*sample-button\s*src="([^"]*)"\s*start-file="([^"]*)"\s*><\/\s*sample-button>/,
                            startFileSubst);
                    } else {
                        node.value = node.value.replace(
                            /<\s*sample-button\s*src="([^"]*)"\s*><\/\s*sample-button>/,
                            indexFileSubst);
                    }
                }
            }
        }
        //console.log(node);
    }

    return function (tree: any) {
        visit(tree, 'html', manageButtons)
    }
}

function omitStackblitzButtons(options: any) {
    function omitButtons(node: any, index: number, parent: any) {
        let docs = options.docs;
        if (node.value.indexOf("class=\"stackblitz-btn\"" ||
        node.value.indexOf("class='stackblitz-btn'") >= 0)) {
            if (!docs.showStackblitzButtons) {
                node.value = node.value.replace(/<\s*button[^>]+class=['"]stackblitz-btn['"][^>]*>[\s\S]*?<\/\s*button\s*>/, "");
            }
        }
        //console.log(node);
    }

    return function (tree: any) {
        visit(tree, 'html', omitButtons)
    }
}

function omitFencedCode(options: any) {
    function omitFence(node: any, index: number, parent: any) {
        if (!node.lang) {
            return;
        }
        let lang = node.lang;

        let platformDetector: PlatformDetector = options.platformDetector;

        let info = new FencedBlockInfo();
        info.code = node.value;
        info.lang = lang;

        let plats = platformDetector.detectPlatform(info);

        if (index - 1 >= 0 &&
            parent.children[index - 1] &&
            parent.children[index - 1].type == "html" &&
            parent.children[index - 1].value.indexOf("<!--") >= 0 ) {

            if (isPlatformComment(parent.children[index - 1])) {
                if (getPlatformsFromComment(parent.children[index - 1]) !== null) {
                    plats = getPlatformsFromComment(parent.children[index - 1])!;
                }
            }

            if (options.transformer.shouldOmitFencedCode(lang, plats)) {
               options.toDelete.add(parent.children[index - 1]);
               options.toDelete.add(node);
            }
        }

        if (index - 2 >= 0 &&
            parent.children[index - 1] &&
            parent.children[index - 1].type == "paragraph" &&
            parent.children[index - 2] &&
            parent.children[index - 2].type == "html" &&
            parent.children[index - 2].value.indexOf("<!--") >= 0) {

            if (isPlatformComment(parent.children[index - 2])) {
                if (getPlatformsFromComment(parent.children[index - 2]) !== null) {
                    plats = getPlatformsFromComment(parent.children[index - 2])!;
                }
            }

            if (options.transformer.shouldOmitFencedCode(lang, plats)) {
               options.toDelete.add(parent.children[index - 2]);
               options.toDelete.add(parent.children[index - 1]);
               options.toDelete.add(node);
            }
        }

        if (options.transformer.shouldOmitFencedCode(lang, plats)) {
            options.toDelete.add(node);

            //return index;
        }

        //highlight.js, used by docfx, doesn't currently support tsx highlighting.
        if (lang.toLowerCase() == "tsx") {
            lang = "ts";
        }
        if (lang.toLowerCase() == "razor") {
            lang = "html";
        }
        node.lang = lang;
        //console.log(node);
    }

    return function (tree: any) {
        visit(tree, 'code', omitFence)
    }
}

let invalidApiMembers = [
    " IgxFinancialChart ",
    " IgcFinancialChart ",
    " IgrFinancialChart ",
    " IgxCategoryChart ",
    " IgcCategoryChart ",
    " IgrCategoryChart ",
    " IgxDataChart ",
    " IgcDataChart ",
    " IgrDataChart ",
];

export class MarkdownTransformer {
    private _platformDetector: PlatformDetector | undefined;
    private _mappings: MappingLoader | undefined;
    private _platform: APIPlatform | undefined;
    private _envTarget: string = "development";
    private _envBrowser: string = "";

    shouldOmitFencedCode(language: string, platform: APIPlatform[]) {

        // https://docs.microsoft.com/en-us/contribute/code-in-docs#supported-languages
        if (language === "json" || language === "cmd" ||
            language === "css" || language === "scss") {
            return false;
        }

        switch (this._platform) {
            case APIPlatform.Angular:
                if (!PlatformDetectorRule.isTS(language) &&
                language !== "js" &&
                !PlatformDetectorRule.isHTML(language)) {
                    return true;
                }

                if (platform.indexOf(APIPlatform.Angular) == -1) {
                    return true;
                }
                break;
            case APIPlatform.React:
                if (!PlatformDetectorRule.isTS(language) &&
                !PlatformDetectorRule.isTSX(language) &&
                 language !== "js" &&
                 !PlatformDetectorRule.isHTML(language)) {
                    return true;
                }

                if (platform.indexOf(APIPlatform.React) == -1) {
                    return true;
                }
                break;
            case APIPlatform.WebComponents:
                if (!PlatformDetectorRule.isTS(language) &&
                language !== "js" &&
                !PlatformDetectorRule.isHTML(language)) {
                    return true;
                }

                if (platform.indexOf(APIPlatform.WebComponents) == -1) {
                    return true;
                }
                break;
            case APIPlatform.Blazor:
                if (!PlatformDetectorRule.isRazor(language)) {
                    return true;
                }

                if (platform.indexOf(APIPlatform.Blazor) == -1) {
                    return true;
                }
                break;
        }

        return false;
    }

    private _docs: any;

    configure(mappings: MappingLoader, platform: APIPlatform, docs: any, envTarget: string) {
        this._mappings = mappings;
        this._platform = platform;
        this._platformDetector = new PlatformDetector();
        this._docs = docs;
        this._envTarget = envTarget; // development || staging || production

        // using vars in docConfig.json to replace samples URLs instead of using processor in igniteui-docfx-template
        let samplesBrowsers = docs['samplesBrowsers'];
        if (samplesBrowsers === undefined) {
            console.log('>> WARNING transformer did not find samplesBrowsers')
        } else {
            this._envBrowser = samplesBrowsers[envTarget];
            if (this._envBrowser === undefined) {
                this._envBrowser = "";
                console.log('>> WARNING transformer did not find samplesBrowsers[' + envTarget + ']');
            }
        }

        let platformName = APIPlatform[platform].toString();
        console.log('>> transformer config: "' + platformName + '" platform, "' + this._envTarget + '" environment, browser: ' + this._envBrowser);
    }

    replaceAll(orgStr: string, oldStr: string, newStr: string): string {
        return orgStr.split(oldStr).join(newStr);
    }

    transformContent(
        typeName: string,
        fileContent: string,
        callback: (err: any, results: string | null) => void): void {

        // check for strings that should be API links:
        let fileLines = fileContent.toLowerCase().split("\n");
        for (let i = 0; i < fileLines.length; i++) {
            const line = fileLines[i];
            for (const invalidString of invalidApiMembers) {
                if (!line.includes("import") &&
                     line.toLowerCase().includes(invalidString.toLowerCase())) {
                     transformWarning("found string: \"" + invalidString + "\" without backticks on line #" + (i+1));
                     break;
                }
            }
        }

        let deleteMap: Set<any> = new Set<any>();

        let options = {
            typeName: typeName,
            platform: this._platform,
            mappings: this._mappings,
            gatheredText: [],
            transformer: this,
            toDelete: deleteMap,
            platformDetector: this._platformDetector,
            docs: this._docs,
            platformPascalPrefix: null as string | null,
            platformSpinalPrefix: null as string | null
        };

        if (this._platform === APIPlatform.Blazor ||
            this._platform === APIPlatform.React ||
            this._platform === APIPlatform.WebComponents) {
            // using 'samplesBrowsers' variable in docConfig.json to replace samples URLs instead of using processor in igniteui-docfx-template
            if (this._envBrowser !== undefined &&
                this._envBrowser !== "") {
                fileContent = this.replaceAll(fileContent, "{environment:dvDemosBaseUrl}", this._envBrowser);
                fileContent = this.replaceAll(fileContent, "{environment:demosBaseUrl}", this._envBrowser);
            }
        }

        switch (this._platform) {
            case APIPlatform.Angular:
                options.platformPascalPrefix = "Igx";
                options.platformSpinalPrefix = "igx-";
                break;
            case APIPlatform.React:
                options.platformPascalPrefix = "Igr";
                options.platformSpinalPrefix = "igr-";
                break;
            case APIPlatform.WebComponents:
                options.platformPascalPrefix = "Igc";
                options.platformSpinalPrefix = "igc-";
                break;
            case APIPlatform.Blazor:
                options.platformPascalPrefix = "";
                options.platformSpinalPrefix = "";
        }

        remark().data('settings', {
            commonmark: false,
            footnotes: true,
            pedantic: true,
        })
        .use(parse)
        .use(frontmatter, ['yaml', 'toml'])
        .use(getFrontMatterTypes, options)
        .use(transformCodeRefs, options)
        .use(transformDocLinks, options)
        .use(transformDocPlaceholders, options)
        .use(omitPlatformSpecificSections, options)
        .use(omitStackblitzButtons, options)
        .use(manageAutoButtons, options)
        .use(finishRemove, options)
        .use(omitFencedCode, options)
        .use(finishRemoveBlocks, options)
        .use(transformNotes, options)
        .use(finishRemoveNotes, options)
        .use(stringify)
        .process(fileContent, function(err: any, vfile: any) {
            if (err) {
                callback(err, null);
                return;
            }

            callback(null, vfile.toString());
        });
    }

    getGithubURL(codeViewerLine: string): string {
        var url = "url/to/sample/folder";
        var lines = codeViewerLine.split('\r\n');
        var iframe = "";
        for (const line of lines) {
            if (line.indexOf("iframe-src=") >= 0) {
                iframe = line; break;
            }
        }
        if (iframe !== "") {
            // console.log(">> iframe \n" +  iframe );

            url = iframe.replace('iframe-src="{environment:dvDemosBaseUrl}/', '');
            url = url.replace('"', '');
            url = url.replace('-chart-', '-chart/');
            url = url.replace('-gauge-', '-gauge/');
            url = url.replace('-graph-', '-graph/');
            url = url.replace('data-grid-', 'data-grid/');
            url = url.replace('geo-map-', 'geo-map/');
            url = url.replace('data-picker-', 'data-picker/');
            url = url.replace('dock-manager-', 'dock-manager/');
            url = url.replace('multi-column-combobox-', 'multi-column-combobox/');
            url = url.replace('spreadsheet-', 'spreadsheet/');
            url = url.replace('excel-library-', 'excel-library/');
            url = url.replace('zoomslider-', 'zoomslider/');
            url = url.replace('sparkline-', 'sparkline/');
            url = url.trim();
            // console.log(">> iframe \n" +  iframe + "\n>> url  " + url);
        }
        return url;
    }
    verifyCodeViewer(file: any): number {
        var fileContent = file.contents.toString();
        var filePath = file.dirname + "\\" + file.basename
        filePath = '.\\doc\\' + filePath.split('doc\\')[1];

        var md = new MarkdownContent(fileContent);

        // console.log("sections " + md.sections.length);
        var errorsCount = 0;
        for (const section of md.sections) {

            for (const line of section.lines) {
                if (line.isCodeViewer()) {

                    // console.log(line.index + " s=" + line.isCodeViewerWithStyle());
                    // console.log(line.index + " u=" + line.isCodeViewerWithURL());
                    // console.log(line.index + " f=" + line.isCodeViewerWithIFrame());
                    // console.log(line.index + " a=" + line.isCodeViewerWithAltName());
                    // console.log(line.index + " g=" + line.isCodeViewerWithGithub());
                    // console.log("");
                    // console.log(line);
                    if (!line.isCodeViewerWithGithub()) {
                        var url = '"' + this.getGithubURL(line.content) + '"';
                        console.log("");
                        console.log('>> Missing github-src=' + url + ' on code-view in: ' +  filePath);
                        console.log("" + line.content + "");
                        errorsCount++;
                    }
                }
            }
        }
        // errorsCount = 0;
        return errorsCount;

    }

    updateApiSection(fileContent: string): string {
        var newApiMembers = [];

        var md = new MarkdownContent(fileContent);

        var apiSection = new MarkdownSection('');
        for (const section of md.sections) {
            if (section.index === 0) continue;

            if (section.withApiList()) {
                apiSection = section;
                // console.log("==================== API " +  section.index + " ==================================================");
                // console.log(section.content);
                for (const line of section.lines) {
                    if (!line.isListItem()) continue;

              //      console.log(line.index + " " + line.content);
                }

            } else if (section.withParagraphs()) {
                // console.log("==================== section " +  section.index + " ==================================================");
                // console.log(section.lines.length);
                // console.log(section.content);
                for (const line of section.lines) {
                    if (line.isParagraph()) {
                       // console.log(line.index + "\n" + line.content);
                        // var members = line.getMembers();
                        var words = line.content.split(' ');
                        // apiMembers.push.apply(apiMembers, members);
                        for (const word of words) {
                            if (word.indexOf('`') === 0 &&
                                newApiMembers.indexOf(word) === -1)
                                newApiMembers.push('- ' + word);
                        }
                    }
                    //
                }
            }
        }

        // console.log("==============================================================");

        for (const api of newApiMembers) {
            var apiMissing = apiSection.content.indexOf(api) === -1;
            if (apiMissing) {
                //apiSection.content += api;;
                var line = new MarkdownLine(api)
                line.index = apiSection.lines.length;
                apiSection.lines.push(line);
            }
            // for (const line of apiSection.lines) {
            //     if (line.)
            // }
        }
        apiSection.lines.sort((a, b) => (a.content > b.content) ? 1 : -1)

        var orgApiContent = apiSection.content;
        var newApiContent = '';
        for (const line of apiSection.lines) {
            if (line.isEmpty()) continue;

            // console.log(line.index + " " + line.content);

            newApiContent += line.content + '\n';
        }

        if (newApiContent.trim() !== '') {
            if (orgApiContent === '') {
                newApiContent = '\n' + '## API Members \n' + newApiContent;
                fileContent += newApiContent;
            } else {
                fileContent = fileContent.replace(orgApiContent, newApiContent);
            }
        }

        // console.log(fileContent);

        // console.log("=====================================\n");
        // console.log(newApiContent);
        // console.log("========================");

        // console.log(md.metadata.content);
        // console.log(md.sections.length);
        // console.log(md.sections[0].content);
        // console.log("========================");
        // console.log(md.sections[1].content);

        // console.log(apiSection);
        //console.log(md.sections[md.sections.length- 1].content);
         //console.log(newApiMembers.join(', '));

         return fileContent;
    }

    // simplifies converted YML to JSON string into new format of TOC
    // which supports: "exclude": ["Angular", "Blazor"] and "status": "NEW" || "status": "UPDATED"
    simplifyJson(jsonContent: string, platform: string): string {
        console.log('simplifyJson for "' + platform + '" platform');

        // let jsonFile = fs.readFileSync(jsonPath);
        let jsonNodes: TocNode[] = JSON.parse(jsonContent);
        console.log('simplifyJson found ' + jsonNodes.length + ' nodes');

        let tocNodes = this.simplifyJsonNodes(jsonNodes, platform);
        // let tocContent = JSON.stringify(tocNodes, null, '  ');

        // JSON.stringify does not have persistent order of properties so
        // we are using our own JSON stringify function:
        let tocPropsOrder = ['name', 'href', 'status', 'header', 'items'];
        let tocContent = JsonEx.stringify(tocNodes,  null, '  ', tocPropsOrder);

        console.log('simplifyJson output ' + tocNodes.length + ' nodes');
        return tocContent;
    }

    // simplifies converted YML to JSON nodes into new format of TOC
    // which supports: "exclude": ["Angular", "Blazor"] and "status": "NEW" || "status": "UPDATED"
    simplifyJsonNodes(jsonNodes: TocNode[], platform: string): TocNode[] {
        let toc: TocNode[] = [];

        for (const node of jsonNodes) {

            if (node.new && node.updated) {
                node.new = undefined;
                node.updated = undefined;
                node.status = "";
                console.log('ERROR - simplifyNodes: "' + node.name + '" node cannot have NEW and UPDATED set to true')
            }
            else if (node.new) {
                node.status = "NEW";
            }
            else if (node.updated) {
                node.status = "UPDATED";
            } else {
                node.status = "";
            }

            if (node.header === false) {
                node.header = undefined;
            }

            if (node.header) {
                node.status = undefined; // headers should not have any status
            }

            // clearing YML props since they are stored in node.status prop
            node.updated = undefined;
            node.new = undefined;

            // recursively convert items nodes if they exist
            if (node.items !== undefined &&
                node.items.length > 0) {
                node.items = this.simplifyJsonNodes(node.items, platform);
            }
            toc.push(node);
        }
        return toc;
    }

    // generates toc.yml file from toc.json file by filtering out its nodes for specified platform
    generateTOC(jsonPath: string, platform: string, isFirstRelease: boolean): string {

        // console.log('generateTOC for "' + platform + '"  platform from');
        console.log(">> TOC generate from: " + jsonPath + ' for "' + platform + '" and isFirstRelease=' + isFirstRelease);

        let jsonFile = fs.readFileSync(jsonPath);
        let jsonContent = jsonFile.toString();

        let tocNodes = this.filterTOC(jsonContent, platform);

        // optional start:
        // let tocPath = jsonPath.replace('toc.json', 'toc_' + platform + '.json')
        // let tocContent = JSON.stringify(tocNodes, null, '  ');
        // fs.writeFileSync(tocPath, tocContent);
        // optional end:

        let ymlPath = jsonPath.replace('toc.json', 'toc.yml');
        let ymlContent = this.generateNodes(tocNodes, 0, isFirstRelease, platform);

        console.log(">> TOC generate done: " + ymlPath);

        fs.writeFileSync(ymlPath, ymlContent);

        return ymlContent;
    }

    // generates nodes recursively for toc.yml file
    generateNodes(tocNodes: TocNode[], tabIndent: number, isFirstRelease: boolean, platform: string): string {
        let yml: string = "";
        let tab: string = "";
        if (tabIndent > 0) tab = "  ".repeat(tabIndent);

        for (const node of tocNodes) {
            yml += tab + "- name: " + node.name + "\n";
            if (node.href)
                yml += tab + "  href: " + node.href + "\n";

            if (isFirstRelease) {
                node.status = ""; // hide NEW and UPDATED labels
            }

            if (node.header) {
                yml += tab + "  header: true" + "\n";
            } else {
                if (node.status) {
                    let status = node.status.toString();

                    // checking if a node has status specific to a platform, e.g. "NEW in Blazor"
                    if (status.indexOf(platform)) {
                        status = status.replace(" in ", "");
                        status = status.replace(platform, "");
                    } else {
                        status = "";
                    }

                    if (status.toUpperCase() === "NEW") {
                        yml += tab + "  new: true" + "\n";
                    }
                    else if (status.toUpperCase() === "UPDATED") {
                        yml += tab + "  updated: true" + "\n";
                    }
                    else { // status === ""
                        yml += tab + "  new: false" + "\n";
                    }

                } else { //if (node.header === undefined) {
                    yml += tab + "  new: false" + "\n";
                }

            }

            if (node.items) {
                yml += tab + "  items:" + "\n";
                yml += this.generateNodes(node.items, tabIndent + 2, isFirstRelease, platform);
            }
        }
        return yml;
    }

    // filters out nodes if they have "exclude" array that contains platform name
    filterTOC(jsonContent: string, platform: string): TocNode[] {

        let jsonNodes: TocNode[] = JSON.parse(jsonContent);
        let tocNodes = this.filterNodes(jsonNodes, platform);
        // console.log('>> filterTOC completed: ' + jsonNodes.length + ' to ' + tocNodes.length + ' nodes');

        return tocNodes;
    }

    filterNodes(tocNodes: TocNode[], platform: string): TocNode[] {
        let matchingNodes: TocNode[] = [];

        for (const node of tocNodes) {
            if (node.exclude === undefined ||
                node.exclude.length === 0 ||
                node.exclude.indexOf(platform) === -1) {

                node.name = node.name.replace("$Platform$", platform);
                if (node.href) {
                    node.href = node.href.replace("$Platform$", platform);
                    node.href = node.href.toLowerCase();
                    // node.href = node.href.replace(".md", ".html");
                }

                node.exclude = undefined;
                // recursively check if child items need to be excluded
                if (node.items !== undefined &&
                    node.items.length > 0) {
                    node.items = this.filterNodes(node.items, platform);
                }
                matchingNodes.push(node);
            }
            else {
                console.log('>> TOC filtering out "' + node.name + '" node with exclude="' + node.exclude.join(',') + '"');
            }
        }
        return matchingNodes;
    }
}

export class TocNode {
    public name: string;
    public status?: string;
    public href?: string;
    public header?: boolean;
    public new?: boolean;
    public updated?: boolean;
    public items?: TocNode[];
    public exclude?: string[];

    constructor() {
          this.name = "NOTE without name";
    }
}

class MarkdownContent {
    public sections: MarkdownSection[];
    public metadata: MarkdownMetadata;
    public content: string = '';

    constructor(content: string) {

        this.sections = [];
        this.metadata = new MarkdownMetadata('');

        if (content === undefined) return;

        var parts = content.split('---');
        if (parts === undefined || parts.length < 3) {
            console.log('Failed on creating MarkdownContent from file without metadata');
            // console.log(content);
            return;
        }
        // console.log("parts:" + parts.length);
        // console.log("parts0:" + parts[0]);
        // console.log("parts1:" + parts[1]);
        // console.log("parts2:" + parts[2]);
        this.metadata = new MarkdownMetadata(parts[1]);

        var sections = parts[2].split('\n## ');
        for (const s of sections) {
            var section = new MarkdownSection('## ' + s);
            section.index = this.sections.length;
            this.sections.push(section);
            // console.log("==================== section " +  this.sections.length + " ==================================================");
            // console.log(section.content);
        }
        // this.sections.push(new MarkdownSection());

    }
}

class MarkdownSection {

    public content: string = '';
    public lines: MarkdownLine[] = [];
    public index: number = 0;

    public withMetadata() { return this.content.indexOf('---') === 0; }
    public withTopicList() { return this.content.indexOf('## Additional Resources') === 0; }
    public withApiList() { return this.content.indexOf('## API Members') === 0; }
    public withCodeViewer() { return this.content.indexOf('<code-view') === 0; }

    public withParagraphs() {
        return !this.withMetadata() && !this.withCodeViewer() && !this.withTopicList();
    }

    constructor(content: string) {

        if (content === undefined) return;

        this.content = content;
        var contentLines = [];
        if (this.withTopicList() || this.withApiList() || this.withMetadata()) {
            contentLines = content.split('\r\n');
        } else { // paragraphs
            contentLines = content.split('\r\n\r\n');
        }

        for (const l of contentLines) {
            var line = new MarkdownLine(l)
            line.index = this.lines.length;
            this.lines.push(line);
            // console.log("== line " +  this.lines.length + " ======================");
            // console.log(line.content);
        }

    }
}

class MarkdownMetadata  {

    public content: string = '';
    public lines: MarkdownLine[] = [];
    public mentionedTypes: string = '';

    constructor(content: string) {
        if (content === undefined) return;

        this.content = content;
        var lines = content.split('\n');
        for (const line of lines) {
            this.lines.push(new MarkdownLine(line));
            if (line.indexOf('mentionedTypes') === 0 )
                this.mentionedTypes = line;
        }

    }
}

class MarkdownLine {

    public content: string = '';
    public index: number = 0;

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