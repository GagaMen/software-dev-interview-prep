# Find Maximum Number

The "Find Maximum Number" task involves writing a function that takes in an array of integers and returns the maximum number in the array.

## Example

Input:

```bash
[3, 7, 2, 9, 5]
```

Output:

```bash
9
```

## Constraints

- The input array will contain at least one integer.
- The integers in the array can be positive, negative, or zero.

## Implementation

You can find an implementation of the "Find Maximum Number" function in [./src/junior/find-maximum-number/find-maximum-number.ts](./src/junior/find-maximum-number/find-maximum-number.ts)

### Execution

```bash
docker compose run --rm bun src/junior/find-maximum-number/index.ts 3 7 2 9 5
```

To pass negative values you should prefix it with "--".

```bash
docker compose run --rm bun src/junior/find-maximum-number/index.ts 3 7 2 9 5 0 -- -1
```
