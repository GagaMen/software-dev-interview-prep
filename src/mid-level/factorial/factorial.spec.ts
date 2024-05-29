import { describe, expect, test } from 'bun:test';
import { factorial } from './factorial';

describe('factorial', () => {
    test('with given number should return correct number', () => {
        const input = 5;

        const actual = factorial(input);

        expect(actual).toBe(120);
    });
});
