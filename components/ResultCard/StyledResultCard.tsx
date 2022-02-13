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

const StyledResultTitle = styled(StyledResultSubdetails)`
    font-weight: bold;
    display: flex;
    justify-content: space-between;
`;

const StyledResultFooter = styled.p`
    font-size: large;
    color: #550376;
    display: flex;
    justify-content: space-between;
`;

const StyledLink = styled.a`
    color: ${colors.link};
    text-decoration: none;
    font-weight: 600;

    :hover,
    :active {
        box-shadow: 0 0.1rem 0 ${colors.link};
        cursor: pointer;
    }
`;

export {
    StyledResultCard,
    StyledResultSubdetails,
    StyledResultTitle,
    StyledLink,
    StyledResultFooter,
};
