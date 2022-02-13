import { render, screen } from '@testing-library/react';
import { ResultsLayout } from '../ResultsLayout';

describe('<ResultsLayout />', () => {
    const results = [
        {
            repoName: 'Name',
            description: 'description',
            stars: 'stars',
            url: 'url',
            isFav: false,
        },
        {
            repoName: 'Name2',
            description: 'description2',
            stars: 'stars2',
            url: 'url2',
            isFav: true,
        },
        {
            repoName: 'Name3',
            description: 'description3',
            stars: 'stars3',
            url: 'url3',
            isFav: false,
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
