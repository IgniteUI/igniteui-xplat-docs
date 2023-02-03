import * as fsSync from 'fs';
import * as fs from 'fs/promises';
import * as path from 'path';

export interface IFileGroups {
    "allFiles": string[],
    "allMarkdown": string[],
    "tocOnly": string[]
}

export type Platform = ('Blazor'|'WC'|'React')
export type Language = ('jp'|'kr'|'en')

export const productPathMap: Map<Platform, string> = new Map<Platform, string>([
    ['React', '../dist/React/{lang}/components'],
    ['WC', '../dist/WebComponents/{lang}/components'],
    ['Blazor', '../dist/Blazor/{lang}/components'],
]);

export const allPlatforms: Platform[] = ['Blazor', 'React', 'WC'];
export const allLangs: Language[] = ['en', 'jp', 'kr'];

export const defaultFileGroups: IFileGroups = {
    "allFiles": ['*.*'],
    "allMarkdown": ['*.md'],
    "tocOnly": ['toc.yml']
}

export class SearchHandler {

    /**
     * Searches for RegExp matches in the files produced by the build
     * @param searchRegex an array of RegExp to match the files against
     * @param platforms an array of platforms to perform the search for
     * @param langs an array of languages to perform the search for 
     * @param fileWildcards a file is only searched if it matches one of the path wildcards provided
     * @returns a Promise that resolves to a list of files that pass the search criteria
     */
    public static async searchInFiles(
            searchRegex: RegExp[],
            platforms?: Platform[],
            langs?: Language[],
            fileWildcards?: string[]): Promise<string[]> {
        if (!platforms || !platforms.length) {
            platforms = allPlatforms;
        }
        if (!langs || !langs.length) {
            langs = allLangs;
        }
        const dirs: string[] = [];
        for (const platform of platforms) {
            for (const lang of langs) {
                dirs.push(path.join(__dirname, (productPathMap.get(platform) || '').replace('{lang}', lang)));
            }
        }
        return Promise
            .all(dirs.map((dir) => this.recursiveSearch(dir, searchRegex, fileWildcards)))
            .then((promiseResult) => {
                return promiseResult.flat();
            });
    }

    private static async recursiveSearch(dir: string, searchRegex: RegExp[], fileWildcards?: string[]): Promise<string[]> {
        const matchingFiles: string[] = [];
        for await (const f of this.getFiles(dir)) {
            if (this.shouldTestFile(f, fileWildcards)) {
                const fileCont = await fs.readFile(f, 'utf8');
                for (const regex of searchRegex) {
                    if (fileCont.match(regex)) {
                        matchingFiles.push(f);
                    }
                }
            }
        }
        return matchingFiles;
    }

    private static async * getFiles(dir: string): AsyncGenerator<string, any, unknown> {
        if (!fsSync.existsSync(dir)) {
            return;
        }
        const entities = await fs.readdir(dir, { withFileTypes: true });
        for (const entity of entities) {
            const res = path.resolve(dir, entity.name);
            if (entity.isDirectory()) {
                yield* this.getFiles(res);
            } else {
                yield res;
            }
        }
    }

    private static shouldTestFile(file: string, fileWildcards?: string[]): boolean {
        let pass = false;
        fileWildcards = fileWildcards || [];
        for (const wildcard of fileWildcards) {
            let w = wildcard.replace(/[.+^${}()|[\]\\]/g, '\\$&'); // regexp escape 
            const re = new RegExp(`^${w.replace(/\*/g, '.*').replace(/\?/g, '.')}$`, 'i');
            pass = pass || re.test(file); // remove last 'i' above to have case sensitive
        }
        return pass;
    }
}
