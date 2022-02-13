import { render, screen } from '@testing-library/react';
import { ResultCard } from '../ResultCard';

describe('<ResultCard />', () => {
    const result = {
        repoName: 'Name',
        description: 'description',
        stars: 'stars',
        url: 'url',
        isFav: false,
    };

    const favResult = { ...result, isFav: true };

    it('should render nonFav results', () => {
        render(<ResultCard {...result} />);
        expect(screen.getByText(result.repoName));
        expect(screen.getByText('Not fav'));
    });

    it('should Fav when passed a fav result', () => {
        render(<ResultCard {...favResult} />);
        expect(screen.getByText(result.repoName));
        expect(screen.getByText('Fav'));
    });
});
