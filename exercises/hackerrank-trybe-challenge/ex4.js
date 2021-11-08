function multiples_of_3_or_5(roof) {
    let sum = 0;
    for (let i = 0; i < roof; i += 1) {
        if (i % 3 == 0 || i % 5 == 0) {
            sum += i;
        }
    }
    return sum
}
console.log(multiples_of_3_or_5(10));