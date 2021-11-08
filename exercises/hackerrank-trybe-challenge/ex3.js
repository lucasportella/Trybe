function count_down(x) {
    let result = '';
    for (let i = x; i > 0; i -= 1) {
        result += `${i}...`
    }
    return result += '0!!!';
}
console.log(count_down(10))