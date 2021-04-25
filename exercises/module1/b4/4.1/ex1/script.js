let a = -2;
let b = 100;
let c = 82

if (a + b + c > 360 || a < 0 || b < 0 || c < 0) {
    console.log("erro, ao menos 1 dos valores é inválido")
}

else if (a + b + c === 180) {
    console.log("true")
}

else if (a + b + c !== 180) {
    console.log("false")
}

