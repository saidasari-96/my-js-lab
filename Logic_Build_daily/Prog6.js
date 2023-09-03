// * Write a JavaScript program to check two given integers whether one is positive and another one is negative.

function posNeg(x, y) {
  if ((x < 0 && y > 0) || (x > 0 && y < 0)) {
    console.log(true);
  } else {
    console.log(false);
  }
}
posNeg(-1, -2);
