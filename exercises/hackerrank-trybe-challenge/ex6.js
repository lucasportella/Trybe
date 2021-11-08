// fail
function nth_prime(n) {
    let lastPrime = 1;
    const dividers = [2,3,5,7]
    const primeNumbers = [];
    for (let i = 2; primeNumbers.length < n; i += 1) {
        const isPrime = !dividers.some((divider) => i % divider === 0)
        if (dividers.includes(i) || isPrime) {
            lastPrime = i;
            primeNumbers.push(lastPrime)
        }
    }
    return lastPrime
}
console.log(nth_prime(1001));



// success
function nth_prime2(n) {
    const primeNumbers = [];
    let counter = 0;
    for (let i = 2; primeNumbers.length < n; i += 1) {
        counter = 0;
        for (let j = 1; j < i; j += 1) {
            if (i %  j === 0) {
                counter += 1
            }
        }
        if (counter < 2) {
            primeNumbers.push(i)
        }
    }
    return primeNumbers[primeNumbers.length -1]
}
console.log(nth_prime2(1001));
