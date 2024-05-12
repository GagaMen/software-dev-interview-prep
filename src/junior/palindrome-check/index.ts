import { parseArgs } from 'node:util';
import { palindromeCheck } from './palindrome-check';

const { positionals } = parseArgs({
    allowPositionals: true,
    args: process.argv.slice(2),
});

const isPalindrome = palindromeCheck(positionals[0]);

console.log(isPalindrome);
