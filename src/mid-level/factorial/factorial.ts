export function factorial(number: number): number {
    let result = 0;

    for (let i = 0; i <= number; i++) {
        if (result === 0) {
            result = i;
        }

        result *= i;
    }

    return result;
}
