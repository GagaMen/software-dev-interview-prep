export function mergeSort(array: number[]): number[] {
    if (array.length === 1) {
        return array;
    }

    const middlePosition = Math.round(array.length / 2);
    const firstHalf = array.slice(0, middlePosition);
    const secondHalf = array.slice(middlePosition);

    const sortedFirstHalf = mergeSort(firstHalf);
    const sortedSecondHalf = mergeSort(secondHalf);

    return merge(sortedFirstHalf, sortedSecondHalf);
}

function merge(first: number[], second: number[]): number[] {
    const sortedArray = [];

    while (!(first.length === 0 && second.length === 0)) {
        const tmp1 = first.at(0);
        const tmp2 = second.at(0);

        // first array is empty
        if (tmp1 === undefined) {
            sortedArray.push(second.shift() as number);
            continue;
        }

        // second array is empty
        if (tmp2 === undefined) {
            sortedArray.push(first.shift() as number);
            continue;
        }

        if (tmp1 < tmp2) {
            sortedArray.push(first.shift() as number);
            continue;
        }

        sortedArray.push(second.shift() as number);
    }

    return sortedArray;
}
