import styled from 'styled-components';

const StyledResultsHeader = styled.div`
    display: flex;
    flex-direction: row;
    width: 100%;
    justify-content: space-between;

    p {
        margin-left: 1rem;
    }
    button {
        margin-right: 2rem;
    }
`;

const StyledToggleButton = styled.button`
    cursor: pointer;
`;

export { StyledResultsHeader, StyledToggleButton };
