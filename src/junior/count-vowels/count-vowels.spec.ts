import { describe, expect, test } from 'bun:test';
import { countVowels } from './count-vowels';

describe('countVowels', () => {
    test('with string equals "hello" should return 2', () => {
        const input = 'hello';

        const actual = countVowels(input);

        expect(actual).toBe(2);
    });

    test('with string equals "Rhythm" should return 0', () => {
        const input = 'Rhythm';

        const actual = countVowels(input);

        expect(actual).toBe(0);
    });

    test('with string equals "HELLO" should return 2', () => {
        const input = 'hello';

        const actual = countVowels(input);

        expect(actual).toBe(2);
    });
});
