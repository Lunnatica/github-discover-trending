import Error from 'next/error';
import { useState } from 'react';

import { useStarsContext } from '../../contexts/StarsContext';
import { GithubResult } from '../../interfaces/GithubResults';
import { ResultCard } from '../ResultCard';
import { ResultsHeader } from '../ResultsHeader';
import { StyledResults, StyledResultsLayout } from './StyledResultsLayout';

interface RepoListProps {
    results: GithubResult[];
    isInStarredTab: boolean;
    starredReposIds: string[];
}

const RepoList: React.FC<RepoListProps> = ({
    results,
    isInStarredTab,
    starredReposIds,
}) => {
    if (isInStarredTab && starredReposIds.length === 0) {
        return <p>You have no starred repositories. Star some now!</p>;
    }

    return (
        <StyledResults>
            {results.map(
                ({
                    id,
                    full_name,
                    description,
                    stargazers_count,
                    html_url,
                    language,
                    created_at,
                }) => {
                    const shouldShowResult =
                        !isInStarredTab ||
                        (isInStarredTab &&
                            starredReposIds?.includes(id.toString()));

                    return (
                        shouldShowResult && (
                            <ResultCard
                                key={id}
                                id={id}
                                full_name={full_name}
                                description={description}
                                stargazers_count={stargazers_count}
                                html_url={html_url}
                                language={language}
                                created_at={created_at}
                            />
                        )
                    );
                }
            )}
        </StyledResults>
    );
};

interface ResultsLayoutProps {
    errorCode?: number;
    results?: GithubResult[];
}

const ResultsLayout: React.FC<ResultsLayoutProps> = ({
    errorCode,
    results = [],
}) => {
    const [isInStarredTab, setIsInStarredTab] = useState(false);
    const { starredReposIds } = useStarsContext();
    const changeTab = () => {
        setIsInStarredTab(!isInStarredTab);
    };

    if (errorCode) {
        return (
            <Error
                title="There was a problem when retrieving results from Github. Please try again later."
                statusCode={errorCode}
            />
        );
    }
    return (
        <StyledResultsLayout>
            <ResultsHeader
                changeTab={changeTab}
                isInStarredTab={isInStarredTab}
            />
            {results && results.length > 0 ? (
                <RepoList
                    results={results}
                    isInStarredTab={isInStarredTab}
                    starredReposIds={starredReposIds}
                />
            ) : (
                <p>Sorry, there are no results.</p>
            )}
        </StyledResultsLayout>
    );
};

export { ResultsLayout };
