import { render, screen } from '@testing-library/react';

import { ResultCard } from '../ResultCard';

describe('<ResultCard />', () => {
    const result = {
        id: '1',
        full_name: 'Name',
        description: 'description',
        stargazers_count: 'stars',
        html_url: 'url',
        isFav: false,
        language: 'Javascript',
        created_at: 'created_at',
    };

    it('should render results', () => {
        render(<ResultCard {...result} />);
        expect(screen.getByText(result.full_name));
    });
});
