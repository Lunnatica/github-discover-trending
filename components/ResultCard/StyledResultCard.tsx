import styled from 'styled-components';
import { breakpoints } from '../../styles/breakpoints';

const StyledResultCard = styled.article`
    background-color: lightgrey;
    flex-basis: 80%;
    padding: 1rem;

    @media ${breakpoints.tablet} {
        flex-basis: 25%;
    }

    @media ${breakpoints.desktop} {
        flex-basis: 20%;
    }
`;

const StyledResultSubdetails = styled.p`
    margin: 0.5rem 0;

    @media ${breakpoints.tablet} {
        height: 2rem;
        text-overflow: ellipsis;
        word-wrap: break-word;
        overflow: hidden;

        /* The code below, which adds ellipsis, only works in Chrome */
        display: -webkit-box;
        -webkit-line-clamp: 2;
        -webkit-box-orient: vertical;
    }
`;

const StyledResultTitle = styled(StyledResultSubdetails)`
    font-weight: bold;

    @media ${breakpoints.tablet} {
        font-size: medium;
        height: auto;
    }
`;

export { StyledResultCard, StyledResultSubdetails, StyledResultTitle };
