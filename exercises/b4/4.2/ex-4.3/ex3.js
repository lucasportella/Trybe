let n = 66;
let verifier = n;
let inputPosition = ''
let emptySpace = ' '
let asterisk = '*';

for (counter = 0; counter < n; counter += 1) {
    for (counter2 = 0; counter2 < n; counter2 += 1) {
        if (counter2 < (verifier - 1)) {
            inputPosition += emptySpace
        } else {
            inputPosition += asterisk
        }
    }
    verifier -= 1
    console.log(inputPosition);
    inputPosition = ''
}