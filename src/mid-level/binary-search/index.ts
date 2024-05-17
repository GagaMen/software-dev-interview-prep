import { parseArgs } from 'node:util';
import { binarySearch } from './binary-search';

const { values } = parseArgs({
    args: process.argv.slice(2),
    strict: true,
    options: {
        haystack: {
            type: 'string',
        },
        target: {
            type: 'string',
        },
    },
});

const haystack =
    values.haystack
        ?.split(',')
        .map((value: string) => Number.parseInt(value))
        .sort((a, b) => a - b) ?? [];

console.log('Input: ', haystack);

if (haystack.length === 0 || !values.target) {
    throw new Error(
        'Missing arguments - add argument "--haystack" as comma separated list of numbers and "--target" as number',
    );
}

const target = Number.parseInt(values.target);
console.log('Target: ', target);

const position = binarySearch(haystack, target);

console.log('Position: ', position);
