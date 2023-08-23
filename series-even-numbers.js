let start = 10;
let end = 50;

for (let evenNumber = start; evenNumber <= end; evenNumber++) {
  if (evenNumber % 2 === 0) {
    console.log(evenNumber);
  }
}

for (let oddNumber = 10; oddNumber <= end; oddNumber++) {
  if (oddNumber % 2) {
    console.log(oddNumber);
  }
}