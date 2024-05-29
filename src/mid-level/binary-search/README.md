# Binary Search

The "Binary Search" task involves implementing the binary search algorithm to search for a target integer within a sorted array of integers.
Binary search is an efficient algorithm for finding the position of a target value within a sorted array.

## Example

Input:

```bash
arr = [2, 4, 6, 8, 10]
target = 6
```

Output:

```bash
2
```

## How Binary Search Works

Binary search works by repeatedly dividing the search interval in half. At each step, the algorithm compares the target value with the middle element of the array.
If the target value matches the middle element, its position is returned. If the target value is less than the middle element, the search continues in the lower half of the array.
If the target value is greater than the middle element, the search continues in the upper half of the array.
This process continues until the target value is found or the search interval is empty.

## Constraints

- The input array must be sorted in ascending order.
- The input array may contain duplicate elements.
- The target value must be an integer.

## Implementation

You can find an implementation of the binary search algorithm in [./src/mid-level/binary-search/binary-search.ts](./src/mid-level/binary-search/binary-search.ts)

### Execution

```bash
docker compose run --rm bun src/mid-level/binary-search/index.ts --haystack 2,4,6,8,10 --target 6
```

### Unit Tests

```bash
docker compose run --rm bun bun test src/mid-level/binary-search
```
