const assert = require('assert');
const wordLengths = (param) => {
  let newArray = [];
  for (let i = 0; i < param.length; i += 1) {
    let counter = 0;
    for (let j = 0; j < param[i].length; j += 1) {
      counter += 1
    }
    newArray.push(counter)
  }
  return newArray
}
const words = ['sun', 'potato', 'roundabout', 'pizza'];
const expected = [3, 6, 10, 5];

assert.strictEqual(typeof wordLengths, 'function');
const output = wordLengths(words);
assert.deepStrictEqual(output, expected);