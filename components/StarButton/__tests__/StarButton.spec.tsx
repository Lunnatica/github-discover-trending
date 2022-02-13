import '@testing-library/jest-dom/extend-expect';

import { render, screen } from '@testing-library/react';

import { useStarsContext } from '../../../contexts/StarsContext';
import { StarButton } from '../StarButton';

jest.mock('../../../contexts/StarsContext');

describe('StarButton', () => {
    const starProductMock = jest.fn();
    const unstarProductMock = jest.fn();

    beforeEach(() => {
        (useStarsContext as jest.Mock).mockImplementation(() => ({
            starredRepos: ['2'],
            starProduct: starProductMock,
            unstarProduct: unstarProductMock,
        }));
    });

    afterEach(jest.clearAllMocks);

    describe('given a non-Starred repo', () => {
        beforeEach(() => {
            const instance = <StarButton id={1} />;
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
            const instance = <StarButton id={2} />;
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
