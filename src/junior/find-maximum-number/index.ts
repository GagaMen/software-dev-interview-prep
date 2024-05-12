import { parseArgs } from 'node:util';
import { findMaximumNumber } from './find-maximum-number';

const { positionals } = parseArgs({
    allowPositionals: true,
    args: process.argv.slice(2),
});

if (positionals.length === 0) {
    throw new Error('Missing arguments - add a list of numbers separated by an space');
}

const numbers = positionals.map((value: string) => Number.parseInt(value));

const maximumNumber = findMaximumNumber(numbers);

console.log(maximumNumber);
