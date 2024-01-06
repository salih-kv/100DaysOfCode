/** OR */
// true || true; // true
// false || true; // true
// true || false; // true
// false || false; // false

// let hour = 12;
// let isWeekend = true;

// if (hour < 10 || hour > 18 || isWeekend) {
//   alert("The office is closed."); // it is the weekend
// }

/** AND */
// true && true; // true
// false && true; // false
// true && false; // false
// false && false; // false

// let hour = 12;
// let minute = 30;

// if (hour == 12 && minute == 30) {
//   alert("The time is 12:30");
// }

// if the first operand is truthy,
// AND returns the second operand:
// 1 && 0; // 0
// 1 && 5; // 5

// if the first operand is falsy,
// AND returns it. The second operand is ignored
// null && 5; // null
// 0 && "no matter what"; // 0

/** ! (NOT) */

// let result = true;
// !result // false
// !!result // true

/** Nullish coalescing operator '??' */

// let user;
// alert(user ?? "Anonymous"); // Anonymous (user is undefined)

// let user = "John";
// alert(user ?? "Anonymous"); // John (user is not null/undefined)
