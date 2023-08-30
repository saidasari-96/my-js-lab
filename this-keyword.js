// "use strict";
var foo = "global";
var myObject = {
  foo: "bar",
  func: function () {
    var self = this;
    console.log("outer func:  this.foo = " + this.foo); // this refers scope of owner of the function.
    console.log("outer func:  self.foo = " + self.foo);
    (function () {
      console.log("inner func:  self.foo = " + self.foo);
      console.log("inner func:  this.foo = " + this.foo); //comment the use strict at the top line.
    })();
  },
};
myObject.func();

//* In the inner function, though, this no longer refers to myObject. As a result, this.foo is undefined in the inner function, whereas the reference to the local variable self remains in scope and is accessible there.

console.log("====================================");
var _name = "Global";
var hero = {
  _name: "John Doe",
  getSecretIdentity: function () {
    return this._name;
  },
};

var stoleSecretIdentity = hero.getSecretIdentity;
console.log(hero.getSecretIdentity());
console.log(stoleSecretIdentity.call({ _name: "Custom context" }));
console.log(stoleSecretIdentity());

//* An educated answer to this question would simply be: “You can’t be sure. it might print out 0.3 and true, or it might not. Numbers in JavaScript are all treated with floating point precision, and as such, may not always yield the expected results.”

// The example provided above is classic case that demonstrates this issue. Surprisingly, it will print out:

// 0.30000000000000004
// false
// A typical solution is to compare the absolute difference between two numbers with the special constant Number.EPSILON:

// function areTheNumbersAlmostEqual(num1, num2) {
// 	return Math.abs( num1 - num2 ) < Number.EPSILON;
// }
// console.log(areTheNumbersAlmostEqual(0.1 + 0.2, 0.3));
console.log("====================================");

function fn() {
  console.log(this.length);
}

var obj = {
  length: 5,
  method: function (fn) {
    fn();
    arguments[0]();
  },
};

obj.method(fn, 1, 8);