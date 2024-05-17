export function binarySearch(haystack: number[], needle: number): number | false {
    const middlePosition = Math.round(haystack.length / 2) - 1;
    const middleValue = haystack[middlePosition];

    if (middleValue === needle) {
        return middlePosition;
    }

    if (middleValue < needle) {
        const secondHalf = haystack.slice(middlePosition + 1);
        const positionResult = binarySearch(secondHalf, needle);
        if (positionResult === false) {
            return false;
        }

        return middlePosition + positionResult + 1;
    }

    const firstHalf = haystack.slice(0, middlePosition);
    const positionResult = binarySearch(firstHalf, needle);
    if (positionResult === false) {
        return false;
    }

    return positionResult;
}
