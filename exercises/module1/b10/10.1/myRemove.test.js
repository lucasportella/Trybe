function myRemove(arr, item) {
  let newArr = [];
  for (let index = 0; index < arr.length; index += 1) {
    if (item !== arr[index]) {
      newArr.push(arr[index]);
    }
  }
  return newArr;
}

it('remove array element', () => {
  expect(myRemove([1,2,3,4],5)).toEqual([1,2,3,4])
})

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

describe('arrayfunc',() => {

  it('remove array item without copy', () => {
    expect(myRemoveWithoutCopy([1,2,3,4],3)).toEqual([1,2,4])
  })

  it('dif array', () => {
    expect(myRemoveWithoutCopy([1, 2, 3, 4], 3)).not.toEqual([1, 2, 3, 4])
  })

  it('same array', () => {
    expect(myRemoveWithoutCopy([1, 2, 3, 4],1)).not.toEqual([1,2,3,4])
  })

  it('add 5 to array', () => {
    expect(myRemoveWithoutCopy([1,2,3,4],5)).toEqual([1,2,3,4])
  })

})