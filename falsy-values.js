let valueToBooleanExpression = [
  undefined,
  0,
  NaN,
  "",
  null,
  false,
  12,
  -2,
  "non-empty",
  {},
  [],
  Date(),
  { dfdf: "abc" },
  [1, 2.3],
];

valueToBooleanExpression.forEach((element) => {
  if (element) {
    console.log(element, "Truthy value ");
  } else {
    console.log(element, "falsey value ");
  }
});

console.log(false == "0"); //* it will convert and compare
console.log(false === "0"); //* it will only compare

console.log(1 < 2 < 3); //left to right, true<3
console.log(3 > 2 > 1); // false because false 3> 2 is true, true(1) greater than one 