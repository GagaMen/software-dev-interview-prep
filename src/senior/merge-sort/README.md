# Sorting Algorithm: Merge Sort

The "Sorting Algorithm" task involves implementing the Merge Sort algorithm to sort an array of integers in ascending order.
Merge Sort is an efficient, stable, comparison-based, and divide-and-conquer sorting algorithm.

## Example

Input:

```bash
[5, 2, 9, 1, 7]
```

Output:

```bash
[1, 2, 5, 7, 9]
```

## How Merge Sort Works

Merge Sort works by dividing the unsorted list into 'n' sublists, each containing one element (a list of one element is considered sorted).
Then, repeatedly merge sublists to produce new sorted sublists until there is only one sublist remaining.

<details>
    <summary>Hint: Steps</summary>

    1. Divide: Find the midpoint of the array and divide it into two halves.
    2. Conquer: Recursively sort the two halves.
    3. Combine: Merge the two sorted halves into a single sorted array.
</details>

## Constraints

- The input array may contain duplicate elements.

## Implementation

You can find an implementation of the Merge Sort algorithm in [./src/senior/merge-sort/merge-sort.ts](./src/senior/merge-sort/merge-sort.ts)

### Execution

```bash
docker compose run --rm bun src/senior/merge-sort/index.ts --list 5,2,9,1,7
```

### Unit Tests

```bash
docker compose run --rm bun bun test src/senior/merge-sort
```
