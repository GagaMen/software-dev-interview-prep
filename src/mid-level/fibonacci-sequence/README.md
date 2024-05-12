# Fibonacci Sequence

The "Fibonacci Sequence" task involves writing a function to generate the Fibonacci sequence up to a given number 'n'.
The Fibonacci sequence is a series of numbers where each number is the sum of the two preceding ones, usually starting with 0 and 1.

## Example

Input:

```bash
n = 10
```

Output:

```bash
[0, 1, 1, 2, 3, 5, 8]
```

## Constraints

- The input number 'n' will be a non-negative integer.
- The Fibonacci sequence should start with 0 and 1.

## Implementation

You can find an implementation of the "Fibonacci Sequence" function in [./src/mid-level/fibonacci-sequence/fibonacci-sequence.ts](./src/mid-level/fibonacci-sequence/fibonacci-sequence.ts)

### Execution

```bash
docker compose run --rm bun src/mid-level/fibonacci-sequence/index.ts 10
```
