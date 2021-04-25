let custo = 10;
let custoMaisImposto = custo + (custo * 0.2);
let venda = 20.55;
let lucro = venda - custoMaisImposto
if (custo < 0 || venda < 0 || custoMaisImposto < 0) {
    console.log('ERRO! Valor de entrada menor que zero.');
} else {
    console.log(`O lucro foi de R$${lucro}.`)
}