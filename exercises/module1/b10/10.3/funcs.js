const randomNumber = () => Math.floor(Math.random() * 100) + 1;
const strUpper = (str) => str.toUpperCase();
const strFirstLetter = (str) =>  str.split('')[0];
const joinStrings = (str1, str2) => `${str1} ${str2}`;

module.exports = {
  randomNumber,
  strUpper,
  strFirstLetter,
  joinStrings,
}