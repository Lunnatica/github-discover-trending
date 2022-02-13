import Error from 'next/error';
import { useState } from 'react';

import { useStarsContext } from '../../contexts/StarsContext';
import { GithubResult } from '../../interfaces/GithubResults';
import { ResultCard } from '../ResultCard';
import { ResultsHeader } from '../ResultsHeader';
import { StyledResultsLayout } from './StyledResultsLayout';

interface RepoListProps {
    results: GithubResult[];
}

const RepoList: React.FC<RepoListProps> = ({ results }) => {
    return (
        <div>
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
                    return (
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
                    );
                }
            )}
        </div>
    );
};

interface NoResultsProps {
    isInStarredTab: boolean;
}

const NoResults: React.FC<NoResultsProps> = ({ isInStarredTab }) => {
    if (isInStarredTab) {
        return <p>You have no starred repositories. Star some now!</p>;
    } else return <p>Sorry, there are no results.</p>;
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
    const starredRepos = results.filter((x) =>
        starredReposIds.includes(x.id.toString())
    );
    const repoList = isInStarredTab ? starredRepos : results;

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
            {repoList && repoList.length > 0 ? (
                <RepoList results={repoList} />
            ) : (
                <NoResults isInStarredTab={isInStarredTab} />
            )}
        </StyledResultsLayout>
    );
};

export { ResultsLayout };
