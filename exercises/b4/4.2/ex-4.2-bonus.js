let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
for (let c1 = 0; c1 < (numbers.length - 1); c1+=0) {
    for (let c2 = 1; c2 > c1; c2 += 1 ) {
        if (c1 >= (numbers.length - 1)) {
            numbers[numbers.length - 1] = numbers[numbers.length - 1] * 2
            c1 = 50
            c2 = 20
        } else {
        numbers[c1] = numbers[c1] * numbers[c2];
        c1 += 1
        console.log(numbers)
        }
    }
}
console.log(numbers) 