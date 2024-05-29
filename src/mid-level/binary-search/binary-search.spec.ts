import { describe, expect, test } from 'bun:test';
import { binarySearch } from './binary-search';

describe('binarySearch', () => {
    test('with sorted list contains each number once should return correct index', () => {
        const input = [2, 4, 6, 8, 10];
        const needle = 6;

        const actual = binarySearch(input, needle);

        expect(actual).toBe(2);
    });

    test('with sorted list contains each number multiple times should return correct index', () => {
        const input = [2, 4, 4, 6, 8, 8, 10];
        const needle = 6;

        const actual = binarySearch(input, needle);

        expect(actual).toBe(3);
    });

    test('with sorted list contains target multiple times should return index of first match', () => {
        const input = [2, 4, 6, 6, 6, 8, 10];
        const needle = 6;

        const actual = binarySearch(input, needle);

        expect(actual).toBe(3);
    });
});
