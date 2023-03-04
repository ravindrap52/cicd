// Octokit.js
// https://github.com/octokit/core.js#readme
import { Octokit } from "octokit";

const octokit = new Octokit({
    auth: 'GITHUB_TOKEN'
  })

  const options = {
    owner: 'ravindrap52',
    repo: 'cicd',
  }
  const response = await octokit.request('POST /repos/{owner}/{repo}/deployments', {
    ...options,
    ref: 'main',
    description: 'Deploy request from rp',
    environment: 'production',
    production_environment: true,
    headers: {
      'X-GitHub-Api-Version': '2022-11-28'
    }
  })
  console.log(response);
  await octokit.request('GET /repos/{owner}/{repo}/deployments/{deployment_id}/statuses', {
    ...options,
    deployment_id: response.id || response.data.id,
    state: 'success',
    target_url: 'https://example.com',
    headers: {
      'X-GitHub-Api-Version': '2022-11-28'
    }
  })