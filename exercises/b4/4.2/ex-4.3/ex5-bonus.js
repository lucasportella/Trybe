let n = 7;
let middle = (n + 1) / 2;
let leftInterval = middle;
let rightInterval = middle;
let printer = '';
for (row = 1; row <= middle; row += 1) {
  for (column = 1; column <= n - 1; column += 1) {
    if (column == leftInterval || column == rightInterval ) {
      printer += '*';
    } else {
      printer += ' ';
    }

  }
  console.log(printer);
  printer = '';
  leftInterval -= 1;
  rightInterval += 1;
  if (leftInterval == 1) {
      for (row = 1; row <= n; row += 1) {
          printer += '*'
      }
    console.log(printer)
  }
}
