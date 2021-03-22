const oddsAndEvens = [13, 3, 4, 10, 2, 3, 25, 9, 7, 4, 7, 2];

for (let i = 0; i < oddsAndEvens.length - 1; i += 1) {
    for (let j = 0; j <oddsAndEvens.length -1; j += 1) {
    if (oddsAndEvens[j] > oddsAndEvens[j + 1]) {
        let greater = oddsAndEvens[j];
        oddsAndEvens.splice(j, 1);
        oddsAndEvens.splice(j + 1, 0, greater);
    }
}
}

console.log(oddsAndEvens);