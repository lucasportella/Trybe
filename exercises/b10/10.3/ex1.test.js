let randomNumber = () => Math.floor(Math.random() * 100) + 1;
test('default return 10', () => {
  randomNumber = jest.fn().mockReturnValue(10);
  randomNumber();
  expect(randomNumber).toHaveBeenCalled();
  expect(randomNumber()).toBe(10);
  expect(randomNumber).toHaveBeenCalledTimes(2);
})