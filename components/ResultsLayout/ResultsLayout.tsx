import Error from 'next/error';
import { useEffect, useState } from 'react';

import { useStarsContext } from '../../contexts/StarsContext';
import { GithubResult } from '../../interfaces/GithubResults';
import { ResultCard } from '../ResultCard';
import { ResultsHeader } from '../ResultsHeader';
import { StyledNoResults, StyledResultsLayout } from './StyledResultsLayout';

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
    const noResultsMessage = isInStarredTab
        ? 'You have no starred repositories. Star some now!'
        : 'Sorry, there are no results.';
    return <StyledNoResults>{noResultsMessage}</StyledNoResults>;
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
    const [selectedLanguage, setSelectedLanguage] = useState('');
    const { starredReposIds } = useStarsContext();
    const changeTab = () => {
        setIsInStarredTab(!isInStarredTab);
        setSelectedLanguage('');
    };
    const starredRepos = results.filter((x) =>
        starredReposIds.includes(x.id.toString())
    );
    const repoList = isInStarredTab ? starredRepos : results;
    const reposWithLanguage: GithubResult[] = repoList.filter(
        (repo) => repo.language !== null
    );
    const allLanguages: string[] = reposWithLanguage.map(
        (repo) => repo.language as string
    );
    const uniqueLanguages = new Set(allLanguages);
    const languages = Array.from(uniqueLanguages).sort();
    const reposFilteredByLang = selectedLanguage
        ? repoList.filter((repo) => repo.language === selectedLanguage)
        : repoList;

    useEffect(() => {
        // If user unstars all the repos with a language, we reset the language filter
        if (!languages.includes(selectedLanguage)) {
            setSelectedLanguage('');
        }
    }, [languages, selectedLanguage, repoList]);

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
                languages={languages}
                selectedLanguage={selectedLanguage}
                setSelectedLanguage={setSelectedLanguage}
            />
            {reposFilteredByLang && reposFilteredByLang.length > 0 ? (
                <RepoList results={reposFilteredByLang} />
            ) : (
                <NoResults isInStarredTab={isInStarredTab} />
            )}
        </StyledResultsLayout>
    );
};

export { ResultsLayout };
