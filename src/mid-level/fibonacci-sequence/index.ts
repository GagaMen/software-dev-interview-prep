import { parseArgs } from 'node:util';
import { fibonacciSequence } from './fibonacci-sequence';

const { positionals } = parseArgs({
    allowPositionals: true,
    args: process.argv.slice(2),
});

const maxValue = Number.parseInt(positionals[0]);

if (maxValue < 0 || Number.isNaN(maxValue)) {
    throw new Error('Pass a positive number as argument');
}

const result = fibonacciSequence(maxValue);

console.log(result);
