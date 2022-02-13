import styled from 'styled-components';

import { colors } from '../../styles/colors';

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

export { StyledResultsHeader, StyledToggleButton };
