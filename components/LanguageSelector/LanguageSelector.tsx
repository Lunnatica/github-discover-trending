import { Dispatch, SetStateAction } from 'react';

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
    ) : null;
};

export { LanguageSelector };
