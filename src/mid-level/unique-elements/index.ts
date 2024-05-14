import { parseArgs } from 'node:util';
import { uniqueElements } from './unique-elements';

const { positionals } = parseArgs({
    allowPositionals: true,
    args: process.argv.slice(2),
});

if (positionals.length === 0) {
    throw new Error('Missing arguments - add a list of values separated by an space');
}

const elements = uniqueElements(positionals);

console.log(elements);
