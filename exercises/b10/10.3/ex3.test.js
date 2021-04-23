const funcs = require('./funcs');

test('new implementations', () => {
  funcs.randomNumber = jest.fn()
  .mockImplementation((a,b,c) => a * b * c)
  expect(funcs.randomNumber(2,5,7)).toBe(70);
  expect(funcs.randomNumber).toHaveBeenCalled();
  expect(funcs.randomNumber).toHaveBeenCalledTimes(1);
  expect(funcs.randomNumber).toHaveBeenCalledWith(2,5,7);

  funcs.randomNumber.mockReset()
  funcs.randomNumber.mockImplementation((a) => a * 2);
  expect(funcs.randomNumber(33)).toBe(66);
  expect(funcs.randomNumber).toHaveBeenCalledTimes(1);
  expect(funcs.randomNumber).toHaveBeenCalledWith(33);
})