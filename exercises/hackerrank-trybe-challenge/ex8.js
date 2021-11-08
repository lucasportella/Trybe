// 10 1 3 5 4 0 0 7 0 0 6
// pode retornar um array, ele vai ler a primeira posição

// 1 6 5 6 0

function caixa(values) {
    const array = values;
    // array.shift()
    // o teste já remove o primeiro elemento do array automaticamente, não precisa do shift()
    let condition = true;
    while (condition) {
        for (let i = 0; i < array.length; i += 1) {
            if (array[i] === 0 && i !== array.length - 1) {
                array.splice(i - 1, 2);
                break;
            }
            if (i === (array.length - 1)) {
                if (array[i] === 0) {
                    array.splice(i - 1, 2);
                }
                condition = false;
                break;
            }
        }
    }

    const reducer = (prev, curr) => prev + curr

    return array.reduce(reducer);
}
console.log(caixa([10, 1, 3, 5, 4, 0, 0, 7, 0, 0, 6]))