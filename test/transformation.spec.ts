import { expect } from "chai";
import { SearchHandler, defaultFileGroups, allLangs, allPlatforms } from "./testing-library";

describe("Transformation Tests", () => {

    const testPlatform = process.env.npm_config_testPlatform || "";

    it("should not have any files with leftover replacement words", async () => {
        const result = await SearchHandler.searchInFiles(
            [SearchHandler.buildFullRegex(testPlatform)],
            allPlatforms,
            allLangs,
            defaultFileGroups.allMarkdown);
        expect(result).to.eql([]);
    });
});
