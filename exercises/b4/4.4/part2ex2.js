let numeros = [222,3,6,7,10,22];
console.log(biggestIndex(numeros));
function biggestIndex (numeros) {
    indiceMaior = 0;
    biggestIndex
    for (let indice in numeros) {
        if (numeros[indiceMaior] < numeros[indice]) {
            indiceMaior = indice;
        }
    }
    return indiceMaior;
}