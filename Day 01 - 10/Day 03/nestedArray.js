/**
 * ====================================
 * Nested Array
 * ====================================
 * Array Methods
 * 16.some()
 * 17.find()
 * 18.indexOf()
 * 19.findIndex()
 * 20.flat()
 * ====================================
 */

var employee = [
  [1, "ram", "10 years", 35],
  [2, "anil", "2 years", 25],
  [3, "nikhil", "4 years", 28],
  [4, "nikhil", "4 years", 25],
];

let num = [10, 20, 40, 30, 60];

// ~ 16 ------------------------------ some()
// let res = employee.some((emp) => emp[1] == "anil");
// console.log(res); //boolean

// ~ 17 ------------------------------ find()
// let res = employee.find((emp) => emp[3] === 25);
// console.log(res); // returns array - first match`

// ~ 18 ------------------------------ indexOf()
// let res = num.indexOf(30);
// let res1 = num.indexOf(100);
// console.log(res, res1); // index and if not found then returns -1

// ~ 19 ------------------------------ findIndex()
// let res = num.findIndex((num) => num > 20);
// console.log(res); // index of greater than 20 - first match

// let res = employee.findIndex((emp) => emp[3] > 25);
// console.log(res);

// ~ 20 ------------------------------ flat()
let numbers = [
  [1, 2, 3, 4],
  [10, 40, 50],
  ["A", "B"],
];
// let res = numbers.flat();
// console.log(res); // returns single array
