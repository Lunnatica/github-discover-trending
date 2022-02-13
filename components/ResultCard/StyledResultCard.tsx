import styled from 'styled-components';
import { breakpoints } from '../../styles/breakpoints';

const StyledResultCard = styled.article`
    background-color: lightgrey;
    flex-basis: 80%;
    padding: 1rem;
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

export { StyledResultCard, StyledResultSubdetails, StyledResultTitle };
