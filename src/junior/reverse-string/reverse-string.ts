export function reverseString(str: string): string {
    const characters = str.split('');
    const reversedCharacters = [];

    for (let i = characters.length - 1; i >= 0; i--) {
        reversedCharacters.push(characters[i]);
    }

    return reversedCharacters.join('');
}
