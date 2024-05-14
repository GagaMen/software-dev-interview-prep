export function uniqueElements(array: unknown[]): unknown[] {
    const uniqueElements = new Set();

    for (const value of array) {
        uniqueElements.add(value);
    }

    return [...uniqueElements];
}
