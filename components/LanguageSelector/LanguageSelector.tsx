import { Dispatch, SetStateAction } from 'react';

import { StyledLanguageSelector } from './StyledLanguageSelector';

interface LanguageSelectorProps {
    languages: string[];
    selectedLanguage: string;
    setSelectedLanguage: Dispatch<SetStateAction<string>>;
}

const LanguageSelector: React.FC<LanguageSelectorProps> = ({
    languages,
    selectedLanguage,
    setSelectedLanguage,
}) => {
    return languages.length ? (
        <StyledLanguageSelector
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
        </StyledLanguageSelector>
    ) : null;
};

export { LanguageSelector };
