import { APIPlatform } from "./MappingLoader";
import { FencedBlockInfo } from "./PlatformDetector";

export class ComponentDetector {
    constructor() {
        
    }

    detectComponents(docComponents: any, fencedBlockInfo: FencedBlockInfo): string[] {
        let components: string[] = [];
        let added = new Set<string>();
        let keys = Object.keys(docComponents);
        for (var i = 0; i < keys.length; i++) {
            let comp = keys[i];
            if (docComponents[comp] && docComponents[comp].name) {
                if (docComponents[comp].selectors) {
                    var currSelectors = docComponents[comp].selectors;
                    for (var i = 0; i < currSelectors.length; i++) {
                        let currSelector = currSelectors[i];
                        if (fencedBlockInfo.code.indexOf(currSelector) >= 0) {
                            if (!added.has(docComponents[comp].name)) {
                                components.push(docComponents[comp].name);
                                added.add(docComponents[comp].name);
                            }
                        }
                    }
                }
                if (docComponents[comp].types) {
                    var currTypes = docComponents[comp].types;
                    for (var i = 0; i < currTypes.length; i++) {
                        let currType = currTypes[i];
                        if (fencedBlockInfo.code.indexOf(currType) >= 0) {
                            if (!added.has(docComponents[comp].name)) {
                                components.push(docComponents[comp].name);
                                added.add(docComponents[comp].name);
                            }
                        }
                    }
                }
            }
        }
        return components;
    }
}


function getXamlControlPrefix(code: string): string {
    if (code.indexOf(":Xam") >= 0) {
        return "Xam";
    }
    if (code.indexOf(":XF") >= 0) {
        return "XF";
    }

    return "";
}

export abstract class PlatformDetectorRule {
    abstract match(info: FencedBlockInfo): boolean;
    abstract get platform(): APIPlatform;

    static isTS(lang: string) {
        if (lang === null) {
            return false;
        }
        return lang.toLowerCase() == "ts" ||
        lang.toLowerCase() == "typescript";
    }

    static isTSX(lang: string) {
        if (lang === null) {
            return false;
        }
        return lang.toLowerCase() == "tsx";
    }

    static isHTML(lang: string) {
        if (lang === null) {
            return false;
        }
        return lang.toLowerCase() == "html";
    }

    static isJS(lang: string) {
        if (lang === null) {
            return false;
        }
        return lang.toLowerCase() == "js";
    }

    static isJson(lang: string) {
        if (lang === null) {
            return false;
        }
        return lang.toLowerCase() == "json";
    }

    static isRazor(lang: string) {
        if (lang === null) {
            return false;
        }
        return lang.toLowerCase() == "razor";
    }
}

class BlazorRule extends PlatformDetectorRule {
    match(info: FencedBlockInfo): boolean {
        if (!info.lang) {
            return false;
        }
        
        if (PlatformDetectorRule.isRazor(info.lang)) {
            return true;
        }

        return false;
    }
    get platform(): APIPlatform {
        return APIPlatform.Blazor;
    }
}

class WPFXamlRule extends PlatformDetectorRule {
    match(info: FencedBlockInfo): boolean {
        if (!info.lang) {
            return false;
        }
        let langParts = info.lang.split(' ');
        let lang = langParts[0].trim().toLowerCase();
        if (lang !== "xml") {
            return false;
        }

        let prefix = getXamlControlPrefix(info.code);
        if (prefix == "XF") {
            return false;
        }

        return true;
    }
    get platform(): APIPlatform {
        return APIPlatform.WPF;
    }
}

class XamarinXamlRule extends PlatformDetectorRule {
    match(info: FencedBlockInfo): boolean {
        if (!info.lang) {
            return false;
        }
        let langParts = info.lang.split(' ');
        let lang = langParts[0].trim().toLowerCase();
        if (lang !== "xml") {
            return false;
        }

        let prefix = getXamlControlPrefix(info.code);
        if (prefix == "Xam") {
            return false;
        }

        return true;
    }
    get platform(): APIPlatform {
        return APIPlatform.XamarinForms;
    }
}

class AngularHTMLRule extends PlatformDetectorRule {
    match(info: FencedBlockInfo): boolean {
        if (!info.lang) {
            return false;
        }
        let langParts = info.lang.split(' ');
        let lang = langParts[0].trim().toLowerCase();
        if (!PlatformDetectorRule.isHTML(lang)) {
            return false;
        }

        if (info.code.indexOf("igx-") >= 0) {
            return true;
        }

        return false;
    }
    get platform(): APIPlatform {
        return APIPlatform.Angular;
    }
}

class AngularTSRule extends PlatformDetectorRule {
    match(info: FencedBlockInfo): boolean {
        if (!info.lang) {
            return false;
        }
        let langParts = info.lang.split(' ');
        let lang = langParts[0].trim().toLowerCase();
        if (!PlatformDetectorRule.isTS(lang)) {
            return false;
        }

        if (AngularTSRule.isDefiniteTSMatch(lang, info.code)) {
            return true;
        }

        if (PlatformDetectorRule.isTS(lang) &&
            !ReactTSRule.isDefiniteTSMatch(lang, info.code) &&
            !WebComponentsTSRule.isDefiniteTSMatch(lang, info.code)) {
            return true;
        }

        return false;
    }
    static isDefiniteTSMatch(lang: string, code: string) {
        return PlatformDetectorRule.isTS(lang) && code.indexOf("Igx") >= 0;
    }
    get platform(): APIPlatform {
        return APIPlatform.Angular;
    }
}

class ReactTSRule extends PlatformDetectorRule {
    match(info: FencedBlockInfo): boolean {
        if (!info.lang) {
            return false;
        }
        let langParts = info.lang.split(' ');
        let lang = langParts[0].trim().toLowerCase();

        if (PlatformDetectorRule.isTSX(lang)) {
            return true;
        }

        if (!PlatformDetectorRule.isTS(lang)) {
            return false;
        }

        if (ReactTSRule.isDefiniteTSMatch(lang, info.code)) {
            return true;
        }

        if (PlatformDetectorRule.isTS(lang) &&
            !AngularTSRule.isDefiniteTSMatch(lang, info.code) &&
            !WebComponentsTSRule.isDefiniteTSMatch(lang, info.code)) {
            return true;
        }

        return false;
    }
    static isDefiniteTSMatch(lang: string, code: string) {
        return (PlatformDetectorRule.isTS(lang) || PlatformDetectorRule.isTSX(lang)) && code.indexOf("Igr") >= 0;
    }
    get platform(): APIPlatform {
        return APIPlatform.React;
    }
}

class WebComponentsTSRule extends PlatformDetectorRule {
    match(info: FencedBlockInfo): boolean {
        if (!info.lang) {
            return false;
        }
        let langParts = info.lang.split(' ');
        let lang = langParts[0].trim().toLowerCase();

        if (!PlatformDetectorRule.isTS(lang)) {
            return false;
        }

        if (WebComponentsTSRule.isDefiniteTSMatch(lang, info.code)) {
            return true;
        }

        if (PlatformDetectorRule.isTS(lang) &&
            !AngularTSRule.isDefiniteTSMatch(lang, info.code) &&
            !ReactTSRule.isDefiniteTSMatch(lang, info.code)) {
            return true;
        }

        return false;
    }
    static isDefiniteTSMatch(lang: string, code: string) {
        return PlatformDetectorRule.isTS(lang) && code.indexOf("Igc") >= 0;
    }
    get platform(): APIPlatform {
        return APIPlatform.WebComponents;
    }
}

class ReactHTMLRule extends PlatformDetectorRule {
    match(info: FencedBlockInfo): boolean {
        if (!info.lang) {
            return false;
        }
        let langParts = info.lang.split(' ');
        let lang = langParts[0].trim().toLowerCase();
        if (!PlatformDetectorRule.isHTML(lang)) {
            return false;
        }

        if (info.code.indexOf("Igr") >= 0) {
            return true;
        }

        return false;
    }
    get platform(): APIPlatform {
        return APIPlatform.React;
    }
}

class WebComponentsHTMLRule extends PlatformDetectorRule {
    match(info: FencedBlockInfo): boolean {
        if (!info.lang) {
            return false;
        }
        let langParts = info.lang.split(' ');
        let lang = langParts[0].trim().toLowerCase();
        if (!PlatformDetectorRule.isHTML(lang)) {
            return false;
        }

        if (info.code.indexOf("igc") >= 0) {
            return true;
        }

        return false;
    }
    get platform(): APIPlatform {
        return APIPlatform.WebComponents;
    }
}