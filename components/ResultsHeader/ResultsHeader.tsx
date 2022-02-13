import { StyledResultsHeader, StyledToggleButton } from './StyledResultsHeader';

interface ResultsHeaderProps {
    changeTab: () => void;
    isInStarredTab: boolean;
}

const ResultsHeader: React.FC<ResultsHeaderProps> = ({
    changeTab,
    isInStarredTab,
}) => {
    return (
        <StyledResultsHeader>
            <StyledToggleButton onClick={changeTab}>
                {isInStarredTab ? 'Hide' : 'Show'} starred items
            </StyledToggleButton>
        </StyledResultsHeader>
    );
};

export { ResultsHeader };
