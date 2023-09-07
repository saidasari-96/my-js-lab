function findJava(str) {
  if (str.length < 4) {
    return false;
  } else {
    var front = str.substring(0, 4);
    if (front = "java") {
      return true;
    } else {
      return false;
    }
  }
}

console.log(findJava("Javascript"));
