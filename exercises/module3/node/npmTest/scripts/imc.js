const readlineSync = require('readline-sync');
const height = readlineSync.questionFloat("Altura: ");
const weight = readlineSync.questionInt("Peso: ");
const imc = weight / (height * height);
console.log(imc);