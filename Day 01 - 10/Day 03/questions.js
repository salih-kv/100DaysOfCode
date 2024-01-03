/**
 * ====================================
 * Questions
 * ====================================
 */

// ? print unique elements in this array. result = [25000,30000,50000];
const expenses = [25000, 30000, 30000, 50000];
let uniqueExpenses = [];
expenses.forEach((expense) => {
  if (!uniqueExpenses.includes(expense)) {
    uniqueExpenses.push(expense);
  }
});

console.log(uniqueExpenses);

// ? var arr=[2,3,4,5,6,7,8]; Make all elements squares
var arr = [2, 3, 4, 5, 6, 7, 8];
var squareArr = arr.map((element) => {
  return element * element;
});

// ? Print only even numbers from the array
// ? Print only odd numbers from the array
// squareArr.forEach(
//     (ele) => {
//         if(ele % 2 == 1) {
//             console.log(ele);
//         }
//     }
// )

// ? Find the largest element in the array
// let largestElement = 0;
// squareArr.forEach(
//     (ele) => {
//         if(ele > largestElement) {
//             largestElement = ele;
//         }
//     }
// )
// console.log(largestElement);

// ? sort the array in descending order
arr.sort((a, b) => b - a);
console.log(arr);

// ============================================================
// ? var names=["arjun","akil","arvind",'ram','ravi','Akash'];
// ? print names with first letter a.

var names = ["arjun", "akil", "arvind", "ram", "ravi", "Akash"];
names.forEach((ele) => {
  if (ele.charAt(0).toLowerCase() === "a") {
    console.log(ele);
  }
});

var mobiles = [
  [1000, "samsung", "samsung f41", 15000, "snapdragon", "AMOLED", "4g"],
  [1001, "samsung", "samsung A51", 32000, "snapdragon", "AMOLED", "5g"],
  [1002, "redmi", "not 10 pro", 19000, "snapdragon", "LED", "4g"],
  [1003, "redmi", "mi 11 lite", 30000, "mediatek", "LED", "4g"],
  [1004, "apple", "12 pro", 72000, "snapdragon", "AMOLED", "4g"],
  [1005, "apple", "12 pro max", 100000, "snapdragon", "AMOLED", "5g"],
  [1006, "one plus", "nord 2", 29000, "snapdragon", "AMOLED", "4g"],
  [1007, "one plus", "nord 2", 15000, "mediatek", "LED", "4g"],
];

// ? Print all mobile names
// mobiles.forEach((ele) => {
//   console.log(ele[2]);
// });

let mobileNames = mobiles.map((ele) => {
  return ele[2];
});
// console.log(mobileNames);

// ? Print all mobile prices
let mobilePrices = mobiles.map((ele) => {
  return ele[3];
});
// console.log(mobilePrices);

// ? Print only mobiles with samsung brand
// mobiles.forEach(
//     (ele) => {
//         if(ele[1] === 'samsung') {
//             console.log(ele[2]);
//         }
//     }
// )

// ? print all mobile phones below 25000
// mobiles.forEach(
//     (ele) => {
//         if(ele[3] < 25000) {
//             console.log(ele[2]);
//         }
//     }
// )

// ? Print mobile details of available in price range of 25k to 30k
// mobiles.forEach(
//     (ele) => {
//         if(ele[3] >= 25000 && ele[3] <= 30000) {
//             console.log(ele);
//         }
//     }
// )

// ? List all 5g mobile names
// mobiles.forEach(
//     (ele) => {
//         if(ele[6] === '5g') {
//             console.log(ele[2]);
//         }
//     }
// )

// ? List all 5g mobiles under 35000
// mobiles.forEach(
//     (ele) => {
//         if(ele[6] === '5g' && ele[3] < 35000) {
//             console.log(ele[2]);
//         }
//     }
// )

// ? List all samsung mobile whose band=4g and display type is AMOLED

// mobiles.forEach(
//     (ele) => {
//         if(ele[6] === '4g' && ele[5] === 'AMOLED') {
//             console.log(ele[2]);
//         }
//     }
// )
