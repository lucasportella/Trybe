function Palindrome(chosenWord) {
    chosenWord = chosenWord.split('')
    let invertedWord = ''
    let number = chosenWord.length - 1
    for (let i = 0; i < chosenWord.length; i += 1) {
        invertedWord += chosenWord[number];
        number -= 1
    }
    if (invertedWord == word) {
        console.log(true);
    } else {
        console.log(false);
    }
}

let word = 'renner';
Palindrome(word);