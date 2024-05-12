import { parseArgs } from 'node:util';
import { countVowels } from './count-vowels';

const { positionals } = parseArgs({
    allowPositionals: true,
    args: process.argv.slice(2),
});

const vowelsCount = countVowels(positionals[0]);

console.log(vowelsCount);
