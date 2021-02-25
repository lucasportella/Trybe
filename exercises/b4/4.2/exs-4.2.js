let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let soma = 0;
for (contador = 0; contador < numbers.length; contador++) {
    soma += numbers[contador];
}
console.log(soma/numbers.length);

if (soma/numbers.length > 20) {
    console.log('valor maior que 20')
} else {
    console.log('valor menors que 20')
}