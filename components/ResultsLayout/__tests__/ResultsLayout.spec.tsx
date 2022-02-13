import { render, screen } from '@testing-library/react';
import { ResultsLayout } from '../ResultsLayout';

describe('<ResultsLayout />', () => {
    const results = [
        {
            full_name: 'Name',
            description: 'description',
            stargazers_count: 'stargazers_count',
            html_url: 'html_url',
            isFav: false,
            language: 'Javascript',
        },
        {
            full_name: 'Name2',
            description: 'description2',
            stargazers_count: 'stargazers_count2',
            html_url: 'html_url2',
            isFav: true,
            language: 'Python',
        },
        {
            full_name: 'Name3',
            description: 'description3',
            stargazers_count: 'stargazers_count3',
            html_url: 'html_url3',
            isFav: false,
            language: 'Javascript',
        },
    ];

    it('should show an error message if there is an error', () => {
        render(<ResultsLayout errorCode={404} results={results} />);
        expect(
            screen.getByText(
                /There was a problem when retrieving results from Github. Please try again later./
            )
        );
    });

    it('should show a no results message when results is an empty array', () => {
        render(<ResultsLayout results={[]} />);
        expect(screen.getByText(`Sorry, there are no results.`));
    });

    it('should show a no results message when results is undefined', () => {
        render(<ResultsLayout results={undefined} />);
        expect(screen.getByText(`Sorry, there are no results.`));
    });

    it('should show all the results by default', () => {
        render(<ResultsLayout results={results} />);
        expect(screen.getAllByRole('article').length).toBe(3);
    });
});
