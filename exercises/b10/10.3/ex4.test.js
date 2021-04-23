const funcs = require('./funcs');
jest.mock('./funcs');

describe('test funcs', () => {
  it('should create new implementation for first func', () => {
    funcs.strUpper.mockImplementation((str) => str.toLowerCase());
    expect(funcs.strUpper('LuCaS')).toBe('lucas');
    expect(funcs.strUpper).toHaveBeenCalled();
    expect(funcs.strUpper).toHaveBeenCalledTimes(1);
    expect(funcs.strUpper).toHaveBeenCalledWith('LuCaS');
  })
  it('should create new implementation for second func', () => {
    funcs.strFirstLetter.mockImplementation((str) => {
      const splittedStr = str.split('');
      return splittedStr[splittedStr.length -1]
    });
    expect(funcs.strFirstLetter('abc')).toBe('c');
    expect(funcs.strFirstLetter).toHaveBeenCalled();
    expect(funcs.strFirstLetter).toHaveBeenCalledTimes(1);
  })
  it('should create new implementation for third func', () => {
    funcs.joinStrings.mockImplementation((str1, str2, str3) => `${str1}${str2}${str3}`);
    expect(funcs.joinStrings('lucas', 'fernandes', 'portella')).toBe('lucasfernandesportella')
    expect(funcs.strFirstLetter).toHaveBeenCalled();
    expect(funcs.strFirstLetter).toHaveBeenCalledTimes(1);
  })
})