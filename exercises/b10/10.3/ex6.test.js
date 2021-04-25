const getDog = require('./ex6fetchFunc')

describe('mock fetchDog function', () => {
  const doggy = jest.spyOn(getDog, 'fetchDog')
  it('should mock and test fetchDog', async () => {
   doggy.mockResolvedValue('request success')
   doggy();
    expect(doggy).toHaveBeenCalled();
    expect(doggy).toHaveBeenCalledTimes(1);
    expect(doggy()).resolves.toEqual('request success')
  })
})

