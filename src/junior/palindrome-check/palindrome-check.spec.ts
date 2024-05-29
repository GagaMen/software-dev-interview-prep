import { describe, expect, test } from 'bun:test';
import { palindromeCheck } from './palindrome-check';

describe('palindromeCheck', () => {
    test('with string equals "radar" should return true', () => {
        const input = 'radar';

        const actual = palindromeCheck(input);

        expect(actual).toBe(true);
    });

    test('with string equals "May a moody baby doom a yam" should return true', () => {
        const input = 'May a moody baby doom a yam';

        const actual = palindromeCheck(input);

        expect(actual).toBe(true);
    });

    test('with string equals "test" should return false', () => {
        const input = 'test';

        const actual = palindromeCheck(input);

        expect(actual).toBe(false);
    });
});
