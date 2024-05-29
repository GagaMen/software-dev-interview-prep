import { describe, expect, test } from 'bun:test';
import { uniqueElements } from './unique-elements';

describe('uniqueElements', () => {
    test('with sorted list contains number multiple times should return list contains each number once', () => {
        const input = [1, 2, 2, 3, 4, 4, 5];

        const actual = uniqueElements(input);

        expect(actual).toStrictEqual([1, 2, 3, 4, 5]);
    });

    test('with unsorted list contains number multiple times should return list contains each number once', () => {
        const input = [4, 2, 5, 1, 2, 2, 3, 4, 4, 5];

        const actual = uniqueElements(input);

        expect(actual).toStrictEqual([4, 2, 5, 1, 3]);
    });

    test('with list contains numbers and strings should return list contains each element once', () => {
        const input = [1, 2, 2, 3, 4, 4, 5, 'test 123', 5, 3, 'test 123'];

        const actual = uniqueElements(input);

        expect(actual).toStrictEqual([1, 2, 3, 4, 5, 'test 123']);
    });

    test('with empty list should return empty list', () => {
        const input: number[] = [];

        const actual = uniqueElements(input);

        expect(actual).toStrictEqual([]);
    });
});
