export function findMaximumNumber(numbers: number[]): number | undefined {
    return numbers.reduce((accumulator: number, currentValue: number) => {
        if (currentValue > accumulator) {
            return currentValue;
        }

        return accumulator;
    });
}
