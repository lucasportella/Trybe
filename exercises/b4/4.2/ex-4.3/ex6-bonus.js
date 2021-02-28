let n = 13;
let divisionCounter = 2;
let primo = true;
for (counter = 2; counter < n; counter += 1) {
    if (n % counter == 0) {
        divisionCounter += 1;
        primo = false;
        break
    }
}
if (primo == false) {
    console.log(`O número ${n} não é primo.`)
} else {
    console.log(`O número ${n} é primo.`)
}