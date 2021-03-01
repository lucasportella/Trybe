let word = 'anything';
function Palindrome(chosenWord) {
    chosenWord = chosenWord.split('')
    let invertedWord = ''
    let number = chosenWord.length - 1
    for (let i in chosenWord[number]) {
        invertedWord += chosenWord[i];
        number -= 1
        console.log(invertedWord)
    }
}
Palindrome(word);