import { useStarsContext } from '../../contexts/StarsContext';
import { StyledStarButton, StyledStarIcon } from './StyledStarButton';

interface StarButtonProps {
    id: string;
}

const StarButton: React.FC<StarButtonProps> = ({ id }) => {
    const { starredRepos, star, unstar } = useStarsContext();
    const isStarred = starredRepos?.includes(id) ?? false;

    const starRepo = () => {
        star(id);
    };

    const unstarRepo = () => {
        unstar(id);
    };

    const onClickHandler = isStarred ? unstarRepo : starRepo;

    return (
        <StyledStarButton
            hasBeenStarred={isStarred}
            aria-label={isStarred ? 'Unstar' : 'Star'}
            onClick={onClickHandler}
            data-testid={isStarred ? 'Starred' : 'default'}
        >
            {id}
            {/* TODO: delete id, just for testing */}
            <StyledStarIcon hasBeenStarred={isStarred}>☆</StyledStarIcon>
            {isStarred ? ' Starred' : ' Star'}
        </StyledStarButton>
    );
};

export { StarButton };
