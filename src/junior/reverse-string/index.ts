import { parseArgs } from 'node:util';
import { reverseString } from './reverse-string';

const { positionals } = parseArgs({
    allowPositionals: true,
    args: process.argv.slice(2),
});

const reversedString = reverseString(positionals[0]);

console.log(reversedString);
