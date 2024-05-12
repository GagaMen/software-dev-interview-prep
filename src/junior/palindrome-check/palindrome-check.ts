export function palindromeCheck(text: string): boolean {
    const cleanedText = text.replace(/\s/g, '').toLowerCase();
    const reversedText = cleanedText.split('').reverse().join('');

    return cleanedText === reversedText;
}
