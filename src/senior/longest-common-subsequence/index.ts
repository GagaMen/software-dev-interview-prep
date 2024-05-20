import { parseArgs } from 'node:util';
import { longestCommonSubsequence } from './longest-common-sequence';

const { values } = parseArgs({
    args: process.argv.slice(2),
    strict: true,
    options: {
        sequence1: {
            type: 'string',
        },
        sequence2: {
            type: 'string',
        },
    },
});

console.log('Sequence 1: ', values.sequence1);
console.log('Sequence 2: ', values.sequence2);

if (
    values.sequence1 === undefined ||
    values.sequence1 === '' ||
    values.sequence2 === undefined ||
    values.sequence2 === ''
) {
    throw new Error('Missing arguments - add arguments "--sequence1" and "--sequence2"');
}

const result = longestCommonSubsequence(values.sequence1, values.sequence2);

console.log('Result: ', result);
