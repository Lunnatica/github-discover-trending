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
    id,
    full_name,
    description,
    stargazers_count,
    html_url,
    language,
    created_at,
}) => {
    const formattedDate = new Date(created_at).toLocaleDateString(undefined, {
        year: 'numeric',
        month: 'short',
        day: 'numeric',
    });

    return (
        <StyledResultCard>
            <StyledResultTitle>
                <Link href={html_url} passHref>
                    <StyledLink target="_blank">{full_name}</StyledLink>
                </Link>
                <StarButton id={id} />
            </StyledResultTitle>
            <StyledResultSubdetails>{description}</StyledResultSubdetails>
            <StyledResultFooter>
                <span>{language && ` ${language}`}</span>
                <span>Created: {formattedDate}</span>
                <span>{`${stargazers_count}⭐️`}</span>
            </StyledResultFooter>
        </StyledResultCard>
    );
};

export { ResultCard };
