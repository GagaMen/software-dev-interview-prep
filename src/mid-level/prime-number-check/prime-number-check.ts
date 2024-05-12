export function primeNumberCheck(number: number): boolean {
    for (let i = 2; i < number; i++) {
        const division = number / i;

        if (Number.isInteger(division)) {
            return false;
        }
    }

    return true;
}
