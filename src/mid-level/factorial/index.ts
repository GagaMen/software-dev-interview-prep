import { parseArgs } from 'node:util';
import { factorial } from './factorial';

const { positionals } = parseArgs({
    allowPositionals: true,
    args: process.argv.slice(2),
});

const number = Number.parseInt(positionals[0]);

if (number < 0 || Number.isNaN(number)) {
    throw new Error('Pass a positive number as argument');
}

const result = factorial(number);

console.log(result);
