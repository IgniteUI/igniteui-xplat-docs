import { MappingLoader, APIPlatform } from './MappingLoader';
import { PlatformDetector, PlatformDetectorRule, FencedBlockInfo } from './PlatformDetector';
import { JsonEx } from './JsonEx';
import { ComponentDetector } from './ComponentDetector';

let remark = require(`remark`);
let parse = require('remark-parse');
let stringify = require('remark-stringify');
let frontmatter = require('remark-frontmatter');
let visit = require('unist-util-visit');
let jsyaml = require('js-yaml');
let fs = require('fs');

let docsComponents = require("../../docComponents.json");

// this array defines blazor namespaces mapped to API members
// and it is converted to a lookup table for finding blazor namespaces in getApiLink()
let BlazorNamespaces = [
    {   "namespace": "Infragistics.Core",
        "members": [
            "ImageWrapper",
            "Rect",
            "Point",
            "Size",
        ]
    },
    {   "namespace": "Infragistics.Core.Graphics",
        "members": [
            "Colors",
            "Color",
        ]
    },
    {   "namespace": "Infragistics.IO",
        "members": [
            "FileAccess",
            "FileMode",
        ]
    },
    {   "namespace": "Infragistics.Documents.Excel",
        "members": [
            "Workbook",
            "WorkbookSaveOptions",
            "WorkbookFormat",
            "WorkbookProtection",
            "Worksheet",
            "WorksheetCell",
            "WorksheetRegion",
            "WorksheetRow",
            "WorksheetColumn",
            "WorkbookColorInfo",
            "WorksheetTable",
            "WorksheetTableStyle",
            "WorksheetCellComment",
            "NamedReference",
            "FormattedString",
        ]
    },
];

var BlazorNamespaceLookup: any = null;
// converts above array to a lookup table for finding blazor namespaces in getApiLink()
function getBlazorNamespaceLookup() {
    if (BlazorNamespaceLookup === null) {
        BlazorNamespaceLookup = {};
        for (const item of BlazorNamespaces) {
            for (const member of item.members) {
                BlazorNamespaceLookup[member] = item.namespace
            }
        }
    }
    return BlazorNamespaceLookup;
}

function getApiLink(apiRoot: string, typeName: string, memberName: string | null, options: any): any {
    let mappings: MappingLoader = options.mappings;
    let resolvedTypeName: string | null = typeName;
    let isClass = false;
    let isInterface = false;
    let isEnum = false;
    let platform = <APIPlatform>options.platform;
    let packageName: string | null = null;

    if (!(typeName.indexOf(options.platformPascalPrefix) == 0)) {
        resolvedTypeName = mappings.getPlatformTypeName(typeName, <APIPlatform>options.platform, options.filePath);
        if (resolvedTypeName) {
            let typeInfo = mappings.getType(typeName, options.filePath);
            if (typeInfo) {
                if (typeInfo.isEnum) {
                    isEnum = true;
                } else {
                    //todo: interfaces.
                    isClass = true;
                }

                if (typeInfo.packageName) {
                    packageName = typeInfo.packageName;
                }
            }
        }
    } else {
        isClass = true;
    }

    let blazorNamespace: string = "IgniteUI.Blazor.Controls";
    let linkText: string | null = null;
    if (resolvedTypeName) {
        //         https://infragistics.com/blazor-apps/blazor-api/api/IgniteUI.Blazor.Controls.IgbCategoryChart.html
        // https://infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/classes/igrcategorychart.html
        if (platform === APIPlatform.Blazor) {
            var blazorNamespaceLookup = getBlazorNamespaceLookup();
            if (blazorNamespaceLookup[resolvedTypeName]) {
                blazorNamespace = blazorNamespaceLookup[resolvedTypeName];
            }
            linkText = apiRoot + blazorNamespace + "." + resolvedTypeName + ".html";
            // console.log( blazorNamespaceLookup[resolvedTypeName] + " " + resolvedTypeName + " " + linkText);

        } else { // Angular || React || WC

            let char1 = resolvedTypeName[0];

            if(char1 == "I"){
                let char2 = resolvedTypeName[1];
                if(char2.toUpperCase() == char2){
                    isClass = false;
                    isEnum = false;
                    isInterface = true;
                }
            }

            let packageText = "";
            if (packageName) {
                if (packageName == "igniteui-webgrids") {
                    packageText = "igniteui_" + getPlatformName(<APIPlatform>options.platform).toLowerCase() + "_grids_grids."
                } else if (packageName == "igniteui-webinputs") {
                    packageText = "";
                    if (platform == APIPlatform.React) {
                        packageText = "igniteui_react.";
                    }
                } else {
                    packageText = packageName;
                    packageText = packageText.replace("igniteui-", "igniteui-" + getPlatformName(<APIPlatform>options.platform).toLowerCase() + "-");
                    packageText = packageText.replace(/-/gm, "_");
                    packageText += ".";
                }
            }

            if (isClass) {
                linkText = apiRoot + "classes/" + packageText + resolvedTypeName.toLowerCase() + ".html";
            } else if (isEnum) {
                linkText = apiRoot + "enums/" + + packageText + resolvedTypeName.toLowerCase() + ".html";
            } else if (isInterface) {
                linkText = apiRoot + "interfaces/" + packageText + resolvedTypeName.toLowerCase() + ".html";
            }
        }
    }

    if (linkText && memberName) {
        //         https://infragistics.com/blazor-apps/blazor-api/api/IgniteUI.Blazor.Controls.IgbCategoryChart.html#ChartType
        // https://infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/classes/igrcategorychart.html#charttype
        if (platform === APIPlatform.Blazor) {
            var prefix = blazorNamespace.split('.').join('_') + '_';
            linkText = linkText + "#" + prefix + resolvedTypeName + '_' + memberName;
            // if (linkText.indexOf('.IgbDataGrid') > 0) {
            //     linkText = linkText + "#" + prefix + 'IgbDataGrid_' + memberName;
            // } else {
            //     linkText = linkText + "#" + prefix + memberName;
            // }
        } else { // Angular, React, WC
            linkText = linkText + "#" + memberName.toLowerCase();
        }
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
        if (memberName == "") {
            transformWarning("found empty API member: ``");
            return;
        }

        if (memberName && (
            memberName.indexOf('sample=') >= 0 ||
            memberName.indexOf('height=') >= 0)) {
            return; // skip sample code viewers
        }

        let docs = options.docs;
        let apiDocRoot: string = docs.apiDocRoot;
        let apiDocOverrideRoot: string = docs.apiDocOverrideRoot;
        let apiDocOverrideComponents: string[] = docs.apiDocOverrideComponents;
        let apiTypeName: string | null = null;
        let createLink: boolean = <boolean><any>apiDocRoot;
        let isTypeName: boolean = false;

        let memberHasCustomCSS = memberName.indexOf("--") == 0;
        if (memberHasCustomCSS) {
            return; // skip trying to generate API link for custom CSS properties
        }

        let memberHasCharDot = memberName.includes(".", 0);
        let memberHasCharSpace = memberName.includes(" ");
        let memberHasInlineCode = memberName.includes("=") || memberName.includes(":") || memberName.includes("&") || memberName.includes("{");

        if (memberHasCharSpace && !memberHasCharDot && !memberHasInlineCode) {
            var correctedMember = Strings.replace(Strings.toTitleCase(memberName), " ", "");
            transformWarning("found a space in API member: `" + memberName + "` did you mean a topic link or API member: `" + correctedMember + "`");
        }

        // if (memberName.includes("Igc", 0)) {
        //     transformWarning("found 'Igc' instead of 'Ig$' in API member: `" + memberName + "`");
        // }
        // if (memberName.includes("Igr", 0)) {
        //     transformWarning("found 'Igr' instead of 'Ig$' in API member: `" + memberName + "`");
        // }
        // if (memberName.includes("Igx", 0)) {
        //     transformWarning("found 'Igx' instead of 'Ig$' in API member: `" + memberName + "`");
        // }

        if (memberName.indexOf("Ig$") >= 0) {
            memberName = memberName.replace("Ig$",       options.platformPascalPrefix);
            memberName = memberName.replace("Component", options.platformPascalSuffix);
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
            memberName = memberName.replace("ig$-",       options.platformSpinalPrefix);
            memberName = memberName.replace("-component", options.platformSpinalSuffix);
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
            <string>memberName, options.filePath);
        apiTypeName = options.typeName;

        if (resolvedName == null && options.mentionedTypes &&
            options.mentionedTypes.length > 0) {
            for (var i = 0; i < options.mentionedTypes.length; i++) {
                let type = options.mentionedTypes[i];
                resolvedName = mappings.getPlatformMemberName(
                    <string>type,
                    <APIPlatform>options.platform,
                    <string>memberName, options.filePath);
                if (resolvedName !== null) {
                    apiTypeName = type;
                    break;
                }
            }
        }

        if (resolvedName == null) {
            resolvedName = mappings.getPlatformTypeName(
                <string>memberName,
                <APIPlatform>options.platform, options.filePath);

            if (resolvedName !== null) {
                isTypeName = true;
                apiTypeName = memberName;
                options.typeName = memberName;
            }
        }

        if (resolvedName == null) {
            //console.log("couldn't find name");
            //console.log(options);

            // console.log("getApiLink not resolved " + memberName);
            // if (filePath.indexOf("calendar.md")) {
            // }

            return;
        }

        if (createLink) {
            let link: any = null;
            // console.log("getApiLink memberName " + memberName);
            if (isTypeName) {
                link = getApiLink(apiDocRoot, apiTypeName!, null, options);
            } else {
                link = getApiLink(apiDocRoot, apiTypeName!, resolvedName, options);
                // console.log("getApiLink other " + link.url);
            }

            if (link) {
                // override Angular/WC Dock Manager to stand-alone API docs for Dock Manager
                // because API docs for Dock Manager are NOT in Angular/WC API docs, e.g.
                // WORKS - https://staging.infragistics.com/products/ignite-ui/dock-manager/docs/typescript/latest/classes/igcdockmanagercomponent.html
                // FAILS - https://staging.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igcdockmanagercomponent.html
                let platform = getPlatformName(options.platform);
                if (platform === "Angular" || platform === "WebComponents") {

                    var dockEnums = [
                        "DockManagerPaneType",
                        "DockingIndicatorPosition",
                        "PaneDragActionType",
                        "ResizerLocation",
                        "SplitPaneOrientation",
                        // "UnpinnedLocation",
                    ];
                    var dockInterfaces = [
                        "ActivePaneEvent",
                        "ContentPane",
                        "DockManagerEventMap",
                        "DockManagerLayout",
                        "DockManagerPoint",
                        "DockManagerResourceStrings",
                        "DockPaneAction",
                        "DockingIndicator",
                        "DocumentHost",
                        "FloatPaneAction",
                        "FloatingPaneResizeEvent",
                        "FloatingPaneResizeMoveEvent",
                        "MoveFloatingPaneAction",
                        "MoveTabAction",
                        "PaneCloseEvent",
                        "PaneDragEndEvent",
                        "PaneDragOverEvent",
                        "PaneDragStartEvent",
                        "PaneHeaderConnectionEvent",
                        "PaneHeaderElement",
                        "PanePinnedEvent",
                        "SplitPane",
                        "SplitterResizeEvent",
                        "TabGroupPane",
                        "TabHeaderConnectionEvent",
                    ];
                    var isDockInterface = false;
                    for (const name of dockInterfaces) {
                        if (link.url.indexOf(name.toLowerCase()) > 0) {
                            isDockInterface = true;
                            break;
                        }
                    }
                    var isDockEnum = false;
                    for (const name of dockEnums) {
                        if (link.url.indexOf(name.toLowerCase()) > 0) {
                            isDockEnum = true;
                            break;
                        }
                    }
                    var isDockClass = false;
                    if (link.url.indexOf("DockManager".toLowerCase()) > 0) {
                        isDockClass = true;
                    }

                    if (isDockClass || isDockEnum || isDockInterface) {
                        // override Angular/React/WC Dock Manager to stand-alone API docs for Dock Manager
                        // because API docs for Dock Manager are NOT in Angular/React/WC API docs, e.g.
                        // WORKS - https://staging.infragistics.com/products/ignite-ui/dock-manager/docs/typescript/latest/classes/igcdockmanagercomponent.html
                        // FAILS - https://staging.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igcdockmanagercomponent.html

                        link.url = link.url.replace("ignite-ui-angular/api/docs",        "ignite-ui/dock-manager/docs");
                        link.url = link.url.replace("ignite-ui-react/api/docs",          "ignite-ui/dock-manager/docs");
                        link.url = link.url.replace("ignite-ui-web-components/api/docs", "ignite-ui/dock-manager/docs");
                        link.url = link.url.replace("igr", "igc");
                        link.url = link.url.replace("igx", "igc");

                        // console.log("getApiLink " + link.url);
                        if (link.url.indexOf("component.html") < 0 && isDockClass) {
                            link.url = link.url.replace(".html", "component.html");
                            if (link.children && link.children[0] && link.children[0].value) {
                                // ensure classes use WC prefix
                                link.children[0].value = link.children[0].value.replace("Igr", "Igc");
                                link.children[0].value = link.children[0].value.replace("Igx", "Igc");
                                // ensure classes end with "Component"
                                if (link.children[0].value.indexOf("Component") < 0) {
                                    link.children[0].value += "Component";
                                }
                            }
                        }

                        if (isDockEnum) {
                            link.url = link.url.replace("/classes/", "/enums/");
                            link.url = link.url.replace("component.html", ".html");
                        }
                        if (isDockInterface) {
                            link.url = link.url.replace("/classes/", "/interfaces/");
                            link.url = link.url.replace("component.html", ".html");
                            if (link.children && link.children[0] && link.children[0].value) {
                                link.children[0].value = link.children[0].value.replace("Component", "");
                            }
                        }
                    }
                }

                // if (link.url.indexOf("components/api/docs/") > 0){
                //     console.log("getApiLink " + link.url);
                // }

                // overriding api root for components specified in docsConfig.json
                if (apiDocOverrideComponents !== undefined) {
                    //console.log("getApiLink replace apiDocOverride " + link.url);
                    for (const component of apiDocOverrideComponents) {
                        let className = new RegExp(component.toLowerCase() + ".*.html", "im")
                        if (link.url.match(className)) {
                            // if (link.url.indexOf("calendar") >= 0)
                            //     console.log("getApiLink old " + memberName + " >> '" + link.url + "'");
                            link.url = link.url.replace(apiDocRoot, apiDocOverrideRoot);
                            //link.url = urls.replace("\/api\/docs\/", "\/docs\/");
                            //if (link.url.indexOf("calendar") >= 0)
                            //    console.log("getApiLink new " + memberName + " >> '" + link.url + "'");
                        }
                    }
                }
                // console.log("getApiLink " + memberName + " '" + link.url + "'");
                parent.children.splice(index, 1, link);
                return;
            }

        }
        node.value = resolvedName;
    }

    return function (tree: any) {
        visit(tree, 'inlineCode', transformRef)
    }
}

function getFrontMatterTypes(options: any, filePath: string) {

    function getTypes(node: any) {
        // console.log("getFrontMatterTypes=" + filePath);

        let ym: any = null; // = jsyaml.load(node.value);
        try {
            ym = jsyaml.load(node.value);
        } catch (error) {
            throw new Error(filePath + '\n' + error.message + "\n" + "Failed parsing:\n" + node.value + "\n")
        }
        // console.log("setFrontMatterTypes=" + filePath);
        let mentionedNamespace: string | null = null;
        if (ym.mentionedTypes) {
            // console.log("mentionedTypes=" + ym.mentionedTypes);
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
                let currTypeInfo = mappings.getType(currType, options.filePath);
                if (currTypeInfo?.originalNamespace) {
                    mentionedNamespace = currTypeInfo.originalNamespace;
                }
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
            // console.log("namespace=" + ym.namespace);
            options.namespace = ym.namespace;
            if (options.mappings) {
                options.mappings.namespace = options.namespace;
            }
        } else {
            if (mentionedNamespace) {
                options.namespace = mentionedNamespace;
                if (options.mappings) {
                    options.mappings.namespace = mentionedNamespace;
                }
            }
        }

        if (ym.sharedComponents) {
            // console.log("sharedComponents=" + ym.sharedComponents);
            options.sharedComponents = ym.sharedComponents;
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
                <string>controlName, options.filePath);
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

function transformDocPlaceholders(options: any, removeMetaVars: boolean) {

    // removeMetaVars is true when extracting metadata on first time paring topic
    // removeMetaVars is false when transforming the whole topic

    function transformText(node: any) {
        // console.log("transformDocPlaceholders");
        // console.log(node);
        if (node.value) {
            node.value = replaceVariables(node.value, node.type, options, removeMetaVars);
            //console.log('transformText ' + node.value);
        }

        if (node.url) {
            node.url = replaceVariables(node.url, node.type, options, removeMetaVars);
            //console.log('transformText ' + node.url);
        }
    }

    function replaceVariables(nodeValue: string, nodeType: string, options: any, removeMetaVars: boolean) {

        // removeMetaVars is true when extracting metadata on first time paring topic
        // removeMetaVars is false when transforming the whole topic

        if (removeMetaVars && nodeValue.indexOf("title:") >= 0) {
            // console.log('replaceVariables onlyMeta=' + removeMetaVars + "");
            // console.log('--- replaceVariables \n' + nodeValue);

            // removing variables in metadata so we can extract a list of shared components without parting errors
            // var variables = ["{Platform}", "{ProductName}", "{ComponentName}", "{ComponentTitle}", "{ComponentKeywords}"];
            // for (const v of variables) {
            //     var r = new RegExp(v, "gm");
            //     nodeValue = nodeValue.replace(r, "");
            // }

            // removing all variables in metadata so we can extract a list of shared components without parting errors
            var r = new RegExp("\{[a-zA-Z]*\}", "gm");
            nodeValue = nodeValue.replace(r, "");

            // cleanup of metadata
            nodeValue = nodeValue.replace(new RegExp("  ", "gm"), " ");
            nodeValue = nodeValue.replace(new RegExp(", ,", "gm"), "");
            nodeValue = nodeValue.replace(new RegExp(": , ", "gm"), ": ");
            nodeValue = nodeValue.replace(new RegExp(":  , ", "gm"), ": ");

            // console.log('+++ replaceVariables \n' + nodeValue + "\n");
            return nodeValue;
        }

        if (options.componentName) {

            if (docsComponents[options.componentName]) {
                let value = docsComponents[options.componentName];
                let name = "{Component";
                let r = new RegExp(name, "gm");
                nodeValue = nodeValue.replace(r, "{" + value.name);
            }
        }

        let docs = options.docs;
        if (docs.replacements) {
            for (let i = 0; i < docs.replacements.length; i++) {
                let variable = docs.replacements[i];
                if (variable.name && variable.value) { // && nodeValue.indexOf(variable.name) >= 0) {
                    let name = variable.name;
                    let r = new RegExp(name, "gm");
                    nodeValue = nodeValue.replace(r, variable.value);
                }
            }
        }

        if (!removeMetaVars) {
            // console.log('>> replaceVariables ' + variable.name + ' >> ' + variable.value);
            if (nodeType === 'inlineCode') {
                // API links expect no platform prefix in order to map and generate URLs
                nodeValue = nodeValue.replace("Igb", "");
                nodeValue = nodeValue.replace("Igc", "");
                nodeValue = nodeValue.replace("Igr", "");
                nodeValue = nodeValue.replace("Igx", "");
            }
        }

        return nodeValue;
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

class ComponentSegment {
    isBegin: boolean;
    components: string[];
    startIndex: number;
    endIndex: number;

    constructor(isBegin: boolean, components: string[], startIndex: number, endIndex: number) {
        this.isBegin = isBegin;
        this.components = components;
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

function getComponentSegments(node: any): ComponentSegment[] {
    let reg = /(<!--[^>]*-->)/gm;
    let match: RegExpExecArray | null;
    let ret: ComponentSegment[] = [];
    while (match = reg.exec(node.value)) {
        let val = match[0];
        let isBegin = val.indexOf("ComponentStart:") >= 0;

        let components = getComponentsFromString(val);
        if (components && components.length > 0) {
            //let platforms: APIPlatform[] = [];
            let seg = new ComponentSegment(isBegin, components, match.index, match.index + val.length);
            ret.push(seg);
        }
    }
    return ret;
}

function isPlatformComment(node: any): boolean {
    if (node.type == "html" &&
        node.value.trim().indexOf("<!--") >= 0) {
        if (node.value.indexOf("ComponentStart") >= 0) {
            return false;
        }
        let platformSegments = getPlatformSegments(node);
        if (platformSegments && platformSegments.length > 0) {
            return true;
        }
    }
    return false;
}

function isComponentComment(node: any): boolean {
    if (node.type == "html" &&
        node.value.trim().indexOf("<!--") >= 0) {
        if (node.value.indexOf("ComponentStart") == -1 &&
        node.value.indexOf("ComponentEnd") == -1) {
            return false;
        }

        let componentSegments = getComponentSegments(node);
        if (componentSegments && componentSegments.length > 0) {
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

function getComponentsFromString(str: string): string[] {
    let val = str.replace("<!--", "");
    val = val.replace("-->", "");
    val = val.replace("ComponentEnd:", "");
    val = val.replace("ComponentStart:", "");
    //val = val.trim().toLowerCase();

    let vals = val.split(',');
    for (let i = 0; i < vals.length; i++) {
        vals[i] = vals[i].trim();
    }


    return vals;
}

function getPlatformsFromComment(node: any) : APIPlatform[] {
    return getPlatformsFromString(node.value);
}

function getComponentsFromComment(node: any) : string[] {
    return getComponentsFromString(node.value);
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

function componentsEqual(components: string[], otherComponents: string[]): boolean {
    if (components.length !== otherComponents.length) {
        return false;
    }
    for (let i = 0; i < components.length; i++) {
        if (components[i] != otherComponents[i]) {
            return false;
        }
    }

    return true;
}

function transformSamples(options: any) {
    // node.value=
    // ``` sample="/charts/data-chart/bar-chart-multiple-sources", height=600, alt="{Platform} Bar Chart Multiple Sources" ```
    function transformSection(node: any, index: number, parent: any) {

        // console.log(node);
        if (!node) return;
        if (!node.value) return;

        // if (!node.children) return;
        // if (!node.children[0]) return;
        // if (!node.children[0].children) return;
        // if (!node.children[0].children[0]) return;
        // if (!node.children[0].children[0].value) return;
        // console.log(node.children[0].children);

        var code = node.value;
        // var code = node.children[0].children[0].value;

        if (code.indexOf('sample=') < 0) return;

        var nodeLocation = options.filePath + ":";
        if (node.position && node.position.start && node.position.line) {
            nodeLocation +=  ":" + node.position.start.line;
        }

        if (code.indexOf(',') < 0) {
            throw new Error("Topic is defines a sample without a comma between settings " + nodeLocation + " file:\n" + node.value + "\n^^^^^^");
        }

        // extracting info for the sample
        var sample: any = {};
        var parts = code.split(',');
        for (const part of parts) {
            if (part.indexOf('alt=') >= 0) {
                sample.alt = part.replace('alt=', "").split('"').join('').trim();
            }

            if (part.indexOf('height=') >= 0) {
                sample.height = part.replace('height=', "").split('"').join('').replace('px', "").trim();
            }

            if (part.indexOf('sample=') >= 0) {
                sample.path = part.replace('sample=', "").split('"').join('').trim();
                if (sample.path.indexOf('/') === 0)  {
                    sample.path = sample.path.replace('/', "")
                }
                sample.file = options.docs.samplesGithubFile;
                sample.github = options.docs.samplesGithubTree + sample.path;


                // TODO in 23.1, replace this code block with: sample.route = sample.path;
                var sampleRouteParts = sample.path.split('/');
                var samplePathWithVars = sample.path.indexOf("Sample}") >= 0;
                if (samplePathWithVars) {
                    sample.route = sample.path.replace('Sample}/', 'Sample}-');
                } else if (sampleRouteParts.length === 3) {
                    sample.route = sampleRouteParts[0] + "/" + sampleRouteParts[1] + "-" + sampleRouteParts[2];
                } else {
                    throw new Error("Failed to get routing path " + nodeLocation + " file:\n" + node.value + "\n^^^^^^");
                }
            }
        }

        if (!sample.alt) {
            throw new Error("Topic is defines a sample without 'alt=' setting " + nodeLocation + " file:\n" + node.value + "\n^^^^^^");
        }

        if (!sample.height) {
            throw new Error("Topic is defines a sample without 'height=' setting " + nodeLocation + " file:\n" + node.value + "\n^^^^^^");
        }

        if (!sample.path) {
            throw new Error("Topic is defines a sample without 'sample=' path setting " + nodeLocation + " file:\n" + node.value + "\n^^^^^^");
        }

        var sampleHostEnvironment = "";
        if (options.platform === APIPlatform.Angular) {
            sampleHostEnvironment = "{environment:dvDemosBaseUrl}";
        } else {
            sampleHostEnvironment = "{environment:demosBaseUrl}";
        }

        // generating <code-view />
        var str = '';
        str += '<code-view style="height: ' + sample.height + 'px" alt="' + sample.alt + '"\n';
        str += '           data-demos-base-url="' + sampleHostEnvironment + '"\n';
     // str += '                    iframe-src="' + sampleHostEnvironment + '/' + sample.route + '"\n';
        str += '                    iframe-src="' + sampleHostEnvironment + '/' + sample.path + '"\n';
        str += '                                                 github-src="' + sample.path + '">\n';
        str += '</code-view>\n';

        if (options.platform === APIPlatform.Angular) {
            // injecting sandbox and stackblitz buttons below <code-view />
            let editButtonTemplate = fs.readFileSync('./templates/sample.edit.buttons.html').toString();
            // let stackblitz = "https://stackblitz.com/" +  github + "?file=src%2Fapp.component.html";
            let stackblitz = "https://stackblitz.com/" +  sample.github + "?file=src" + sample.file.replace('/', "%2F");
            let sandbox = "https://codesandbox.io/s/" + sample.github + "?fontsize=14&hidenavigation=1&theme=dark&view=preview&file=/" + sample.file;
            let editButtons = editButtonTemplate + "";

            if (options.docs.samplesDisplayStackblitz) {
                editButtons = editButtons.replace('{stackblitz}', stackblitz);
            }
            if (options.docs.codeSandboxButtonInject) {
                editButtons = editButtons.replace('{sandbox}', sandbox);
            }

            if (options.docs.samplesDisplayStackblitz ||
                options.docs.codeSandboxButtonInject) {
                str += '\n';
                str += editButtons + '\n';
            }
        }

        node.value = str;
        node.type = "html";
        // node.children = undefined;
        // console.log(node);
        // console.log(node.type + " " + node.value); json
    }

    return function (tree: any) {
        visit(tree, 'inlineCode', transformSection)
        // visit(tree, 'blockquote', transformSection)
        // visit(tree, 'html', transformSection)
        // visit(tree, 'code', transformSection)
    }
}

function transformSampleLinks(options: any, sampleHost: string) {
    function transformSection(node: any, index: number, parent: any) {

        // console.log("transformSampleLinks " + sampleHost);
        // console.log(node.type + " " + node.value);
        if (sampleHost === "") return;
        if (node.value.indexOf('environment') < 0) return;

        if (node.type === "html") {
            // console.log(node);

            node.value = node.value.split("{environment:dvDemosBaseUrl}").join(sampleHost);
            node.value = node.value.split("{environment:demosBaseUrl}").join(sampleHost);
        }
    }
    return function (tree: any) {
        visit(tree, 'html', transformSection)
    }
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

function omitComponentSpecificSections(options: any) {
    function omitSections(node: any, index: number, parent: any) {

        if (node.value.indexOf("ComponentEnd:") >= 0) {
            let segments = getComponentSegments(node);
            for (let segment of segments) {
                let checkIndex = index;
                while (checkIndex >= 0) {

                    if (parent.children[checkIndex] &&
                    parent.children[checkIndex].type == "html" &&
                    isComponentComment(parent.children[checkIndex]) &&
                    parent.children[checkIndex].value.indexOf("ComponentEnd:") == -1) {
                        let startSegments = getComponentSegments(parent.children[checkIndex]);
                        for (let i = segments.length - 1; i >= 0; i--) {
                            //let currPlats = getPlatformsFromComment(parent.children[checkIndex]);
                            let startSeg = startSegments[i];
                            let currComponents = startSeg.components;

                            if (componentsEqual(currComponents, segment.components) &&
                            segment.components.indexOf(options.componentName) == -1) {
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

// obsolete
// function omitStackblitzButtons(options: any) {
//     function omitButtons(node: any, index: number, parent: any) {
//         let docs = options.docs;
//         if (node.value.indexOf("class=\"stackblitz-btn\"" ||
//         node.value.indexOf("class='stackblitz-btn'") >= 0)) {
//             if (!docs.samplesDisplayStackblitz) {
//                 node.value = node.value.replace(/<\s*button[^>]+class=['"]stackblitz-btn['"][^>]*>[\s\S]*?<\/\s*button\s*>/, "");
//             }
//         }
//         //console.log(node);
//     }

//     return function (tree: any) {
//         visit(tree, 'html', omitButtons)
//     }
// }

function omitFencedCode(options: any) {
    function omitFence(node: any, index: number, parent: any) {
        if (!node.lang) {
            return;
        }
        let lang = node.lang;

        let platformDetector: PlatformDetector = options.platformDetector;
        let componentDetector: ComponentDetector = options.componentDetector;

        let info = new FencedBlockInfo();
        info.code = node.value;
        info.lang = lang;

        let plats = platformDetector.detectPlatform(info);
        let components: string[] | null = null;
        if (options.componentName) {
            components = componentDetector.detectComponents(docsComponents, info);
        }

        if (index - 1 >= 0 &&
            parent.children[index - 1] &&
            parent.children[index - 1].type == "html" &&
            parent.children[index - 1].value.indexOf("<!--") >= 0 ) {

            if (isPlatformComment(parent.children[index - 1])) {
                if (getPlatformsFromComment(parent.children[index - 1]) !== null) {
                    plats = getPlatformsFromComment(parent.children[index - 1])!;
                }
            }
            if (options.componentName) {
                if (isComponentComment(parent.children[index - 1])) {
                    if (getComponentsFromComment(parent.children[index - 1]) !== null) {
                        components = getComponentsFromComment(parent.children[index - 1]);
                    }
                }
            }

            if (options.transformer.shouldOmitFencedCode(lang, plats, components, options)) {
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

            if (options.componentName) {
                if (isComponentComment(parent.children[index - 2])) {
                    if (getComponentsFromComment(parent.children[index - 2]) !== null) {
                        components = getComponentsFromComment(parent.children[index - 2])!;
                    }
                }
            }

            if (options.transformer.shouldOmitFencedCode(lang, plats, components, options)) {
               options.toDelete.add(parent.children[index - 2]);
               options.toDelete.add(parent.children[index - 1]);
               options.toDelete.add(node);
            }
        }

        if (options.transformer.shouldOmitFencedCode(lang, plats, components, options)) {
            options.toDelete.add(node);

            //return index;
        }

        //highlight.js, used by docfx, doesn't currently support tsx highlighting.
        //since igniteui-docfx-template 3.6.0, there is custom tsx support
        //if (lang.toLowerCase() == "tsx") {
        //    node.lang = "ts";
        //}
        // commented out since the igniteui-docfx-templat supports razor language
        //if (lang.toLowerCase() == "razor") {
        //    node.lang = "html";
        //}
        //node.lang = lang;
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
    private _componentDetector: ComponentDetector | undefined;
    private _mappings: MappingLoader | undefined;
    private _platform: APIPlatform | undefined;
    private _envTarget: string = "development";
    private _envBrowser: string = "";

    public docsLanguage: string = '';

    shouldOmitFencedCode(language: string, platform: APIPlatform[], components: string[], options: any) {

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
                 language !== "js") {
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

        if (options.componentName) {
            if (components && components.length > 0) {
                if (components.indexOf(options.componentName) == -1) {
                    return true;
                }
            }
        }

        return false;
    }

    private _docs: any;

    configure(mappings: MappingLoader, platform: APIPlatform, docs: any, envTarget: string) {
        this._mappings = mappings;
        this._platform = platform;
        this._platformDetector = new PlatformDetector();
        this._componentDetector = new ComponentDetector();
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
        filePath: string,
        callback: (err: any, results: { content: string, componentOutput: string | null }[] | null) => void): void {

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

        // var targetComponent = '';
        // var md = new MarkdownContent(fileContent, filePath);
        // if (md && md.metadata) {
        //     targetComponent = md.metadata.targetComponent;
        //     console.log('transform for targetComponent ' + targetComponent)
        // }

        let options = {
            typeName: typeName,
            filePath: filePath,
            platform: this._platform,
            mappings: this._mappings,
            // targetComponent: targetComponent,
            gatheredText: [],
            transformer: this,
            toDelete: deleteMap,
            platformDetector: this._platformDetector,
            componentDetector: this._componentDetector,
            docs: this._docs,
            platformSpinalSuffix: null as string | null,
            platformPascalSuffix: null as string | null,
            platformPascalPrefix: null as string | null,
            platformSpinalPrefix: null as string | null
        };

        //TODO-MT remove
        if (this._platform === APIPlatform.Angular) {
            // injecting sandbox and stackblitz buttons
            let codeViewers = fileContent.split("<code-view");
            // console.log("codeViewers " + codeViewers.length);
            let editButtonTemplate = fs.readFileSync('./templates/sample.edit.buttons.html').toString();
            for (let v = 0; v < codeViewers.length; v++) {
                let viewer = codeViewers[v];
                let viewerEnd = -1;
                let viewerStart = viewer.indexOf("code-view");
                if (viewerStart >= 0) {
                    //TODO-MT remove
                    let samplePath = null;
                    let lines = viewer.split("\n");
                    for (let i = 0; i < lines.length; i++) {
                        const line = lines[i];
                        if (line.indexOf("github-src=") > 0) {
                            samplePath = line.replace('github-src="',"");
                            samplePath = samplePath.replace('"','');
                            samplePath = samplePath.replace('>','');
                            samplePath = samplePath.trim();
                        }
                        if (line.indexOf("code-view>") > 0) {
                            viewerEnd = i + 1;
                        }
                    }
                    //TODO-MT remove
                    if (viewerEnd >= 0 && samplePath !== null) {
                        let github = "github/IgniteUI/igniteui-angular-examples/tree/master/samples/" + samplePath;
                        let stackblitz = "https://stackblitz.com/" +  github + "?file=src%2Fapp.component.html";
                        let sandbox = "https://codesandbox.io/s/" + github + "?fontsize=14&hidenavigation=1&theme=dark&view=preview&file=/src/app.component.html";
                        let editButtons = editButtonTemplate + "";
                        editButtons = editButtons.replace('{sandbox}', sandbox);
                        editButtons = editButtons.replace('{stackblitz}', stackblitz);
                        lines.splice(viewerEnd, 0, editButtons);
                        // console.log("codeViewers " + github + " " + viewerEnd + " " + lines.length);
                    }
                    codeViewers[v] = lines.join('\n');
                }
            }
            fileContent = codeViewers.join('<code-view');
        }

        let sampleHost = "";
        // resolving links to sample browsers: local, staging, production
        // except for Angular because the main Angular repo will update these links
        if (this._platform === APIPlatform.Blazor ||
            this._platform === APIPlatform.React ||
            this._platform === APIPlatform.WebComponents) {
            // using 'samplesBrowsers' variable in docConfig.json to replace samples URLs instead of using processor in igniteui-docfx-template
            if (this._envBrowser !== undefined &&
                this._envBrowser !== "") {
                sampleHost = this._envBrowser;
                if (filePath.indexOf("\\jp\\") > 0) {
                    // changing samples links to JP production website in JP topics
                    sampleHost = sampleHost.replace('www.infragistics.com', 'jp.infragistics.com');

                    // changing samples links to JP staging website in JP topics
                    sampleHost = sampleHost.replace('staging.infragistics.com', 'jp.staging.infragistics.com');
                }

                // fileContent = this.replaceAll(fileContent, "{environment:dvDemosBaseUrl}", sampleHost);
                // fileContent = this.replaceAll(fileContent, "{environment:demosBaseUrl}", sampleHost);
            }
        }

            // console.log("sampleHost " + sampleHost);
            // console.log(this._envBrowser);

        // using better looking arrows between API links this way we do not mess markdown with custom symbols
        fileContent = this.replaceAll(fileContent, "` -> `",  "` &#10132; `");

        switch (this._platform) {
            case APIPlatform.Angular:
                options.platformPascalSuffix = "Component";
                options.platformSpinalSuffix = "";
                options.platformPascalPrefix = "Igx";
                options.platformSpinalPrefix = "igx-";
                break;
            case APIPlatform.React:
                options.platformPascalSuffix = "";
                options.platformSpinalSuffix = "";
                options.platformPascalPrefix = "Igr";
                options.platformSpinalPrefix = "igr-";
                break;
            case APIPlatform.WebComponents:
                options.platformPascalSuffix = "Component";
                options.platformSpinalSuffix = "";
                options.platformPascalPrefix = "Igc";
                options.platformSpinalPrefix = "igc-";
                break;
            case APIPlatform.Blazor:
                options.platformPascalSuffix = "";
                options.platformSpinalSuffix = "";
                options.platformPascalPrefix = "Igb";
                options.platformSpinalPrefix = "Igb";
        }

        // initial parsing of metadata from topics to get 'sharedComponents' array
        remark().data('settings', {
            commonmark: false,
            footnotes: true,
            pedantic: true,
        })
        .use(parse)
        .use(frontmatter, ['yaml', 'toml'])
        .use(transformDocPlaceholders, options, true) // removing vars in metadata
        .use(getFrontMatterTypes, options, filePath)
        .process(fileContent, function(err: any, vfile: any) {
            if (err) {
                callback(err, null);
                return;
            }
        });

        let runFor: { componentName: string | null }[] = [{ componentName: null }];
        if ((options as any).sharedComponents) {
            runFor = ((options as any).sharedComponents as string[]).map((c) => { return { componentName: c } });
        }

        let output: {content: string, componentOutput: string | null }[] = [];
        let iteration = 0;
        var doIteration = () => {
            let currRun = runFor[iteration];
            let componentOutput: string | null = null;

            if (currRun.componentName != null) {
                (options as any).componentName = currRun.componentName;

                // console.log("- transforming " + filePath + " for " + currRun.componentName);

                if (docsComponents[currRun.componentName] !== undefined) {
                    componentOutput = docsComponents[currRun.componentName].output;
                }
            } else {
                // console.log("- transforming " + filePath);
            }

            // actual parsing/transforming of metadata and topic's content
            remark().data('settings', {
                commonmark: false,
                footnotes: true,
                pedantic: true,
            })
            .use(parse)
            .use(frontmatter, ['yaml', 'toml'])
            .use(transformSamples, options)
            .use(transformDocPlaceholders, options, false) // keeping vars in metadata
            // .use(transformDocPlaceholders, options, true) // removing vars in metadata
            .use(transformSampleLinks, options, sampleHost)
            .use(getFrontMatterTypes, options, filePath)
            .use(transformCodeRefs, options) // filePath
            .use(transformDocLinks, options)
            .use(omitPlatformSpecificSections, options)
            .use(omitComponentSpecificSections, options)
            // .use(omitStackblitzButtons, options)
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

                output.push({ content: vfile.toString(), componentOutput: componentOutput });

                if (iteration == runFor.length - 1) {
                    callback(null, output);
                } else {
                    iteration++;
                    doIteration();
                }
                //callback(null, vfile.toString());
            });
        }
        doIteration();


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

            url = iframe.replace('iframe-src=', '');
            url = url.replace('{environment:dvDemosBaseUrl}/', '');
            url = url.replace('{environment:demosBaseUrl}/', '');
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
            url = url.replace('>', '');
            url = url.split('"').join('');
            url = url.trim();
            // console.log(">> iframe \n" +  iframe + "\n>> url  " + url);
        }
        return url;
    }
    verifyCodeViewer(fileContent: string, filePath: string): number {
        // var fileContent = file.contents.toString();
        // var filePath = file.dirname + "\\" + file.basename
        // filePath = '.\\doc\\' + filePath.split('doc\\')[1];

        var md = new MarkdownContent(fileContent, filePath);

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

    verifyLinksToTopic(fileContent: string): string {

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

    verifyMarkdown(fileContent: string, filePath: string): any {
        var md = new MarkdownContent(fileContent, filePath);
        var mdValidated = false;

        if (md.metadata === undefined || !md.metadata.hasContent()) {
            console.log("ERROR: missing metadata section wrapped with '---' in " + filePath);
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
                console.log("ERROR: missing metadata 'title:' in " + filePath);
            else if (!md.metadata.hasDescription())
                console.log("ERROR: missing metadata '_description:' in " + filePath);
            else if (!md.metadata.hasKeywords())
                console.log("ERROR: missing metadata '_keywords:' in " + filePath);
            else if (!md.metadata.hasLanguage() && !md.isLocalEN())
                console.log("ERROR: missing metadata '_language:' in " + filePath);
            else if (md.metadata.hasMentionedLinks())
            {
                if (!md.metadata.hasMentionedTypes() && !md.metadata.hasSharedComponents())
                    console.log("ERROR: missing metadata 'mentionedTypes:' in " + filePath);
                else if (md.metadata.mentionedLinks.includes("`true`"))
                    console.log("ERROR: replace `true` with **true** in " + filePath);
                else if (md.metadata.mentionedLinks.includes("`false`"))
                    console.log("ERROR: replace `false` with **false** in " + filePath);
                else
                    mdValidated = true;
            }
            else
            {
                mdValidated = true;
            }
        }

        //console.log("metadata " + filePath);
        fileContent = this.verifyLinksToTopic(fileContent);

        return { fileContent: fileContent, isValid: mdValidated};
    }

    // updateGitIgnore(excludeFiles: string[])
    // {
    //     let gitIgnore = fs.readFileSync(".gitignore").toString();
    //     var startStr = "# shared-files-start";
    //     var endStr = "# shared-files-end";
    //     let start = gitIgnore.indexOf(startStr);
    //     let end = gitIgnore.indexOf(endStr);

    //     if (start < 0) {
    //         throw ".gitignore file is missing # shared-files-start";
    //     }
    //     if (end < 0) {
    //         throw ".gitignore file is missing # shared-files-end";
    //     }

    //     gitIgnore = gitIgnore.substring(0, start + startStr.length)
    //     + "\r\n" + excludeFiles.join("\n") + "\r\n"
    //     + gitIgnore.substring(end);

    //     fs.writeFileSync(".gitignore", gitIgnore);
    // }

    // omitComponentSections(
    //     targetComponent: string,
    //     fileContent: string) : string {

    //     var lines = fileContent.split('\r\n');
    //     // console.log('omitComponentSections "' + targetComponent + '"')

    //     var topicSections = [];
    //     var shareSection = new SharedSection();
    //     for (let i = 0; i < lines.length; i++) {
    //         const line = lines[i];
    //         var start = line.indexOf("<!-- ComponentStart:");
    //         var end = line.indexOf("<!-- ComponentEnd:");
    //         if (start >= 0) {
    //             topicSections.push(shareSection);

    //             var componentLine = line.trim();
    //             componentLine = componentLine.replace("<!-- ComponentStart:", "")
    //             componentLine = componentLine.replace(" -->", "")
    //             shareSection = new SharedSection();
    //             shareSection.components = componentLine.trim().split(',');
    //             shareSection.added = true;
    //             shareSection.lines.push(line);
    //         } else if (end >= 0) {
    //             shareSection.lines.push(line);
    //             shareSection.added = true;
    //             topicSections.push(shareSection);

    //             shareSection = new SharedSection();
    //         } else {

    //             if (line.indexOf('<!-- NOTE') < 0 &&
    //                 line.indexOf('<!-- EXAMPLE') < 0) {
    //                 shareSection.lines.push(line);
    //             }
    //         }
    //     }

    //     if (!shareSection.added)
    //     {
    //         shareSection.added = true;
    //         topicSections.push(shareSection);
    //     }

    //     // console.log(topicSections)

    //     var outputLines = [];
    //     for (let i = 0; i < topicSections.length; i++) {
    //         var section = topicSections[i];
    //         // console.log("outputSegments" + segment.components.indexOf(targetComponent))
    //         if (section.components.length === 0 ||
    //             section.components.indexOf(targetComponent) >= 0) {
    //                 outputLines.push(...section.lines);
    //         }
    //     }
    //     // console.log(outputLines)
    //     return outputLines.join('\r\n');
    // }

    // transformSharedFile(
    //     fileContent: string,
    //     filePath: string, docsComponents: any, docsConfig: any): string[] {
    //     var md = new MarkdownContent(fileContent, filePath);

    //     var generatedFiles: string[] = [];
    //     if (!md.metadata.hasSharedComponents()) return generatedFiles;

    //     var componentsLine = md.metadata.sharedComponents;
    //     componentsLine = componentsLine.replace("sharedComponents:", "");
    //     componentsLine = componentsLine.replace("[", "");
    //     componentsLine = componentsLine.replace("]", "");
    //     componentsLine = componentsLine.replace("_", "");
    //     componentsLine = Strings.replace(componentsLine, '"', '');
    //     var componentsNames = componentsLine.split(",");
    //     if (componentsNames.length === 0) return generatedFiles;

    //     console.log("transformSharedFile " + filePath);
    //     var docPath = ".\\doc\\" + filePath.split("\\doc\\")[1];
    //     var note = 'note: AUTO-GENERATED from "' + Strings.replace(docPath, "\\", "/") + '"';

    //     for (const name of componentsNames) {
    //         var component = docsComponents[name.trim()];
    //         if (component === undefined) {
    //             console.log(docsComponents);
    //             throw "docComponents.json does not define component: '" + name + "'";
    //         } else {

    //             var newTarget = 'targetComponent: "' + component.name + '"';
    //             var newPath = filePath.replace("\\_shared\\", component.output);
    //             var newContent = fileContent.replace("---\r\ntitle:", "---\r\n" + note + "\r\ntitle:");
    //             newContent = newContent.replace(md.metadata.sharedComponents + "\r\n", "");
    //             // newContent = newContent.replace(md.metadata.sharedComponents, newTarget);
    //             // newContent = newContent.replace(new RegExp("{(Component)[a-zA-Z]*}", "gm"), component.name);

    //             // replacing {Component*} variables with acutal variables, e.g. {TreeGridName}
    //             newContent = Strings.replace(newContent, "$Component", "$" + component.name);
    //             newContent = Strings.replace(newContent, "{Component", "{" + component.name);
    //             // omitting topic sections that are specific to a component
    //             newContent = this.omitComponentSections(component.name, newContent);
    //             fs.writeFileSync(newPath, newContent);

    //             var gitPath = "doc\\" + newPath.split("\\doc\\")[1];
    //             gitPath = Strings.replace(gitPath, "\\", "/")
    //             generatedFiles.push(gitPath);
    //         }
    //     }
    //     return generatedFiles;
    // }

    updateApiSection(fileContent: string, filePath: string): string {
        var newApiMembers = [];

        var md = new MarkdownContent(fileContent, filePath);

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
                newApiContent = '\n' + '## API References \n' + newApiContent;
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
            }else if (node.preview) {
                node.status = "PREVIEW";
            } else if (node.beta) {
                node.status = "BETA";
            }
             else {
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
            node.preview = undefined;
            node.beta = undefined;

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
    generateTOC(jsonPath: string, platform: string, language: string, isFirstRelease: boolean, excludedFiles: string[]): string[] {

        if (excludedFiles === undefined)
            excludedFiles = [];

        // console.log('generateTOC for "' + platform + '"  platform from');
        console.log(">> TOC generating from: " + jsonPath + ' for ' + platform); // + '" and isFirstRelease=' + isFirstRelease);

        let jsonFile = fs.readFileSync(jsonPath);
        let jsonContent = jsonFile.toString();

        let tocNodes = this.filterTOC(jsonContent, platform, language, excludedFiles);

        // optional start:
        // let tocPath = jsonPath.replace('toc.json', 'toc_' + platform + '.json')
        // let tocContent = JSON.stringify(tocNodes, null, '  ');
        // fs.writeFileSync(tocPath, tocContent);
        // optional end:

        let ymlPath = jsonPath.replace('toc.json', 'toc.yml');
        let ymlContent = this.generateNodes(tocNodes, 0, isFirstRelease, platform);

        // console.log(">> TOC generating done: " + ymlPath);

        fs.writeFileSync(ymlPath, ymlContent);

        let topicPaths: string[] = [];
        this.generateTopics(topicPaths, tocNodes);

        return topicPaths;
    }

    // generates list of topic paths from TOC nodes that were filter for specific platform
    generateTopics(paths: string[], tocNodes: TocNode[]) {
        for (const node of tocNodes) {
            // generating path to referenced topic
            if (node.href !== undefined && node.href.indexOf(".md") > 0) {
                paths.push(node.href);
                // console.log('>> TOC match ' + node.href);
            }
            // generating paths to children topics
            if (node.items !== undefined) {
                this.generateTopics(paths, node.items);
            }
        }
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

                    // if (node.name && node.name.indexOf("BETA") > 0) {
                    //     yml += tab + "  beta: true" + "\n";
                    // } else
                    if (status.toUpperCase() === "NEW") {
                        yml += tab + "  new: true" + "\n";
                    }
                    else if (status.toUpperCase() === "UPDATED") {
                        yml += tab + "  updated: true" + "\n";
                    }
                    else if (status.toUpperCase() === "PREVIEW") {
                        yml += tab + "  preview: true" + "\n";
                    }
                    else if (status.toUpperCase() === "BETA") {
                        yml += tab + "  beta: true" + "\n";
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
    filterTOC(jsonContent: string, platform: string, language: string, excludedFiles: string[]): TocNode[] {

        let jsonNodes: TocNode[] = JSON.parse(jsonContent);
        let tocNodes = this.filterNodes(jsonNodes, platform, language, excludedFiles);
        // console.log('>> filterTOC completed: ' + jsonNodes.length + ' to ' + tocNodes.length + ' nodes');

        return tocNodes;
    }

    filterContains(nodeReference: string, excludedFiles: string[]): boolean {
        for (const file of excludedFiles) {
            if (file.indexOf(nodeReference) >= 0)
                return true;
        }
        return false;
    }

    filterNodes(tocNodes: TocNode[], platform: string, language: string, excludedFiles: string[]): TocNode[] {
        let matchingNodes: TocNode[] = [];

        for (const node of tocNodes) {
            if (node.exclude === undefined ||
                node.exclude.length === 0 ||
                node.exclude.indexOf(platform) === -1) {

                node.name = node.name.replace("$Platform$", platform);
                if (node.href) {
                    if (this.filterContains(language + "/components/" + node.href, excludedFiles)){
                        continue; // skip node if node reference is in excluded files
                    }
                    node.href = node.href.replace("$Platform$", platform);
                    node.href = node.href.toLowerCase();
                    // node.href = node.href.replace(".md", ".html");
                }

                node.exclude = undefined;
                // recursively check if child items need to be excluded
                if (node.items !== undefined &&
                    node.items.length > 0) {
                    node.items = this.filterNodes(node.items, platform, language, excludedFiles);
                }
                matchingNodes.push(node);
                // console.log('>> TOC filter in  ' + this.getNodeInfo(node));
            }
            else {
                // console.log('>> TOC filter out ' + this.getNodeInfo(node) + ' with exclude="' + node.exclude.join(',') + '"');
            }
        }
        return matchingNodes;
    }

    getNodeInfo(node: TocNode) {
        if (node.href !== undefined) {
            return '"' + './doc/' + this.docsLanguage + '/components/' + node.href + '" node';
        } else {
            return '"' + node.name + '" node header';
        }
    }
}

export class Strings {

    public static endsWith(str: string, pattern: string): boolean {
        return str.endsWith(pattern);
    }

    public static excludes(str: string, exclusions: string[], useEndsWith?: boolean): boolean {
        for (const exclusion of exclusions) {
            if (useEndsWith) {
                if (str.endsWith(exclusion)) { return false; }
            } else {
                if (str.includes(exclusion)) { return false; }
            }
        }
        return true;
    }

    public static includes(str: string, pattern: string): boolean {
        return str.includes(pattern);
    }

    public static replace(orgStr: string, oldStr: string, newStr: string): string {
        return orgStr.split(oldStr).join(newStr);
    }

    public static extract(orgStr: string, startStr: string, endStr: string): string {
       let start = orgStr.indexOf(startStr);
        let end = orgStr.indexOf(endStr);
        return orgStr.substring(start + startStr.length, end);
    }

    public static toTitleCase(str: string, separator?: string) {
        if (separator === undefined) { separator = ' '; }
        return str.toLowerCase().split(separator).map(function(word) {
          return (word.charAt(0).toUpperCase() + word.slice(1));
        }).join(separator);
    }

    public static splitCamel(orgStr: string): string {
        return orgStr.replace(/([a-z0-9])([A-Z])/g, '$1 $2');
    }

    public static removeLines(lines: string[], start: number, end: number) {
        if (lines.length < start) return lines;
        if (lines.length <= end) return lines;
        if (end - start <= 0) return lines;

        return lines.splice(start, end - start);
    }
}

export class TocNode {
    public name: string;
    public status?: string;
    public href?: string;
    public header?: boolean;
    public new?: boolean;
    public updated?: boolean;
    public preview?: boolean;
    public beta?: boolean;
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
            // console.log('Failed on creating MarkdownContent from file without metadata ' + path);
            // console.log(content);
            // return;

            this.metadata = new MarkdownMetadata('');
            this.sectionStrings = parts[0].split('\n## ');
        } else { // metadata found
            this.metadata = new MarkdownMetadata(parts[1]);
            this.metadata.mentionedLinks = this.apiMembers;
            this.sectionStrings = parts[2].split('\n## ');
        }
        // console.log("parts: " + parts.length);
        // console.log("parts0:" + parts[0]);
        // console.log("parts1:" + parts[1]);
        // console.log("parts2:" + parts[2]);

        for (const s of this.sectionStrings) {
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
    public withApiList() { return this.content.indexOf('## API References') === 0; }
    public withCodeViewer() { return this.content.indexOf('<code-view') === 0; }

    public withParagraphs() {
        return !this.withMetadata() && !this.withCodeViewer() && !this.withTopicList();
    }

    public toString() {
        var str = '';
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

class SharedSection {
    components: string[] = [];
    lines: string[] = [];
    added: boolean = false;
    constructor() {
        // this.lines = [];
    }
}
