const core = require('@actions/core');
const github = require('@actions/github');

async function run() {
    const GITHUB_TOKEN = core.getInput('GITHUB_TOKEN');
    const octokit = github.getOctokit(GITHUB_TOKEN);
    const { context = {} } = github;
    const { pull_request } = context.payload;

    await octokit.issues.createComment({
        ...context.repo,
        issue_number: pull_request.number,
        body: 'Te current code coverage is: 80% | [Coverage has not changed | Coverage has decreased by 1% | Coverage has increased by 1% | Coverage has decreased by 2% | Coverage has increased by 2% | Coverage has decreased by 3% | Coverage has increased by 3% | Coverage has decreased by 4% | Coverage has increased by 4% | Coverage has decreased by 5% | Coverage has increased by 5% | Coverage has decreased by 6% | Coverage has increased by 6% | Coverage has decreased by 7% | Coverage has increased by 7% | Coverage has decreased by 8% | Coverage has increased by 8% | Coverage has decreased by 9% | Coverage has increased by 9% | Coverage has decreased by 10% | Coverage has increased by 10% | Coverage has decreased by 11% | Coverage has increased by 11% | Coverage has decreased by 12% | Coverage has increased by 12% | Coverage has decreased by 13% | Coverage has increased by 13% | Coverage has decreased by 14% | Coverage has increased by 14% | Coverage has decreased by 15% | Coverage has increased by 15% | Coverage has decreased by 16% | Coverage has increased by 16% | Coverage has decreased by 17% | Coverage has increased by 17% | Coverage has decreased by 18% | Coverage has increased by 18% | Coverage has decreased by 19% | Coverage has increased by 19% | Coverage has decreased by 20% | Coverage has increased by 20% | Coverage has decreased by 21% | Coverage has increased by 21% | Coverage has decreased by 22% | Coverage has increased by 22% | Coverage has decreased by 23% | Coverage has increased by 23% | Coverage has decreased by 24% | Coverage has increased by 24% | Coverage has decreased by 25% | Coverage has increased by 25% | Coverage has decreased by 26% | Coverage has increased by 26% | Coverage has decreased by 27% | Coverage has increased by 27% | Coverage has decreased by 28% | Coverage has increased by 28% | Coverage has decreased by 29% | Coverage has increased by 29% | Coverage has decreased by 30% | Coverage has increased by 30% | Coverage has decreased by 31% | Coverage has increased by 31% | Coverage has decreased by 32% |]'
    });
}   

run();