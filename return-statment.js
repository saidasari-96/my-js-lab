function foo() {
  return;
  {
    boo: "hello"; // undefined
  }
}
function foo1() {
  return {
    boo: "hello", // { boo: hello }
  };
}

console.log(foo());
console.log(foo1());
