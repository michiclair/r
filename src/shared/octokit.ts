import { Octokit } from "octokit";

// This GitHub token is read-only and does not pose a security risk.
export const octokit = new Octokit({
	auth: "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"
});
