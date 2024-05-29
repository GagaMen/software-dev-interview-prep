# Prime Number Check

The "Prime Number Check" task involves writing a function that takes in a positive integer and returns true if it's a prime number, otherwise false.
A prime number is a natural number greater than 1 that has no positive divisors other than 1 and itself.

## Example

Input:

```bash
7
```

Output:

```bash
true
```

## Constraints

- The input number 'n' will be a positive integer greater than 1.

## Implementation

You can find an implementation of the "Prime Number Check" function in [./src/mid-level/prime-number-check/prime-number-check.ts](./src/mid-level/prime-number-check/prime-number-check.ts)

### Execution

```bash
docker compose run --rm bun src/mid-level/prime-number-check/index.ts 7
```

### Unit Tests

```bash
docker compose run --rm bun bun test src/mid-level/prime-number-check
```
