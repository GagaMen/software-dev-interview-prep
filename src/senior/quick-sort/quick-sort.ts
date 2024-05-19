export function quickSort(array: number[]): number[] {
    if (array.length <= 1) {
        return array;
    }

    const pivotElement = array.pop() as number;
    const lowerNumbers = [];
    const greatherNumbers = [];

    for (const element of array) {
        if (pivotElement > element) {
            lowerNumbers.push(element);
            continue;
        }

        greatherNumbers.push(element);
    }

    const sortedLowerNumbers = quickSort(lowerNumbers);
    const sortedGreatherNumbers = quickSort(greatherNumbers);

    return [...sortedLowerNumbers, pivotElement, ...sortedGreatherNumbers];
}
