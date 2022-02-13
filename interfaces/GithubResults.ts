interface GithubResult {
    id: number;
    full_name: string;
    description: string;
    stargazers_count: string;
    html_url: string;
    language: string | null;
    created_at: string;
}

export type { GithubResult };
