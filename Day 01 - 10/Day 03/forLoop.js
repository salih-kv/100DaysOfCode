/**
 * ====================================
 * for() {}
 * ====================================
 */

// loops are the statements that we can use to control a flow of the program add to some repetitive

// var message = 'Hello Js';

// for (var i=0; i<=10; i++){
//     console.log(message);
// }

// Real Example of loop in Programming
let num = [1, 2, 3, 4, 5, 7, 8, 10];

let squaredArr = [];

for (let i = 0; i < num.length; i++) {
  squaredArr.push(num[i] * num[i]);
}

console.log(squaredArr);
