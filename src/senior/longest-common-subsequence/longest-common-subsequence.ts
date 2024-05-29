export function longestCommonSubsequence(sequence1: string, sequence2: string): string {
    const commonSequences: string[] = [];
    const charactersOfSequence1 = sequence1.split('');
    const charactersOfSequence2 = sequence2.split('');

    for (let i = 0; i < charactersOfSequence1.length; i++) {
        let subsequence = '';
        for (let j = 0; j < charactersOfSequence2.length; j++) {
            if (charactersOfSequence1[i] !== charactersOfSequence2[j]) {
                continue;
            }

            subsequence += charactersOfSequence2[j];
            for (let k = 1; k < charactersOfSequence2.length - j; k++) {
                if (charactersOfSequence1[i + k] !== charactersOfSequence2[j + k]) {
                    break;
                }

                subsequence += charactersOfSequence2[j + k];
            }

            commonSequences.push(subsequence);
            subsequence = '';
        }
    }

    return commonSequences.reduce((longestCommonSubsequence, currentValue) => {
        if (longestCommonSubsequence.length < currentValue.length) {
            return currentValue;
        }

        return longestCommonSubsequence;
    }, '');
}
