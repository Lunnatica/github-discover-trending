import { Dispatch, SetStateAction } from 'react';

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
    const LanguageSelector: React.FC = () => {
        return (
            <select
                value={selectedLanguage}
                onChange={(e) => setSelectedLanguage(e.target.value)}
            >
                <option value="" disabled hidden>
                    Filter by language
                </option>
                {languages.map((language) => (
                    <option key={language} value={language}>
                        {language}
                    </option>
                ))}
            </select>
        );
    };

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
            {languages.length ? <LanguageSelector /> : null}
        </StyledResultsHeader>
    );
};

export { ResultsHeader };
