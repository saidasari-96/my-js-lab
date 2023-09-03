//* Write a JavaScript program to create a string from a given string. This is done by taking the last 3 characters and adding them at both the front and back. The string length must be 3 or more.

function threeCut(str) {
  // var newStr = str.substr(-3);
  var newStr = str.slice(str.length - 3);
  var formatted = newStr + str + newStr;
  console.log(formatted);
}
threeCut("swift");
