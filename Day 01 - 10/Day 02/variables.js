/**
 * ====================================
 * 1. Variable Declaration
 * 2. Variable Scope
 * 3. Hoisting
 * ====================================
 */

/** Declaration & Scope */

// function-level scope
var name1 = "salih";

// can be reassigned
// block-level scope
let a = 9;
let A = 39;

// cannot be reassigned
// block-level scope
const pi = 3.14;

console.log(name1, a, A, pi);
console.log(name1 + a + A + pi);

function exampleScope() {
  if (true) {
    let insideBlock = "I'm inside the block!";
    console.log(insideBlock);
  }
  // console.log(insideBlock); // Error! 'insideBlock' is not defined here.
}

/** Hoisting */
/**
 * 'var' - hoisted to the top of their scope and can be used before the declaration.
 *
 * 'let' and 'const' are also hoisted, but they are not initialized until the actual declaration is encountered.
 */

console.log(x); // undefined (no error)
var x = 5;

// With let or const:
// console.log(y); // ReferenceError: Cannot access 'y' before initialization
// let y = 10;
