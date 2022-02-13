import styled from 'styled-components';

import { colors } from '../../styles/colors';

const StyledResultsHeader = styled.div`
    padding: 1rem;
    display: flex;
    flex-direction: column;
`;

const StyledToggleButton = styled.button`
    cursor: pointer;
    border: solid;
    border-width: 1px;
    color: white;
    padding: 1em 2em;
    border-radius: 0.5rem;
    font-size: 1rem;
    margin: 0.4rem 0.2rem;
    background-color: ${colors.activeTabBackground};

    &:hover {
        background-color: ${colors.hoverTabBackground};
    }

    &:disabled {
        cursor: not-allowed;
        background-color: ${colors.disabledTabBackground};
    }
`;

const StyledTabs = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
`;

export { StyledResultsHeader, StyledToggleButton, StyledTabs };
