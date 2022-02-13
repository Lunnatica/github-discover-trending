import { fireEvent, render, screen } from '@testing-library/react';
import { ResultsHeader } from '../ResultsHeader';

describe('<ResultsHeader />', () => {
    const changeTab = jest.fn();

    it('should execute the changeTab function when the button is clicked', () => {
        render(<ResultsHeader isInStarredTab={false} changeTab={changeTab} />);
        fireEvent.click(screen.getByText('Show starred repos'));
        expect(changeTab).toHaveBeenCalledTimes(1);
    });

    describe('when isInStarredTab is true', () => {
        it('should render the correct buttons text', () => {
            render(
                <ResultsHeader isInStarredTab={true} changeTab={changeTab} />
            );
            expect(screen.getByText('Show all repos'));
            expect(screen.getByText('Starred repos'));
        });
    });

    describe('when isInStarredTab is false', () => {
        it('should render the correct buttons text', () => {
            render(
                <ResultsHeader isInStarredTab={false} changeTab={changeTab} />
            );
            expect(screen.getByText('All repos'));
            expect(screen.getByText('Show starred repos'));
        });
    });
});
