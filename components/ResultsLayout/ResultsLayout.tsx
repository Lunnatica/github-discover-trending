import Error from 'next/error';
import { GithubResult } from '../../interfaces/GithubResults';
import { ResultCard } from '../ResultCard';
import { StyledResults, StyledResultsLayout } from './StyledResultsLayout';

interface ResultsLayoutProps {
    errorCode?: number;
    results?: GithubResult[];
}

const ResultsLayout: React.FC<ResultsLayoutProps> = ({
    errorCode,
    results = [],
}) => {
    if (errorCode) {
        return (
            <Error
                title="There was a problem when retrieving results from Github. Please try again later."
                statusCode={errorCode}
            />
        );
    } else
        return results && results.length > 0 ? (
            <StyledResultsLayout>
                List of most starred repositories - TODO: Add header
                <StyledResults>
                    {results.map(
                        ({
                            id,
                            full_name,
                            description,
                            stargazers_count,
                            html_url,
                            isFav = false,
                            language,
                        }) => {
                            return (
                                <ResultCard
                                    key={id}
                                    full_name={full_name}
                                    description={description}
                                    stargazers_count={stargazers_count}
                                    html_url={html_url}
                                    isFav={isFav}
                                    language={language}
                                />
                            );
                        }
                    )}
                </StyledResults>
            </StyledResultsLayout>
        ) : (
            <p>Sorry, there are no results.</p>
        );
};

export { ResultsLayout };
