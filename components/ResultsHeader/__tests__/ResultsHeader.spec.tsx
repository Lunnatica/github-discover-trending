import { fireEvent, render, screen } from '@testing-library/react';
import { ResultsHeader } from '../ResultsHeader';

jest.mock('../../LanguageSelector', () => ({
    LanguageSelector: () => {
        return <div data-testid="LanguageSelector">LanguageSelector</div>;
    },
}));

describe('<ResultsHeader />', () => {
    const changeTab = jest.fn();
    const selectedLanguage = '';
    const setSelectedLanguage = jest.fn();
    const languages = ['Javascript', 'Python'];

    it('should execute the changeTab function when the button is clicked', () => {
        render(
            <ResultsHeader
                isInStarredTab={false}
                changeTab={changeTab}
                setSelectedLanguage={setSelectedLanguage}
                selectedLanguage={selectedLanguage}
                languages={languages}
            />
        );
        fireEvent.click(screen.getByText('Show starred repos'));
        expect(changeTab).toHaveBeenCalledTimes(1);
    });

    describe('when no languages are passed', () => {
        it('should not show a LanguageSelector', () => {
            render(
                <ResultsHeader
                    isInStarredTab={false}
                    changeTab={changeTab}
                    setSelectedLanguage={setSelectedLanguage}
                    selectedLanguage={selectedLanguage}
                    languages={[]}
                />
            );
            expect(screen.queryByTestId('LanguageSelector')).toBeNull();
        });
    });

    describe('when an array of languages is passed', () => {
        it('should show a LanguageSelector', () => {
            render(
                <ResultsHeader
                    isInStarredTab={false}
                    changeTab={changeTab}
                    setSelectedLanguage={setSelectedLanguage}
                    selectedLanguage={selectedLanguage}
                    languages={languages}
                />
            );
            expect(screen.getByTestId('LanguageSelector'));
        });
    });

    describe('when isInStarredTab is true', () => {
        it('should render the correct buttons text', () => {
            render(
                <ResultsHeader
                    isInStarredTab={true}
                    changeTab={changeTab}
                    setSelectedLanguage={setSelectedLanguage}
                    selectedLanguage={selectedLanguage}
                    languages={languages}
                />
            );
            expect(screen.getByText('Show all repos'));
            expect(screen.getByText('Starred repos'));
        });
    });

    describe('when isInStarredTab is false', () => {
        it('should render the correct buttons text', () => {
            render(
                <ResultsHeader
                    isInStarredTab={false}
                    changeTab={changeTab}
                    setSelectedLanguage={setSelectedLanguage}
                    selectedLanguage={selectedLanguage}
                    languages={languages}
                />
            );
            expect(screen.getByText('All repos'));
            expect(screen.getByText('Show starred repos'));
        });
    });
});
