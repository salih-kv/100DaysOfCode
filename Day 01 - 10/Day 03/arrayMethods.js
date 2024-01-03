/**
 * Array Methods
 * ====================================
 * 1.pop()
 * 2.push()
 * 3.shift()
 * 4.unshift()
 * 5.forEach()
 * 6.map()
 * 7.includes()
 * 8.join()
 * 9.concat()
 * 10.splice()
 * 11.slice()
 * 12.sort()
 * 13.filter()
 * 14.reduce()
 * 15.toString()
 * ====================================
 */

const numArray = [20, 30, 40, 70, 80];
const users = ["John", "Doe", "Franklin"];

// ~ 1 ================================ pop()
// let resPop = numArray.pop(); // take out last element
// console.log(resPop);    // returns removed element (last element)
// console.log(numArray);

// ==
// let res = users.pop()
// console.log(res);
// console.log(users);

// ~ 2 ================================= push()
// let pushRes = numArray.push(100);    // add element to the end of an array
// console.log("new length of array :", pushRes);  // returns length, after inserting element at the end of the array.
// console.log(numArray);

// ~ 3 ================================= shift()
// let res = users.shift();    // remove first element
// console.log(res);   // returns removed the element
// console.log(users);

// ~ 4 ================================= unshift()
// let res = users.unshift('salih');   // add element to 0th index
// console.log(res);   // returns new length
// console.log(users);

// ~ 5 ================================= forEach()
// let res = numArray.forEach((element) => { console.log(element); })
// console.log(res);   // undefined (returns nothing)

// ~ 6 ================================= map()
// let mapRes = numArray.map(
//     (num) => {
//         return num+2;
//     }
// )
// console.log(mapRes);    // map returns new array
// console.log(arr);

// ==
// let arr2 = [2,3,4,5]
// let arr2Square = arr2.map((num)=>{
//     return num*num;
// })
// console.log(arr2Square);

// ~ 7 ================================= includes()
// let res = numArray.includes(20);
// console.log(res);    // returns true if 20 found in the array.

// ==
// let res = users.includes('arun');
// console.log(res);

const fruits = ["Mango", "apple", "Grapes", "orange", "Lichi", "Strawberry"];
const vegetables = ["Cabbage", "Tomato", "Chilli"];

// ~ 8 ------------------------------ join()
// let res = fruits.join("-");
// console.log(res);

// ~ 9 ------------------------------ concat()
// let res = fruits.concat(vegetables);
// console.log(res);

// ~ 10 ------------------------------ splice()
// splice() - 3 arguments - splice(index,how many elements remove,elements)

// let res = fruits.splice(1, 0, "Pineapple");
// console.log(res); // returns empty array
// console.log(fruits); // update original array

// ==
// let res = vegetables.splice(1, 2, "Ladies Finger");
// console.log(res); // returns array removed elements
// console.log(vegetables);

// let res = vegetables.splice(1, 2, "Ladies Finger", "Cucumber", "Onion");
// console.log(res); // returns array removed elements
// console.log(vegetables);

// let res = vegetables.splice(1,2);    // remove 2 elements after 1st index

// ~ 11 ------------------------------ slice()
// slice()  - 2 arguments - slice(starting index, ending index-not inclusive)

// let res = fruits.slice(2, 5); // didn't update original array
// console.log(res); // returns new array of sliced elements
// console.log(fruits);

// ~ 12 ------------------------------ sort()
// Convert to ASCII and sort by default as ascending order

const numbers = [30, 60, 10, 50, 80, 40];
// console.log(numbers.sort());

const numbers1 = [60, 10, 50, 100, 80, 1, 40];
// console.log(numbers1.sort());

// console.log(fruits.sort());

/** == compareFn inside sort(), to solve ASCII based sorting. */
// console.log(numbers.sort((a, b) => b - a)); // sort in descending order
// console.log(numbers1.sort((a,b) => a-b));    // sort in ascending order

// ~ 13 ------------------------------ filter()
// used for filtering an array using conditions

const numbers2 = [7, 8, 9, 10, 11, 12, 13, 14, 15];
// let res = numbers2.filter((num) => num % 2 == 0);
// console.log(res); // returns filtered array
// console.log(numbers2);

// ~ 14 ------------------------------ reduce()
// reduce a method like sum of elements

// let res = numbers2.reduce((a, b) => a + b);
// console.log(res); // returns a single value

// ~ 15 ------------------------------ toString() - string method
// let res = fruits.toString();
// console.log(res);
