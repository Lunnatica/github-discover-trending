import { Dispatch, SetStateAction } from 'react';
import { LanguageSelector } from '../LanguageSelector';

import {
    StyledResultsHeader,
    StyledTabs,
    StyledToggleButton,
} from './StyledResultsHeader';

interface ResultsHeaderProps {
    changeTab: () => void;
    isInStarredTab: boolean;
    languages: string[];
    selectedLanguage: string;
    setSelectedLanguage: Dispatch<SetStateAction<string>>;
}

const ResultsHeader: React.FC<ResultsHeaderProps> = ({
    changeTab,
    isInStarredTab,
    languages,
    selectedLanguage,
    setSelectedLanguage,
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
                <LanguageSelector
                    setSelectedLanguage={setSelectedLanguage}
                    selectedLanguage={selectedLanguage}
                    languages={languages}
                />
            </StyledTabs>
        </StyledResultsHeader>
    );
};

export { ResultsHeader };
