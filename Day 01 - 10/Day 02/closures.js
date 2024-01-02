/**
 * ====================================
 * closures
 * ====================================
 */

function outerFunction() {
  let outerVariable = 10;

  function innerFunction() {
    console.log(outerVariable);
  }

  return innerFunction;
}

const closureExample = outerFunction();
closureExample(); // Outputs 10

/**
 * allows a function to access variables from an outer function even after that outer function has finished executing.
 */
