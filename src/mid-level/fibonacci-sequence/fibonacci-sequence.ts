export function fibonacciSequence(maxValue: number): number[] {
    const fibonacciSequence = [0, 1];

    while (true) {
        const lastElement = fibonacciSequence.at(-1) as number;
        const secondLastElement = fibonacciSequence.at(-2) as number;
        const nextValue = lastElement + secondLastElement;

        if (nextValue > maxValue) {
            break;
        }

        fibonacciSequence.push(nextValue);

        if (nextValue === maxValue) {
            break;
        }
    }

    return fibonacciSequence;
}
