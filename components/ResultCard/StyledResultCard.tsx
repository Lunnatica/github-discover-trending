import styled from 'styled-components';
import { breakpoints } from '../../styles/breakpoints';
import { colors } from '../../styles/colors';

const StyledResultCard = styled.article`
    background-color: ${colors.background};
    flex-basis: 90%;
    padding: 1rem;
    border-bottom: 1px solid ${colors.border};
`;

const StyledResultSubdetails = styled.p`
    font-size: large;

    @media ${breakpoints.tablet} {
        font-size: x-large;
    }
`;

const StyledResultTitle = styled.p`
    display: flex;
    justify-content: space-between;
    font-weight: bold;
    font-size: large;

    @media ${breakpoints.mobile} {
        font-size: x-large;
    }
`;

const StyledResultFooter = styled.p`
    font-size: large;
    color: #550376;
    display: flex;
    justify-content: space-between;
`;

const StyledLink = styled.a`
    cursor: pointer;
    color: ${colors.link};
    text-decoration: none;
    font-weight: 600;
    text-overflow: ellipsis;
    word-wrap: break-word;
    overflow: hidden;
    max-width: 75%;

    :hover,
    :active {
        text-decoration: underline;
    }
`;

export {
    StyledResultCard,
    StyledResultSubdetails,
    StyledResultTitle,
    StyledLink,
    StyledResultFooter,
};
