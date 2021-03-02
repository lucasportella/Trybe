array = [2,4,6,7,-55, 10,0,-3];
console.log(smallestIndex(array));
function smallestIndex(parameterArray) {
    currentSmallestIndex = 0;
    for (let indexCounter in parameterArray) {
        if (parameterArray[currentSmallestIndex] > parameterArray[indexCounter] ) {
            currentSmallestIndex = indexCounter;
        }
    }
    return currentSmallestIndex
}