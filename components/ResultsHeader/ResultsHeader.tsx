import {
    StyledResultsHeader,
    StyledToggleButton,
    StyledTabs,
} from './StyledResultsHeader';

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
            <h2>
                List of the repositories created in the last 7 days with the
                most number of stars in Github.
            </h2>
            <StyledTabs>
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
            </StyledTabs>
        </StyledResultsHeader>
    );
};

export { ResultsHeader };
