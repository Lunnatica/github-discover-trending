import styled from 'styled-components';
import { breakpoints } from '../../styles/breakpoints';

const StyledResultsLayout = styled.main`
    display: flex;
    background-color: lightgrey;
    padding: 1rem;

    @media ${breakpoints.tablet} {
        padding: 1rem 1rem;
    }

    @media ${breakpoints.desktop} {
        padding: 5rem 6rem;
    }
`;

const StyledResults = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
`;

export { StyledResultsLayout, StyledResults };
