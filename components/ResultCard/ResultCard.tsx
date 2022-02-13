import { GithubResult } from '../../interfaces/GithubResults';
import {
    StyledResultCard,
    StyledResultTitle,
    StyledResultSubdetails,
} from './StyledResultCard';

const ResultCard: React.FC<GithubResult> = ({
    full_name,
    description,
    stargazers_count,
    url,
    isFav = false,
    language,
}) => {
    return (
        <StyledResultCard>
            <StyledResultTitle>{full_name}</StyledResultTitle>
            <StyledResultSubdetails>{description}</StyledResultSubdetails>
            <StyledResultSubdetails>{stargazers_count}</StyledResultSubdetails>
            <StyledResultSubdetails>{url}</StyledResultSubdetails>
            <StyledResultSubdetails>{language}</StyledResultSubdetails>
            <StyledResultSubdetails>
                {isFav ? 'Fav' : 'Not fav'}
            </StyledResultSubdetails>
        </StyledResultCard>
    );
};

export { ResultCard };
