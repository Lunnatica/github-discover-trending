interface GithubResult {
    id?: string;
    full_name: string;
    description: string;
    stargazers_count: string;
    url: string;
    isFav: boolean;
    language: string;
}

export type { GithubResult };
