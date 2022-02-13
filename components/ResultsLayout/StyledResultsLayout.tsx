import styled from 'styled-components';
import { breakpoints } from '../../styles/breakpoints';

const StyledResultsLayout = styled.main`
    background-color: lightgrey;
    padding: 0.5rem;

    @media ${breakpoints.tablet} {
        padding: 1rem 1rem;
    }

    @media ${breakpoints.desktop} {
        padding: 1rem 6rem;
    }
`;

export { StyledResultsLayout };
