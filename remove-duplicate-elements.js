const arr = [1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 7];
const obj = {};
for (let index = 0; index < arr.length; index++){
    if (!obj[arr[index]]) {
        obj[arr[index]] = arr[index];
    }
}
// for (let item of arr) {
//     obj[item] = item;
// }
var filterObject = Object.values(obj);
console.log(filterObject);



// const filter = arr.filter((item, index) => arr.indexOf(item) === index);
// console.log(filter);