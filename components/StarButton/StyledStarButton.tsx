import styled from 'styled-components';
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
    font-size: x-large;
    padding-left: 0.5rem;
    padding-right: 0.5rem;
    cursor: pointer;
`;

export { StyledStarButton, StyledStarIcon };
