let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

for (let c1 = 1; c1 < numbers.length; c1++) {
    for (let c2 = 0; c2 < c1; c2++) {
        if (numbers[c2] > numbers[c1]) {
            let position = c1;
                c1 = c2;
                c2 = position;
        }
    }
}