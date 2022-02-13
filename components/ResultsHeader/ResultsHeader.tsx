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
            <StyledToggleButton
                onClick={() => isInStarredTab && changeTab()}
                disabled={!isInStarredTab}
            >
                {isInStarredTab ? 'Show all repos' : ' All repos'}
            </StyledToggleButton>
            <StyledToggleButton
                onClick={() => !isInStarredTab && changeTab()}
                disabled={isInStarredTab}
            >
                {isInStarredTab ? 'Starred repos' : 'Show starred repos'}
            </StyledToggleButton>
        </StyledResultsHeader>
    );
};

export { ResultsHeader };
