let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let oddCounter = 0;
for (contador = 0; contador < numbers.length; contador++) {
    if (numbers[contador] % 2 != 0) {
        oddCounter++;
    }
}
console.log(oddCounter);