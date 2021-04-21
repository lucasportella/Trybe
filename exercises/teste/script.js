const texto = 'aaaaajiodajwdjjoãojdiaaaa'
const regExp1 = /JOãO/gi
const result = regExp1.exec(texto).input
console.log(result);