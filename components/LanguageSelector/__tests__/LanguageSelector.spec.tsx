import { fireEvent, render, screen } from '@testing-library/react';

import { LanguageSelector } from '../LanguageSelector';

describe('<LanguageSelector />', () => {
    const selectedLanguage = '';
    const setSelectedLanguage = jest.fn();
    const languages = ['Javascript', 'Python'];

    it('should show all the languages as options', () => {
        render(
            <LanguageSelector
                setSelectedLanguage={setSelectedLanguage}
                selectedLanguage={selectedLanguage}
                languages={languages}
            />
        );
        expect(screen.getByText('Filter by language'));
        languages.forEach((language) => {
            screen.getByRole('option', { name: language });
        });
    });

    it('should call setSelectedLanguage with the selected language', () => {
        render(
            <LanguageSelector
                setSelectedLanguage={setSelectedLanguage}
                selectedLanguage={selectedLanguage}
                languages={languages}
            />
        );
        fireEvent.change(screen.getByRole('combobox'), {
            target: { value: languages[0] },
        });
        expect(setSelectedLanguage).toHaveBeenCalledTimes(1);
        expect(setSelectedLanguage).toHaveBeenCalledWith(languages[0]);
    });

    it('should not render if no languages are passed', () => {
        render(
            <LanguageSelector
                setSelectedLanguage={setSelectedLanguage}
                selectedLanguage={selectedLanguage}
                languages={[]}
            />
        );
        expect(screen.queryByText('Filter by language')).toBeNull();
    });
});
