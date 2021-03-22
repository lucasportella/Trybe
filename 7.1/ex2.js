const oddsAndEvens = [13, 3, 4, 10, 2, 3, 25, 9, 7, 4, 7, 2];

for (let i = 0; i < oddsAndEvens.length; i += 1) {
    for (let j = 0; j <oddsAndEvens.length; j += 1) {
    if (oddsAndEvens[j] > oddsAndEvens[j + 1]) {
        let greater = oddsAndEvens[j];
        let lesser = oddsAndEvens[j + 1]
        oddsAndEvens[j] = lesser;
        oddsAndEvens[j + 1] = greater
        // oddsAndEvens.splice(i, 1);
        // oddsAndEvens.splice(i + 1, 0, greater);
    }
}
}

console.log(oddsAndEvens);