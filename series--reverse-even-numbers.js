// Step1 : end to start number iteration

let start = 50;
let end = 100;
for (let evenNumber = end; evenNumber >= start; evenNumber--) {
  if (evenNumber % 2 === 0) {
    console.log(evenNumber);
  }
}
