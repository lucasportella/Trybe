let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
for (let c1 = 0; c1 < (numbers.length - 1); c1+=0) {
    if (c1 == (numbers.length - 1)) {
        numbers[length] = numbers[length] * 2
        c1 = 10
        c2 = 10
    }
    for (let c2 = 1; c2 > c1; c2 += 1 ) {
        numbers[c1] = numbers[c1] * numbers[c2];
        c1 += 1
        console.log(numbers) 
    }
}
console.log(numbers) 