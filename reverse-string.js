const str = "saikumar";
var newStr = "";
for (let char = str.length-1; char >= 0; char--) {
  newStr = newStr + str[char];
}
console.log(newStr);
