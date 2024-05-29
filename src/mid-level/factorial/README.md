# Factorial

The "Factorial" task involves writing a function that takes in a positive integer and returns the factorial of that number.
The factorial of a non-negative integer 'n' is the product of all positive integers less than or equal to 'n'.

## Example

Input:

```bash
5
```

```bash
120
```

## Constraints

- The input number 'n' will be a positive integer.
- The result should fit within the memory limits of the programming language.

## Implementation

You can find an implementation of the "Factorial" function in [./src/mid-level/factorial/factorial.ts](./src/mid-level/factorial/factorial.ts)

### Execution

```bash
docker compose run --rm bun src/mid-level/factorial/index.ts 10
```

### Unit Tests

```bash
docker compose run --rm bun bun test src/mid-level/factorial
```
