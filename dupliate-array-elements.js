// ouput = [1,1,2,2,3,3,4,4,5,5,6,6,7,7]
// step1 : convert into string using join method
// step2 : serach the number with one and more digits in given input string globally(start to end in array) 
// step3: split with , and convert into the number
const arr = [1, 2, 3, 4, 5, 6, 7];
let duplicateArr = arr.join().replace(/(\d+)/g, "$1,$1").split(',').map(Number);
console.log(duplicateArr);