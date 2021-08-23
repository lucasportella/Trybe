const mathFunc = (a,b,c) => {
    const promise = new Promise((resolve, reject) => {
        if (typeof(a) === 'number' && typeof(b) === 'number' && typeof(c) === 'number') {
            const result = (a + b) * c;
            if (result > 50) {
                resolve(result);
            } reject(Error("valor muito baixo"))
        }
        reject(Error("apenas números, por favor"))
    })
    return promise
}
mathFunc(1,2,2).then(resolve => console.log(resolve)).catch(error => console.log(error))
mathFunc(1,22,2).then(resolve => console.log(resolve)).catch(error => console.log(error))
mathFunc(1,222,2).then(resolve => console.log(resolve)).catch(error => console.log(error))
mathFunc(1,'222',2).then(resolve => console.log(resolve)).catch(error => console.log(error))

