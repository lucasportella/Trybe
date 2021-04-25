function createDog(dog) {
  const doguinho = document.createElement("img");
  doguinho.src = dog;
  doguinho.width = 400;
  const body = document.getElementsByTagName("body")[0];
  body.appendChild(doguinho);
}

async function fetchDog() {
  const dog = await fetch("https://dog.ceo/api/breeds/image/random")
    .then((resp) => resp.json())
    .then((json) => json.message);

  createDog(dog)
}

for (let index = 0; index < 50; index += 1) {
  fetchDog();
}
