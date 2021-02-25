let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let lowestNumber = 999999999;
for (contador = 0; contador < numbers.length; contador++) {
    if (numbers[contador] < lowestNumber) {
        lowestNumber = numbers[contador];
    }
}
console.log(lowestNumber);