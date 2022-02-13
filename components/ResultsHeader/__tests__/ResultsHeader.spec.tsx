import { fireEvent, render, screen } from '@testing-library/react';
import { ResultsHeader } from '../ResultsHeader';

describe('<ResultsHeader />', () => {
    const changeTab = jest.fn();

    it('should execute the changeTab function when the button is clicked', () => {
        render(<ResultsHeader isInStarredTab={false} changeTab={changeTab} />);
        fireEvent.click(screen.getByText('Show starred items'));
        expect(changeTab).toHaveBeenCalledTimes(1);
    });

    describe('when isInStarredTab is true', () => {
        it('should render the correct button text', () => {
            render(
                <ResultsHeader isInStarredTab={true} changeTab={changeTab} />
            );
            expect(screen.getByText('Hide starred items'));
        });
    });

    describe('when isInStarredTab is false', () => {
        it('should render the correct button text', () => {
            render(
                <ResultsHeader isInStarredTab={false} changeTab={changeTab} />
            );
            expect(screen.getByText('Show starred items'));
        });
    });
});
