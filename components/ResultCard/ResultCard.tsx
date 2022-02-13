import Link from 'next/link';

import { GithubResult } from '../../interfaces/GithubResults';
import { StarButton } from '../StarButton';
import {
    StyledLink,
    StyledResultCard,
    StyledResultFooter,
    StyledResultSubdetails,
    StyledResultTitle,
} from './StyledResultCard';

const ResultCard: React.FC<GithubResult> = ({
    full_name,
    description,
    stargazers_count,
    html_url,
    isFav = false,
    language,
}) => {
    return (
        <StyledResultCard>
            <StyledResultTitle>
                <Link href={html_url} passHref>
                    <StyledLink target="_blank">{full_name}</StyledLink>
                </Link>
                <StarButton isFav={isFav} />
            </StyledResultTitle>
            <StyledResultSubdetails>{description}</StyledResultSubdetails>
            <StyledResultFooter>
                <span>{language && ` ${language}`}</span>
                <span>{`${stargazers_count}⭐️`}</span>
            </StyledResultFooter>
        </StyledResultCard>
    );
};

export { ResultCard };
