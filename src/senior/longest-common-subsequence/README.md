# Longest Common Subsequence

The "Longest Common Subsequence" (LCS) task involves writing a function to find the longest subsequence common to two sequences.
A subsequence is a sequence derived by deleting some or no elements of the original sequence without changing the order of the remaining elements.

For example, given the sequences "ABCBDAB" and "BDCAB", the function should return "BCAB" as the longest common subsequence.

## Example

Input:

```bash
sequence1 = "ABCBDAB"
sequence2 = "BBCBAB"
```

Output:

```bash
BCB
```

<details>
    <summary>Hint: Steps</summary>

    1. Initialize a 2D array dp where dp[i][j] represents the length of the LCS of sequence1[0..i-1] and sequence2[0..j-1].
    2. If sequence1[i-1] == sequence2[j-1], then dp[i][j] = dp[i-1][j-1] + 1.
    3. Otherwise, dp[i][j] = max(dp[i-1][j], dp[i][j-1]).
    4. The value at dp[len(sequence1)][len(sequence2)] will be the length of the LCS.
    5. To find the LCS itself, backtrack from dp[len(sequence1)][len(sequence2)].
</details>

## Constraints

The input sequences may contain any characters.
The length of each sequence should not exceed the memory limits of the programming language.

## Implementation

You can find an implementation of the Longest Common Subsequence algorithm in [./src/senior/longest-common-subsequence/longest-common-subsequence.ts](./src/senior/longest-common-subsequence/longest-common-subsequence.ts)

### Execution

```bash
docker compose run --rm bun src/senior/longest-common-subsequence/index.ts --sequence1 ABCBDAB --sequence2 BBCBAB
```
