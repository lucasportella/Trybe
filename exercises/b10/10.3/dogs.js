async function fetchDog() {
  const dog = await fetch("https://dog.ceo/api/breeds/image/random")
    .then((resp) => resp.json())
    .then((json) => (json.message));

    const doguinho = document.createElement("img");
    doguinho.src = dog;
    const body = document.getElementsByTagName("body")[0];
    body.appendChild(doguinho);
    

}
fetchDog()
fetchDog()
fetchDog()
fetchDog()
fetchDog()



