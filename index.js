const core = require('@actions/core');
const github = require('@actions/github');
const axios = require('axios');

async function run() {
    const GITHUB_TOKEN = core.getInput('GITHUB_TOKEN');
    const PUSHED_GITHUB_SHA = core.getInput('PUSHED_GITHUB_SHA');
    const GITHUB_BRANCH = core.getInput('GITHUB_BRANCH');
    const COVERALLS_REPO_TOKEN = core.getInput('COVERALLS_REPO_TOKEN');
    const COVERALLS_URL = core.getInput('COVERALLS_URL');

    const octokit = github.getOctokit(GITHUB_TOKEN);
    const { context = {} } = github;
    const { pull_request } = context.payload;

    console.log('PUSHED_GITHUB_SHA', PUSHED_GITHUB_SHA);
    console.log('GITHUB_BRANCH', GITHUB_BRANCH);

    const requestBody = {
        "key": COVERALLS_REPO_TOKEN,
        "branch": GITHUB_BRANCH,
        "head": {
            "id": PUSHED_GITHUB_SHA
        }
    }
    const {data} = await axios.post(`${COVERALLS_URL}/api/v1/coverage-diff`, requestBody, {
        headers: {
          'Content-Type': 'application/json'
        }
    })

    console.log('data', data);
    console.log('context', context);
    //TODO: Adjuntar la url donde pueden verlo
    await octokit.rest.issues.createComment({
        ...context.repo,
        //issue_number: pull_request.number,
        issue_number: context.issue.number,
        body: `The current code coverage is: **${data.previous}** \nYour coverage is: **${data.current}** \n**${data.message_diff}**`
    });
}   

run();