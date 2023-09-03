// * Write a JavaScript program to create a new string from a given string by changing the position of the first and last characters. The string length must be broader than or equal to 1.

function firstLastStr(str) {
  if (str.length >= 1) {
    var newStr = str.slice(1, str.length - 1);
    var formatedString = str[str.length - 1] + newStr + str[0];
    console.log(formatedString);
  }
}
firstLastStr("Saikumar");
