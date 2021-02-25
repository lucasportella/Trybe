let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
for (let c1 = 1; c1 < numbers.length; c1++) {
    for (let c2 = 0; c2 < c1; c2++) {
        if (numbers[c1] > numbers[c2]) {
            let position = numbers[c1];
               
            numbers[c1] = numbers[c2];
            numbers[c2] = position;
        }
    }
}
console.log(numbers)