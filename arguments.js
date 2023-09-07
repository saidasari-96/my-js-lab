// function sum(currentNumber) {
//   let total = currentNumber;
//   var fun = function (nextNumber) {
//     if (nextNumber) {
//       total += nextNumber;
//       return fun;
//     } else {
//       return total;
//     }
//   };
//   return fun;
// }

const sum = (a) => (b) => b ? sum(a + b) : a;

console.log(sum(5)(6)(8)());

// var sum = function (a) {
//   return function (b) {
//     if (b) {
//       return sum(a + b);
//     } else {
//       return a;
//     }
//   };
// };

// var value = function (b) {
//   if (b) {
//     return sum(5 + b);
//   } else {
//     return a;
//   }
// };

// function (6) {
//   if (6) {
//     return sum(5 + 6); // 11
//   } else {
//     return a;
//   }
// };

// function (11) {
//   return function (b) {
//     if (b) {
//       return sum(11 + b);
//     } else {
//       return a;
//     }
//   };
// };

// function (b) {
//     if (b) {
//       return sum(11 + b);
//     } else {
//       return a;
//     }
//   };

// function (8) {
//     if (8) {
//       return sum(11 + 8); // 19
//     } else {
//       return a;
//     }
// };

// function (19) {
//   return function (b) {
//     if (b) {
//       return sum(19 + b);
//     } else {
//       return 19;
//     }
//   };
// };

// function (b) {
//     if (b) {
//       return sum(19 + b);
//     } else {
//       return 19;
//     }
// };

// function (undefined) {

//     if (undefined) {
//       return sum(19 + b);
//     } else {
//       return 19;
//     }
//   };
// console.log(sum(5)(6)(8));

// const sum = (a) => {
//   const add = (b) => sum(a + b);

//   add.valueOf = () => a;

//   return add;
// };

// Usage:
// const result = sum(5)(6)(8);
// console.log(result); // This will print 19

// function myVal() {
//   return 125;
// }
// myVal.prototype.valueOf = function () {
//   return "Hello";
// };
// console.log(myVal + 1);
