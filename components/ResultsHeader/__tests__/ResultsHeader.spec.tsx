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

    it('should change tabs when the active button is clicked', () => {
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

    it('should render a LanguageSelector', () => {
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

    describe('when the user is in the starred repos tab', () => {
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

    describe('when the user is in the All repos tab', () => {
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
