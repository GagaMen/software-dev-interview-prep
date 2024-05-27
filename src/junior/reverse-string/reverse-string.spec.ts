import { describe, test, expect } from 'bun:test';
import { reverseString } from './reverse-string';

describe('reverseString', () => {
    test('with string equals "hello" should return "olleh"', () => {
        const input = 'hello';

        const actual = reverseString(input);

        expect(actual).toBe('olleh');
    });

    test('with string equals "This is a sentence!" should return "!ecnetnes a si sihT"', () => {
        const input = 'This is a sentence!';

        const actual = reverseString(input);

        expect(actual).toBe('!ecnetnes a si sihT');
    });
});
