const factorial = param => {
    const n = param;
    let nMinus = n;
    let result = 1;
    for (let i = 0; i < n; i += 1) {
        result *= nMinus;
        nMinus -= 1 
    }
    return result;
}

console.log(factorial());