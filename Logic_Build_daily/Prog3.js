// * Write a JavaScript program to check whether a given positive number is a multiple of 3 or 7.

function test(num) {
  if ((Math.sign(num) == 1 && num % 3 == 0) || num % 7 == 0) {
    console.log("given number is multiple with 3 or 7");
  }
}
test(12);
