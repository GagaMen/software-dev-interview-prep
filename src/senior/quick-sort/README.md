# Sorting Algorithm: Quick Sort

The "Sorting Algorithm" task involves implementing the Quick Sort algorithm to sort an array of integers in ascending order.
Quick Sort is an efficient, comparison-based, and divide-and-conquer sorting algorithm.

## Example

Input:

```bash
[5, 2, 9, 1, 7]
```

Output:

```bash
[1, 2, 5, 7, 9]
```

## How Quick Sort Works

Quick Sort works by selecting a 'pivot' element from the array and partitioning the other elements into two sub-arrays,
according to whether they are less than or greater than the pivot. The sub-arrays are then sorted recursively.

<details>
    <summary>Hint: Steps</summary>

    1. Choose a Pivot: Pick an element as a pivot from the array.
    2. Partitioning: Reorder the array so that all elements with values less than the pivot come before the pivot, while all elements with values greater than the pivot come after it (equal values can go either way).
    3. Recursively Apply: Recursively apply the above steps to the sub-arrays of elements with smaller and larger values.
</details>

## Constraints

- The input array may contain duplicate elements.

## Implementation

You can find an implementation of the Quick Sort algorithm in [./src/senior/quick-sort/quick-sort.ts](./src/senior/quick-sort/quick-sort.ts)

### Execution

```bash
docker compose run --rm bun src/senior/quick-sort/index.ts --list 5,2,9,1,7
```
