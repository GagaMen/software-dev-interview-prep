import { describe, expect, test } from 'bun:test';
import { bubbleSort } from './bubble-sort';

describe('bubbleSort', () => {
    test('with unsorted list should return sorted list', () => {
        const input = [5, 2, 9, 1, 7];

        const actual = bubbleSort(input);

        expect(actual).toStrictEqual([1, 2, 5, 7, 9]);
    });
});
