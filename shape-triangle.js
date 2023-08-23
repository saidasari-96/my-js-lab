/*

    *
   ***
  *****
 *******
*********
*/

// spaces = 5
let printStr = "";
for (let row = 1; row <= 5; row++) {
  printStr = "";
  for (let space = 5 - row; space > 0; space--) {
    printStr += " ";
  }
  for (let col = 1; col <= 2 * row - 1; col++) {
    printStr += "*";
  }
  console.log(printStr);
}
for (let row = 5 - 1; row >= 1; row--) {
  printStr = "";
  for (let space = 5 - row; space > 0; space--) {
    printStr += " ";
  }
  for (let col = 1; col <= 2 * row - 1; col++) {
    printStr += "*";
  }
  console.log(printStr);
}
