import { expect } from "chai";
import { SearchHandler, defaultFileGroups, allLangs, allPlatforms } from "./testing-library";

describe("Transformation Tests", () => {
    it("should not have any files with leftover reserved words", async () => {
        const result = await SearchHandler.searchInFiles(
            [/\{Platform\}|\{ProductName\}/gm],
            allPlatforms,
            allLangs,
            defaultFileGroups.allMarkdown);
        expect(result).to.eql([]);
    });

    it("should not have any files with leftover component replacement words", async () => {
        const result = await SearchHandler.searchInFiles(
            [/ComponentSelector|ComponentName/gm],
            allPlatforms,
            allLangs,
            defaultFileGroups.allMarkdown);
        expect(result).to.eql([]);
    });
});