// const collection = [1, 2, 3, 4, 5];

// const accumulator = array => {
//   let acc = 0;
//   for (let i = 0; i < array.length; i += 1) {
//     acc += array[i];
//   }
//   return acc
// }
// // console.log(accumulator(collection));

// // console.log(collection.reduce(((accumulator, currentValue) => 1 + 1)));

// const numbers = [50, 85, -30, 3, 15];

// const biggest = array => {
//   currentBiggest = array[0];
//   for (let i = 0; i < array.length; i += 1) {
//     if (array[i] > currentBiggest) {
//       currentBiggest = array[i]
//     }
//   }
//   return currentBiggest;
// }

// const numbers = [50, 85, -30, 3, 15];
// const bigger = (accumulator, currentValue) => accumulator > currentValue ? accumulator : currentValue;

// console.log(numbers.reduce(bigger));

const numbers = [18, 19, 23, 53, 4, 5, 76, 23, 54];
// const isEven = numbers.filter(number => number % 2 == 0);
// console.log(isEven.reduce((accumulator, currentValue) => accumulator + currentValue));

const sumAllEvens = (accumulator, currentValue) => currentValue % 2 == 0 ? accumulator + currentValue : accumulator;
console.log(numbers.reduce(sumAllEvens));