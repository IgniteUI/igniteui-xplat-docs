
console.log("MarkdownVerifier");

export class MarkdownVerifier {

    private filePath: string = "";

    verifySectionMetadata(content: string) {
        console.log("verifySectionMetadata");
    }

    verifySectionHeader(content: string) {
        console.log("verifySectionHeader");
    }

    verifySectionCode(content: string) {
        console.log("verifySectionCode");
    }

    verifySectionSample(content: string) {
        console.log("verifySectionSample");
    }

    verifySectionParagraph(content: string) {
        console.log("verifySectionParagraph");
    }

    verifySectionNote(content: string) {
        console.log("verifySectionNote");
    }

    verifyLinkToAPI(content: string) {
        console.log("verifyLinkToAPI");
    }

    verifyLinkToTopic(content: string) {
        console.log("verifyLinkToTopic");
    }

    verifyDocsVariable(content: string) {
        console.log("verifyDocsVariable");
    }

    verifyMarkdownFile(content: string, mdPath: string) {
        this.filePath = mdPath;

        var result: any = {};
        result.isValid = true;

        var lines = content.split('\n');
        var file = lines.join('\n\r').split('\n\r\r').join('\n\r');

        var sections: string[] = file.split('\n\r\n\r');
        // var sections = fileContent.split('\n\n');

        // console.log(sections[0]);
        // console.log("-------------------------------------")
        // console.log(sections[1]);

        for (let i = 0; i < 8; i++) {
            console.log("_____ " + i + " ___________________");
            console.log(sections[i]);

            var section = sections[i];
            if (section.startsWith("---")) {
                this.verifySectionMetadata(section);
            }
            else if (section.startsWith("#")) {
                this.verifySectionHeader(section);
            }
            else if (section.startsWith("`sample=")) {
                this.verifySectionSample(section);
            }
            else if (section.startsWith("```")) {
                this.verifySectionCode(section);
            } else {
                this.verifySectionParagraph(section);
            }

        }

        return result;
    }
}

// exports.verifyMarkdownFile = verifyMarkdownFile;
