# Count Vowels

The "Count Vowels" task involves writing a function that takes in a string and returns the count of vowels (a, e, i, o, u) in the string.

## Example

Input:

```bash
hello
```

Output:

```bash
2
```

## Constraints

- The input string will consist of lowercase and/or uppercase alphabetic characters.
- The input string may contain spaces, punctuation, or other non-alphabetic characters.

## Implementation

You can find an implementation of the "Count Vowels" function in [./src/junior/count-vowels/count-vowels.ts](./src/junior/count-vowels/count-vowels.ts)

### Execution

```bash
docker compose run --rm bun src/junior/count-vowels/index.ts hello
```

To pass a sentence, it should be written in quotation marks.

```bash
docker compose run --rm bun src/junior/count-vowels/index.ts "Hello, I'm Felix Dimmel."
```
