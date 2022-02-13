interface GithubResult {
    id?: string;
    full_name: string;
    description: string;
    stargazers_count: string;
    html_url: string;
    isFav: boolean;
    language: string | null;
    created_at: string;
}

export type { GithubResult };
