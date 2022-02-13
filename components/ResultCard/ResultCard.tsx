import { GithubResult } from '../../interfaces/GithubResults';
import {
    StyledResultCard,
    StyledResultTitle,
    StyledResultSubdetails,
} from './StyledResultCard';

const ResultCard: React.FC<GithubResult> = ({
    repoName,
    description,
    stars,
    url,
    isFav,
}) => {
    return (
        <StyledResultCard>
            <StyledResultTitle>{repoName}</StyledResultTitle>
            <StyledResultSubdetails>{description}</StyledResultSubdetails>
            <StyledResultSubdetails>{stars}</StyledResultSubdetails>
            <StyledResultSubdetails>{url}</StyledResultSubdetails>
            <StyledResultSubdetails>
                {isFav ? 'Fav' : 'Not fav'}
            </StyledResultSubdetails>
        </StyledResultCard>
    );
};

export { ResultCard };
