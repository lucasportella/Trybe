function SmallestInteger(myArray) {
    let biggestNumber = 999999999999;
    let indexWithSmallestNumber = 0;
    for (let index in myArray) {
        if (myArray[index] < biggestNumber) {
            biggestNumber = myArray[index];
            indexWithSmallestNumber = index;
        }
    }
    return indexWithSmallestNumber;
}

let array = [5,22,24,26,-28,22,44,21,5,22]
console.log(SmallestInteger(array));