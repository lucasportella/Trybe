let n = 5;
let asterisco = '*'
let inputLine = ''
for (contador = 0; contador < n; contador ++) {
    for (contador2 = 0; contador2 < n; contador2++) {
        inputLine = inputLine + asterisco;
    }
    console.log(inputLine)
    inputLine = ''
}

