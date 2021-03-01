function BiggestInteger(myArray) {
    let biggestNumber = -999999999999;
    let indexWithBiggestNumber = 0;
    for (let index in myArray) {
        if (myArray[index] > biggestNumber) {
            biggestNumber = myArray[index];
            indexWithBiggestNumber = index;
        }
    }
    return indexWithBiggestNumber;
}

let array = [2,4,6,8,2,44,1,5,22]
console.log(BiggestInteger(array));