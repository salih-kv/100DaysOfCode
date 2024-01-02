/**
 * ====================================
 * higher-order functions
 * ====================================
 */

// functions within functions
function createFunction1() {
  function sum(a, b) {
    const result = a + b;
    return result;
  }
  return sum;
}
const sum = createFunction1();
console.log(sum(3, 4));

//
function multiplyBy(factor) {
  return function (number) {
    return number * factor;
  };
}
const multiplyByTwo = multiplyBy(2);
console.log(multiplyByTwo(5)); // Outputs 10
