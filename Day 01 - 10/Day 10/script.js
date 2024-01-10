// node basics

const r = require("readline-sync");

// let age = r.questionInt('Enter your age');
// console.log(`Your age is ${age}`);

let arr = [];
let arrSize = r.questionInt("Enter Array Size ");

// for (let i = 0; i < arrSize; i++) {
//     let value = r.question('Enter a value ')
//     arr.push(value)
// }

// console.log(arr);

for (let i = 0; i < arrSize; i++) {
  arr[i] = r.questionInt();
}

console.log(arr);
