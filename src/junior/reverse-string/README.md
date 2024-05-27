# Reverse String

The "Reverse String" task involves writing a function that takes in a string and returns the reverse of that string.

## Example

Input:

```bash
hello
```

Output:

```bash
olleh
```

## Constraints

- The input string will consist of lowercase and/or uppercase alphabetic characters.
- It is not permitted to use any built-in reverse functions.

## Implementation

You can find an implementation of the "Reverse String" function in [./src/junior/reverse-string/reverse-string.ts](./src/junior/reverse-string/reverse-string.ts)

### Execution

```bash
docker compose run --rm bun src/junior/reverse-string/index.ts hello
```

### Unit Tests

```bash
docker compose run --rm bun bun test src/junior/reverse-string
```
