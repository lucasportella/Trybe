const arr = ['a', 'b', 'd'];
let start = 2;
let deleteCount = 0;
arr.splice(start, deleteCount, 'c');
console.log(arr);; // ['a', 'b', 'c', 'd'];
