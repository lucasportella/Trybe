const randomNumber = () => Math.floor(Math.random() * 100 + 1)

const mathFunc = (a,b,c) => {
    const promise = new Promise((resolve, reject) => {
            a = randomNumber();
            b = randomNumber();
            c = randomNumber();
            const result = (a + b) * c;
            if (result > 50) {
                resolve(result);
            } reject(Error("valor muito baixo"))

    })
    return promise
}

mathFunc().then(resolve => console.log(resolve)).catch(error => console.log(error))

for (let index = 0; index < 500; index++) {
    console.log(mathFunc());;
}