export interface IFileGroups {
    "allFiles": string[];
    "allMarkdown": string[];
    "tocOnly": string[];
}
export declare type Platform = ('Blazor' | 'WebComponents' | 'React' | 'Angular');
export declare type Language = ('jp' | 'kr' | 'en');
export declare const productPathMap: Map<Platform, string>;
export declare const allPlatforms: Platform[];
export declare const allLangs: Language[];
export declare const defaultFileGroups: IFileGroups;
export declare class SearchHandler {
    /**
     * Searches for RegExp matches in the files produced by the build
     * @param searchRegex an array of RegExp to match the files against
     * @param platforms an array of platforms to perform the search for
     * @param langs an array of languages to perform the search for
     * @param fileWildcards a file is only searched if it matches one of the path wildcards provided
     * @returns a Promise that resolves to a list of files that pass the search criteria
     */
    static searchInFiles(searchRegex: RegExp[], platforms?: Platform[], langs?: Language[], fileWildcards?: string[]): Promise<string[]>;
    static buildFullRegex(platform: string): RegExp;
    private static recursiveSearch;
    private static getFiles;
    private static shouldTestFile;
}
//# sourceMappingURL=testing-library.d.ts.map