const getDog = require('./ex6fetchFunc')

describe('mock fetchDog function', () => {
  getDog.fetchDog = jest.fn()

afterEach(getDog.fetchDog.mockReset)

  it('should mock and return resolved value as request success', async () => {
   getDog.fetchDog.mockResolvedValue('request success')
   getDog.fetchDog();
    expect(getDog.fetchDog).toHaveBeenCalled();
    expect(getDog.fetchDog).toHaveBeenCalledTimes(1);
    expect(getDog.fetchDog()).resolves.toEqual('request success')
  })

  it('should mock and return reject value as request failed', () => {
     getDog.fetchDog.mockRejectedValue('request failed');
     getDog.fetchDog();
     expect(getDog.fetchDog).toHaveBeenCalled();
     expect(getDog.fetchDog).toHaveBeenCalledTimes(1);
     expect(getDog.fetchDog()).rejects.toEqual('request failed')
  })

})

