/* step1: starting value and end value
   step2: iterate from start to end
   step3: iterate the divisor 2 to n-1 from start to end
   step4: if any number is divisible break the loop go to step2
 */

let start = 5;
let end = 100;
let isDivisible = false;
for (let primenumber = start; primenumber <= end; primenumber++) {
  isDivisible = false;
  for (let divisor = 2; divisor < primenumber; divisor++) {
    if (primenumber % divisor === 0) {
      isDivisible = true;
      break;
    }
  }
  if (!isDivisible) {
    console.log(primenumber);
  }
}
