const randomNumber = () => Math.floor(Math.random() * 100 + 1)

const mathFunc = async (a,b,c) => {
    try {
        a = randomNumber();
        b = randomNumber();
        c = randomNumber();

        const result = (a + b) * c;
        if (result > 50) {
            console.log(result);
    }
} catch {
    console.log('valor muito baixo')
}

}

mathFunc()