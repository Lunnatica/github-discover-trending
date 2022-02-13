import styled from 'styled-components';
import { breakpoints } from '../../styles/breakpoints';

const StyledResultCard = styled.article`
    background-color: lightgrey;
    flex-basis: 80%;
    padding: 1rem;
    border-bottom: 1px solid #a4a2a2;
`;

const StyledResultSubdetails = styled.p`
    @media ${breakpoints.tablet} {
        font-size: large;
    }
`;

const StyledResultTitle = styled(StyledResultSubdetails)`
    font-weight: bold;
    font-size: x-large;
`;

const linkColor = '#1F52EA'; // A11Y: If color is changed, check https://webaim.org/resources/linkcontrastchecker/

const StyledLink = styled.a`
    color: ${linkColor};
    text-decoration: none;
    font-weight: 600;

    :hover,
    :active {
        box-shadow: 0 0.1rem 0 ${linkColor};
        cursor: pointer;
    }
`;

export {
    StyledResultCard,
    StyledResultSubdetails,
    StyledResultTitle,
    StyledLink,
};
