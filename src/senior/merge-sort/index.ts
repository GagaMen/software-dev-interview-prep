import { parseArgs } from 'node:util';
import { mergeSort } from './merge-sort';

const { values } = parseArgs({
    args: process.argv.slice(2),
    strict: true,
    options: {
        list: {
            type: 'string',
        },
    },
});

const inputArray = values.list?.split(',').map((value: string) => Number.parseInt(value)) ?? [];
console.log('Input: ', inputArray);

if (inputArray.length === 0) {
    throw new Error('Missing arguments - add argument "--list" as comma separated list of numbers');
}

const sortedArray = mergeSort(inputArray);

console.log('Result: ', sortedArray);
