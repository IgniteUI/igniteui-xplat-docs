import { expect } from "chai";
import { SearchHandler, defaultFileGroups, allLangs, allPlatforms, Platform } from "./testing-library";
import { MarkdownTransformer } from "../src/ext/MarkdownTransformer";
import { MappingLoader, APIPlatform } from "../src/ext/MappingLoader";
import * as docConfig from "../docConfig.json";

describe("Transformation Tests", () => {

    const testPlatform = process.env.npm_config_testPlatform || "";

    function transformForPlatform(platform: APIPlatform, content: string): Promise<string> {
        const transformer = new MarkdownTransformer();
        transformer.configure(new MappingLoader(), platform, docConfig[APIPlatform[platform] as keyof typeof docConfig], "development");

        return new Promise((resolve, reject) => {
            transformer.transformContent("TestType", content, "doc/en/components/test.md", (err, results) => {
                if (err) {
                    reject(err);
                    return;
                }

                resolve(results![0].content);
            });
        });
    }

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

    it("should remove empty platform marker nodes without emitting blank comments", async () => {
        const content = [
            "# Title",
            "",
            "<!-- React -->",
            "React only paragraph.",
            "<!-- end: React -->",
            "",
            "<!-- Angular -->",
            "Angular only paragraph.",
            "<!-- end: Angular -->",
            "",
            "After section."
        ].join("\n");

        const output = await transformForPlatform(APIPlatform.React, content);

        expect(output).to.contain("React only paragraph.");
        expect(output).to.not.contain("Angular only paragraph.");
        expect(output).to.not.contain("<!---->");
        expect(output).to.not.contain("<!-- -->");
        expect(output).to.not.match(/\n{3,}/);
    });

    it("should not leave empty comments between adjacent lists after marker removal", async () => {
        const content = [
            "## Resources",
            "",
            "<!-- React, Angular, WebComponents -->",
            "- [Link A](./a.md)",
            "- [Link B](./b.md)",
            "<!-- end: React, Angular, WebComponents -->",
            "- [Link C](./c.md)",
        ].join("\n");

        const output = await transformForPlatform(APIPlatform.React, content);

        expect(output).to.contain("- [Link A](./a.md)");
        expect(output).to.contain("- [Link C](./c.md)");
        expect(output).to.not.contain("<!---->");
        expect(output).to.not.match(/\n{3,}/);
    });
});
