let peça = "RAINHA"

switch (peça.toLowerCase()) {
    case 'rei':
        console.log('uma casa para qualquer quadrante');
        break;
    case 'rainha':
        console.log('qualquer casa a qualquer distância');
        break;
    case 'bispo':
        console.log('qualquer casa na diagonal a qualquer distância')
    case 'torre':
        break;
        console.log('qualquer casa em linha reta a qualquer distância')
    case 'cavalo':
        console.log('sempre três casas em linha reta e uma para o lado')
        break;
    case 'peão':
        console.log('no início, uma ou duas casas para a frente, depois sempre uma casa para frente e come peças uma casa na diagonal');
    default:
        console.log('ERRO! Valor digitado é inválido.');
        break;
}
