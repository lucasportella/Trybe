// apiScript.js
const API_URL = 'https://icanhazdadjoke.com/';

const fetchJoke = () => {
  const myObj = {
    method: 'GET',
    headers: { 'Accept': 'application/json'}
  };
  fetch(API_URL, myObj)
  .then(response => response.json())
  .then((joke) => console.log(joke.joke))
};

const myPromise = new Promise((resolve,reject) => {
  const pickNumber = () => Math.floor(Math.random() * 51)
  const arrayOfNumbers = [];
  for (let i = 0; i < 10; i += 1) {
    arrayOfNumbers.push(pickNumber());
  }
  console.log(arrayOfNumbers);
});


window.onload = () => fetchJoke();