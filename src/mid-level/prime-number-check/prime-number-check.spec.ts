import { describe, expect, test } from 'bun:test';
import { primeNumberCheck } from './prime-number-check';

describe('primeNumberCheck', () => {
    test('with given prime number should return true', () => {
        const input = 7;

        const actual = primeNumberCheck(input);

        expect(actual).toBe(true);
    });

    test('with given high prime number should return true', () => {
        const input = 9973;

        const actual = primeNumberCheck(input);

        expect(actual).toBe(true);
    });

    test('with given non prime number should return true', () => {
        const input = 6;

        const actual = primeNumberCheck(input);

        expect(actual).toBe(false);
    });
});
