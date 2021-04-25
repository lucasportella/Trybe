const fetch = require('node-fetch')
let fetchDog = async () => {
   try {
      return await fetch('https://dog.ceo/api/breeds/image/random').then((resp) => resp.json()).then((json) => json.message)
   } catch (error) {
    return error
   }
}

// const logger = async () => {
//    const receiveDog = await fetchDog();
//    console.log(receiveDog);
//   }
//   logger();

module.exports = { fetchDog };