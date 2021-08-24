const readline = require('readline-sync');
const numero = Math.ceil(Math.random() * 10)
const resposta = readline.question('Adivinhe o número de 1 a 10: ')
if (numero === parseInt(resposta)) {
    console.log('Você ganhou!')
} else {
    console.log("Você perdeu!");
}

