export function bubbleSort(array: number[]): number[] {
    const sortedArray = [...array];
    const length = sortedArray.length;

    for (let i = 0; i < length; i++) {
        for (let j = 0; j < length - i - 1; j++) {
            if (sortedArray[j] > sortedArray[j + 1]) {
                const lowerInteger = sortedArray[j + 1];
                const greatherInteger = sortedArray[j];

                sortedArray[j] = lowerInteger;
                sortedArray[j + 1] = greatherInteger;
            }
        }
    }

    return sortedArray;
}
