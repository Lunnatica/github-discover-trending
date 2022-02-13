import { render, screen } from '@testing-library/react';
import { ResultCard } from '../ResultCard';

describe('<ResultCard />', () => {
    const result = {
        full_name: 'Name',
        description: 'description',
        stargazers_count: 'stars',
        html_url: 'url',
        isFav: false,
        language: 'Javascript',
    };

    const favResult = { ...result, isFav: true };

    it('should render nonFav results', () => {
        render(<ResultCard {...result} />);
        expect(screen.getByText(result.full_name));
        expect(screen.getByText('Not fav'));
    });

    it('should Fav when passed a fav result', () => {
        render(<ResultCard {...favResult} />);
        expect(screen.getByText(result.full_name));
        expect(screen.getByText('Fav'));
    });
});
