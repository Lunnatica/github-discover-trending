import styled from 'styled-components';

import { breakpoints } from '../../styles/breakpoints';
import { colors } from '../../styles/colors';

interface StyledStarProps {
    hasBeenStarred: boolean;
}

const StyledStarIcon = styled.span<StyledStarProps>`
    &:before {
        content: '\\2605';
        position: absolute;
        color: ${({ hasBeenStarred }) =>
            hasBeenStarred ? 'gold' : 'transparent'};
        border-color: black;
    }
`;

const StyledStarButton = styled.button<StyledStarProps>`
    border: 1px solid ${colors.border};
    position: relative;
    border-radius: 0.25rem;
    padding-left: 0.5rem;
    padding-right: 0.5rem;
    cursor: pointer;
    white-space: nowrap;
    min-height: 3rem;
    min-width: 3rem;

    font-size: large;

    @media ${breakpoints.mobile} {
        font-size: x-large;
    }
`;

export { StyledStarButton, StyledStarIcon };
