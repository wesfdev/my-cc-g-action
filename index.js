const core = require('@actions/core');
const github = require('@actions/github');

async function run() {
    const GITHUB_TOKEN = core.getInput('GITHUB_TOKEN');
    //const octokit = github.getOctokit(GITHUB_TOKEN);
    const { context = {} } = github;
    const { pull_request } = context.payload;

    await github.rest.issues.createComment({
        ...context.repo,
        issue_number: pull_request.number,
        body: 'Te current code coverage is: 80% | [Coverage has not changed | Coverage has decreased by 1% | Coverage has increased by 1%]'
    });
}   

run();