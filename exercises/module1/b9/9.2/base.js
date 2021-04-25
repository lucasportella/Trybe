// apiScript.js

const API_URL = 'https://icanhazdadjoke.com/';

const fetchJoke = () => {
  const myObj = {
    method: 'GET',
    headers: { 'Accept': 'application/json'}
  };
  fetch(API_URL, myObj)
  .then(response => response.json())
  .then((joke) => document.getElementById('jokeContainer').innerText = joke.joke)
};

const myPromise = new Promise((resolve,reject) => {
 setTimeout(() => {
  const pickNumber = () => (Math.floor(Math.random() * 50) + 1 ) ** 2
  const arrayOfNumbers = [];
  for (let i = 0; i < 10; i += 1) {
    arrayOfNumbers.push(pickNumber());
  }
  const arraySum = arrayOfNumbers.reduce((acc, number) => acc + number);
  if (arraySum < 8000) {
   resolve(console.log('sucesso'))
  } else {
    reject(console.log('fracasso'))
  }
 },3000)
})
console.log(typeof(myPromise));

myPromise.then(() => console.log('aaa'))
console.log('bbb');


window.onload = () => fetchJoke();