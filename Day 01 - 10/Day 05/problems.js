/**
 * ====================================
 * 1.Factorial
 * 2.Fibonacci Sequence
 * 3.Palindrome
 * 4.Prime Number
 * 5.Array Sum
 * 6.Even and Odd Array
 * 7.Max and Min in Array
 * 8.Count Vowels
 * ====================================
 */

// 1.Factorial
function calculateFactorial(number) {
  if (number < 0) {
    return "Invalid input. No Factorial for negative numbers.";
  } else if (number === 0 || number === 1) {
    return 1;
  } else {
    let factorial = 1;
    for (let i = 2; i <= number; i++) {
      factorial *= i;
    }
    return factorial;
  }
}
// const inputNumber = 5;
// const result = calculateFactorial(inputNumber);
// console.log(`The factorial of ${inputNumber} is: ${result}`);

// 2.Fibonacci Sequence
function generateFibonacci(n) {
  let fibArray = [0, 1];
  for (let i = 2; i < n; i++) {
    fibArray.push(fibArray[i - 1] + fibArray[i - 2]);
  }
  return fibArray;
}
// console.log(generateFibonacci(10));

// 3.Palindrome Checker
function isPalindrome(str) {
  const reversedStr = str.split("").reverse().join("");
  return str === reversedStr;
}
// console.log(isPalindrome("abba"));

// 4.Prime Number
function isPrime(number) {
  if (number <= 1) return false;
  for (let i = 2; i <= Math.sqrt(number); i++) {
    if (number % i === 0) return false;
  }
  return true;
}
// console.log(isPrime(7));

// 5.Array Sum
function arraySum(arr) {
  return arr.reduce((sum, num) => sum + num, 0);
}
const numArr = [23, 14, 54, 80, 100];
// console.log(arraySum(numArr));

// 6.Even and Odd Array
function separateEvenOdd(arr) {
  const evenArray = arr.filter((num) => num % 2 === 0);
  const oddArray = arr.filter((num) => num % 2 !== 0);
  return { evenArray, oddArray };
}
const arr = [3, 45, 64, 78, 4, 5, 10, 211];
// console.log(separateEvenOdd(arr));

// 7.Max and Min in Array
function findMaxAndMin(arr) {
  const max = Math.max(...arr);
  const min = Math.min(...arr);
  return { max, min };
}
// console.log(findMaxAndMin(arr));

// 8.Count Vowels
function countVowels(str) {
  const vowels = "aeiouAEIOU";
  return str.split("").filter((char) => vowels.includes(char)).length;
}
// console.log(countVowels("loremp ipsum"));
