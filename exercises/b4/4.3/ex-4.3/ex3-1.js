let n = 5;
let controller = n;
let asterisk = '*';
let printer = '';
for (row = 0; row < 5; row += 1) {
  for (column = 0; column < 5; column += 1) {
    if (column < n - 1) {
      printer = printer + ' ';
      controller += 1;
    } else {
      printer = printer + asterisk;
    }
  }
  n -= 1;
  console.log(printer);
  printer = '';
}