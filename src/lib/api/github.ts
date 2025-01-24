// src/lib/api/github.ts

type Contributor = {
    login: string;
    id: number;
    avatar_url: string;
    html_url: string;
    contributions: number;
};

type ErrorResponse = {
    error: string;
};

export async function getContributors(
    owner: string,
    repo: string
): Promise<Contributor[] | ErrorResponse> {
    if (!owner || !repo) {
        return { error: 'Repository owner and name are required' };
    }

    const githubApiUrl = process.env.NEXT_PUBLIC_GITHUB_API_URL;
    const token = process.env.GITHUB_PERSONAL_ACCESS_TOKEN;

    if (!githubApiUrl || !token) {
        return { error: 'Missing GitHub API URL or token in environment variables' };
    }

    try {
        const response = await fetch(`${githubApiUrl}/repos/${owner}/${repo}/contributors`, {
            headers: {
                Authorization: `token ${token}`,
                Accept: 'application/vnd.github.v3+json',
            },
        });

        if (!response.ok) {
            return { error: `GitHub API error: ${response.statusText}` };
        }

        const contributors: Contributor[] = await response.json();
        return contributors;
    } catch (error) {
        return { error: 'Failed to fetch contributors: ' + error };
    }
}
