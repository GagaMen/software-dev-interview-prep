import { describe, expect, test } from 'bun:test';
import { quickSort } from './quick-sort';

describe('quickSort', () => {
    test('with unsorted list should return sorted list', () => {
        const input = [5, 2, 9, 1, 7];

        const actual = quickSort(input);

        expect(actual).toStrictEqual([1, 2, 5, 7, 9]);
    });
});
