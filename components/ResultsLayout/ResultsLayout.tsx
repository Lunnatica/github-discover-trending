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
        <>
            {results.map(
                ({
                    id,
                    full_name,
                    description,
                    stargazers_count,
                    html_url,
                    language,
                    created_at,
                }) => (
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
            )}
        </>
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

const getLanguages = (repoList: GithubResult[]) => {
    const allLanguages: string[] = repoList
        .filter((repo) => repo.language !== null)
        .map((repo) => repo.language as string);

    const uniqueLanguages = new Set(allLanguages);
    const languages = Array.from(uniqueLanguages).sort();
    return languages;
};

interface ResultsLayoutProps {
    results?: GithubResult[];
}

const ResultsLayout: React.FC<ResultsLayoutProps> = ({ results = [] }) => {
    const [isInStarredTab, setIsInStarredTab] = useState(false);
    // const [isSorted, setIsSorted] = useState(true);
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

    const languages = getLanguages(repoList);
    const reposFilteredByLang = selectedLanguage
        ? repoList.filter((repo) => repo.language === selectedLanguage)
        : repoList;

    useEffect(() => {
        // If user unstars all the repos with a language, we reset the language filter
        if (!languages.includes(selectedLanguage)) {
            setSelectedLanguage('');
        }
    }, [languages, selectedLanguage, repoList]);

    // const resort = (repoList: GithubResult[]) => {
    //     repoList.sort((a, b) => {
    //         if (a.stargazers_count < b.stargazers_count) {
    //             return -1;
    //         }
    //         if (a.stargazers_count > b.stargazers_count) {
    //             return 1;
    //         }
    //         return 0;
    //     });
    //     setIsSorted(false);
    // };

    return (
        <StyledResultsLayout>
            {/* <button
                onClick={() => {
                    resort(repoList);
                }}
            >
                Change sort order
            </button> */}
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
