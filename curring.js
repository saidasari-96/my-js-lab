function multiply(x) {
  return function (y) {
    console.log(x * y);
  };
}
let multipleByTwo = multiply(3); //  using closure
multipleByTwo(4);

// function multiply(x, y) {
//   console.log(x * y);
// }

// let multipleByTwo = multiply.bind(this, 3); // using bind method
// multipleByTwo(4);

// es6

let multiplyByThree = (x) => (y) => console.log(x * y);
multiplyByThree(5)(6);
