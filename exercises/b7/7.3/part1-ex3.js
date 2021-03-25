const assert = require('assert');

function myRemoveWithoutCopy(arr, item) {
  for (let index = 0, len = arr.length; index < len; index += 1) {
    if (arr[index] === item) {
      arr.splice(index, 1);
      index -= 1;
      len -= 1;
    }
  }

  return arr;
}
const someArr = myRemoveWithoutCopy([3,4,1,5,6,4,1,5],1);
console.log(someArr);


// implemente seus testes aqui