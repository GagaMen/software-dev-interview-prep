# Sorting Algorithm: Bubble Sort

The "Sorting Algorithm" task involves implementing the Bubble Sort algorithm to sort an array of integers in ascending order.
Bubble Sort is a simple comparison-based sorting algorithm.

## Example

Input:

```bash
[5, 2, 9, 1, 7]
```

Output:

```bash
[1, 2, 5, 7, 9]
```

## How Bubble Sort Works

Bubble Sort works by repeatedly stepping through the list to be sorted, comparing each pair of adjacent items and swapping them if they are in the wrong order.
The pass through the list is repeated until the list is sorted. The algorithm gets its name because smaller elements "bubble" to the top of the list.

<details>
    <summary>Hint: Steps</summary>

    1. Compare the first two elements. If the first is greater than the second, swap them.
    2. Move to the next pair of elements, and repeat the comparison and swap if needed.
    3. Continue this process for each pair of adjacent elements to the end of the array. At the end of the first pass, the largest element will have bubbled to the end of the array.
    4. Repeat the entire process for the remaining elements (all elements except the last one which is now sorted).
    5. Continue until no swaps are needed, indicating that the list is sorted.
</details>

## Constraints

- The input array may contain duplicate elements.

## Implementation

You can find an implementation of the Bubble Sort algorithm in [./src/senior/bubble-sort/bubble-sort.ts](./src/senior/bubble-sort/bubble-sort.ts)

### Execution

```bash
docker compose run --rm bun src/senior/bubble-sort/index.ts --list 5,2,9,1,7
```

### Unit Tests

```bash
docker compose run --rm bun bun test src/senior/bubble-sort
```
