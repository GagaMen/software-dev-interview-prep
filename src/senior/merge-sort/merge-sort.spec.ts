import { describe, test, expect } from 'bun:test';
import { mergeSort } from './merge-sort';

describe('mergeSort', () => {
    test('with unsorted list should return sorted list', () => {
        const input = [5, 2, 9, 1, 7];

        const actual = mergeSort(input);

        expect(actual).toStrictEqual([1, 2, 5, 7, 9]);
    });
});
