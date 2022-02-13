interface GithubResult {
    id?: string;
    full_name: string;
    description: string;
    stargazers_count: string;
    html_url: string;
    isFav: boolean;
    language: string;
}

export type { GithubResult };
