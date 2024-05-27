import { describe, test, expect } from 'bun:test';
import { findMaximumNumber } from './find-maximum-number';

describe('findMaximumNumber', () => {
    test('with unsorted array of numbers should return correct number', () => {
        const input = [3, 7, 2, 9, 5];

        const actual = findMaximumNumber(input);

        expect(actual).toBe(9);
    });

    test('with sorted array of numbers should return correct number', () => {
        const input = [2, 3, 5, 7, 9];

        const actual = findMaximumNumber(input);

        expect(actual).toBe(9);
    });

    test('with array of numbers contains numbers multiple times should return correct number', () => {
        const input = [2, 3, 3, 5, 9, 7, 2, 9];

        const actual = findMaximumNumber(input);

        expect(actual).toBe(9);
    });

    test('with array of numbers contains negativ numbers should return correct number', () => {
        const input = [-2, -3, 3, 5, 9];

        const actual = findMaximumNumber(input);

        expect(actual).toBe(9);
    });
});
