# Palindrome Check

The "Palindrome Check" task involves writing a function that takes in a string and returns true if the string is a palindrome (reads the same forwards and backwards), otherwise false.

## Example

Input:

```bash
radar
```

Output:

```bash
true
```

## Constraints

- The input string will consist of lowercase and/or uppercase alphabetic characters.
- The input string may contain spaces, punctuation, or other non-alphabetic characters.

## Implementation

You can find an implementation of the "Palindrome Check" function in [./src/junior/palindrome-check/palindrome-check.ts](./src/junior/palindrome-check/palindrome-check.ts)

### Execution

```bash
docker compose run --rm bun src/junior/palindrome-check/index.ts radar
```

To pass a sentence, it should be written in quotation marks.

```bash
docker compose run --rm bun src/junior/palindrome-check/index.ts "May a moody baby doom a yam"
```

### Unit Tests

```bash
docker compose run --rm bun bun test src/junior/palindrome-check
```
