import { parseArgs } from 'node:util';
import { primeNumberCheck } from './prime-number-check';

const { positionals } = parseArgs({
    allowPositionals: true,
    args: process.argv.slice(2),
});

const number = Number.parseInt(positionals[0]);

if (number < 1 || Number.isNaN(number)) {
    throw new Error('Pass a positive number greather than 1 as argument');
}

const result = primeNumberCheck(number);

console.log(result);
