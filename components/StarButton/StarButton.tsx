import { useState } from 'react';

import { StyledStarButton, StyledStarIcon } from './StyledStarButton';

interface StarButtonProps {
    isFav: boolean;
}

const StarButton: React.FC<StarButtonProps> = ({ isFav = false }) => {
    const [hasBeenStarred, setHasBeenStarred] = useState(isFav);
    const onClickHandler = () => setHasBeenStarred(!hasBeenStarred);

    return (
        <StyledStarButton
            hasBeenStarred={hasBeenStarred}
            aria-label={hasBeenStarred ? 'Unstar' : 'Star'}
            onClick={onClickHandler}
            data-testid={hasBeenStarred ? 'Starred' : 'default'}
        >
            <StyledStarIcon hasBeenStarred={hasBeenStarred}>☆</StyledStarIcon>
            {hasBeenStarred ? ' Starred' : ' Star'}
        </StyledStarButton>
    );
};

export { StarButton };
