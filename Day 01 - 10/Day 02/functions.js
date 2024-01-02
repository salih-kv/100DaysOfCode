/**
 * ====================================
 * Functions
 * ====================================
 */

// basic syntax
function sum(a, b) {
  return a + b;
}
console.log(sum(3, 4));

// anonymous function
const add = function (a, b) {
  return a + b;
};
console.log(add(3, 4));

// arrow function
const subtract = (a, b) => {
  return a - b;
};
const sub = (a, b) => a - b;
console.log(subtract(10, 3));
console.log(sub(10, 3));

// immediately invoked function expression (IIFE)
const result = (function (a, b) {
  return a + b;
})(3, 4);
console.log(result);
