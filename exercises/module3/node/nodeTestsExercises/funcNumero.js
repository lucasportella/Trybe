const spitNumberType = (number) => {
    if (number > 0) { return "positivo"}
    else if (number < 0) { return "negativo"}
    else if (number === 0) { return "neutro"}
    return "por favor, informe apenas números"
}

module.exports = spitNumberType;
