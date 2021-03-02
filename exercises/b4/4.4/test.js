function indiceDoMaior(numeros) {
    let indiceMaior = 0;
    for (let indice in numeros) {
      console.log(`indice = ${indice}`)
      console.log(`numeros[indiceMaior] = ${numeros[indiceMaior]}`)
      console.log(`numeros[indice] = ${numeros[indice]}`)
      console.log(`indiceMaior = ${indiceMaior}`)
      console.log('----------------------------------------------')
      if (numeros[indiceMaior] < numeros[indice]) {
        indiceMaior = indice;
      }
    }
    return indiceMaior;
  }
  
  console.log(indiceDoMaior([2, 3, 6, 7, 10, 1]));