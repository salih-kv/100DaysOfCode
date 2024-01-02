/**
 * ====================================
 * hoisting
 * ====================================
 */

// function hoisting
function createFunction2() {
  return multiply;
  function multiply(a, b) {
    const res = a * b;
    return res;
  }
}
const multiply = createFunction2();
console.log(multiply(3, 4));

/**
 * In this example, the function is returned before it is initialized.
 * Although it is a valid syntax, sometimes considered bad practice as it can reduce readability.
 */
