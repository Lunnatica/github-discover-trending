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
                <StyledResults>
                    {results.map(
                        ({ repoName, description, stars, url, isFav }) => {
                            return (
                                <ResultCard
                                    key={repoName}
                                    repoName={repoName}
                                    description={description}
                                    stars={stars}
                                    url={url}
                                    isFav={isFav}
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
