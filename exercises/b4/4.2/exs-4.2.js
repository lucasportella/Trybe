let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let soma = 0;
let maiorValor = 0;
for (contador = 0; contador < numbers.length; contador++) {
    if (numbers[contador] > maiorValor) {
        maiorValor = numbers[contador]
    }
}
console.log(maiorValor);