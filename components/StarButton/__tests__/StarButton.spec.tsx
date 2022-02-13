import { render, screen } from '@testing-library/react';
import { StarButton } from '../StarButton';
import '@testing-library/jest-dom/extend-expect';

describe('StarButton', () => {
    afterEach(jest.clearAllMocks);

    describe('given a non-Starred repo', () => {
        beforeEach(() => {
            const instance = <StarButton isFav={false} />;
            render(instance);
        });

        it('renders the default icon', () => {
            expect(screen.getByTestId('default'));
        });

        it('should have the correct aria-label', () => {
            expect(screen.getByTestId('default')).toHaveAttribute(
                'aria-label',
                'Star'
            );
        });
    });

    describe('given a Starred repo', () => {
        beforeEach(() => {
            const instance = <StarButton isFav={true} />;
            render(instance);
        });

        it('renders the Starred icon', () => {
            expect(screen.getByTestId('Starred'));
        });

        it('should have the correct aria-label', () => {
            expect(screen.getByTestId('Starred')).toHaveAttribute(
                'aria-label',
                'Unstar'
            );
        });
    });
});
