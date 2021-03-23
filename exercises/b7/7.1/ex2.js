let oddsAndEvens = [13, 3, 4, 10, 2, 3, 25, 9, 7, 4, 7, 2];

oddsAndEvens = oddsAndEvens.sort();

let stringOddsAndEvens = "";
for (let i = 0; i < oddsAndEvens.length; i += 1){
    if ( i < oddsAndEvens.length - 1) {
 stringOddsAndEvens += oddsAndEvens[i] + ',';
    } else {
        stringOddsAndEvens += oddsAndEvens[i];
    }
}

console.log(`Os números ${stringOddsAndEvens} se encontram ordenados de forma crescente!`);