// const factorial = param => {
//     const n = param;
//     let nMinus = n;
//     let result = 1;
//     for (let i = 0; i < n; i += 1) {
//         result *= nMinus;
//         nMinus -= 1 
//     }
//     return result;
// }

// console.log(factorial());


const maiorPalavra = frase => {
    const array = frase.split(' ');
    let biggestWord = '';
    for (let i = 0; i < array.length; i += 1) {
        if (array[i].length > biggestWord.length) {
            biggestWord = array[i];
        }
    }
    return biggestWord;
}
console.log(maiorPalavra('Antonio foi no banheiro e não sabemos o que aconteceu'));