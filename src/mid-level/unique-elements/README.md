# Unique Elements

The "Unique Elements" task involves writing a function that takes in an array and returns a new array containing only the unique elements of the original array. A unique element is one that appears only once in the array.

## Example

Input:

```bash
[1, 2, 2, 3, 4, 4, 5]
```

Output:

```bash
[1, 2, 3, 4, 5]
```

## Constraints

- The input array may contain duplicate elements.
- The input array may contain elements of any data type.

## Implementation

You can find an implementation of the "Unique Elements" function in [./src/mid-level/unique-elements/unique-elements.ts](./src/mid-level/unique-elements/unique-elements.ts)

### Execution

```bash
docker compose run --rm bun src/mid-level/unique-elements/index.ts 1 2 2 3 4 4 5
```

To pass a word group, it should be written in quotation marks.

```bash
docker compose run --rm bun src/mid-level/unique-elements/index.ts 1 2 2 3 4 4 5 "test 123" "test 123"
```
