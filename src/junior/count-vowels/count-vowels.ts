export function countVowels(text: string): number {
    const characters = text.split('');

    return characters.reduce((accumulator: number, character: string) => {
        if (['a', 'e', 'i', 'o', 'u'].includes(character.toLowerCase())) {
            return accumulator + 1;
        }

        return accumulator;
    }, 0);
}
