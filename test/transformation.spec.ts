import { expect } from "chai";
import { SearchHandler, defaultFileGroups, allLangs, allPlatforms, Platform } from "./testing-library";

describe("Transformation Tests", () => {

    const testPlatform = process.env.npm_config_testPlatform || "";

    it("should not have any files with leftover replacement words", async () => {
        let testPlatforms = !testPlatform.length ? allPlatforms : [testPlatform];
        for (const platform of testPlatforms) {
            const result = await SearchHandler.searchInFiles(
                [SearchHandler.buildFullRegex(platform)],
                [platform as Platform],
                allLangs,
                defaultFileGroups.allMarkdown);
            expect(result).to.eql([]);
        }
    });
});
