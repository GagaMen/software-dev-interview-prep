import { describe, test, expect } from 'bun:test';
import { fibonacciSequence } from './fibonacci-sequence';

describe('fibonacciSequence', () => {
    test('with given number should return correct fibonacci sequence', () => {
        const input = 10;

        const actual = fibonacciSequence(input);

        expect(actual).toStrictEqual([0, 1, 1, 2, 3, 5, 8]);
    });
});
