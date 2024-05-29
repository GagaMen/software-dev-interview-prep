import { describe, test, expect } from 'bun:test';
import { longestCommonSubsequence } from './longest-common-subsequence';

describe('longestCommonSubsequence', () => {
    test('with two given strings should return the longest common subsequence', () => {
        const sequence1 = 'ABCBDAB';
        const sequence2 = 'BBCBAB';

        const actual = longestCommonSubsequence(sequence1, sequence2);

        expect(actual).toBe('BCB');
    });
});
