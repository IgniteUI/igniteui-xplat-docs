const { Octokit } = require("@octokit/rest");


createPullRequest();

async function createPullRequest() {
    const octokit = new Octokit();

    octokit.pulls.create({
        owner: "ESShared",
        repo: "https://github.com/IgniteUI/igniteui-docfx",
        title: "test pr",
        head: "zkolev/add-gh-workflow-auto-pr",
        base: "zkolev/test-branch"
    });
}