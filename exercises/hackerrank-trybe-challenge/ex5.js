function even_fibonacci_numbers(roof) {
    let sum = 0;
    let last = 2;
    let penult = 1;
    const array = [penult, last];

    while ((last + penult) < roof) {
        sum = last + penult;
        penult = last;
        last = sum;
        array.push(sum)
    }

    const reducer = (accumulator, currentValue) => currentValue % 2 == 0 ? accumulator + currentValue : accumulator

    return array.reduce(reducer, 0)
}
console.log(even_fibonacci_numbers(100));