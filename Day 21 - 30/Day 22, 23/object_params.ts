export const addTwoIntegers = (params) => {
  return params.num1 + params.num2;
};

addTwoIntegers({
  num1: 3,
  num2: 5,
});

// 3 methods:

// !1
// export const addTwoIntegers = (params: {num1: number; num2: number) => {
//   return params.num1 + params.num2;
// };


// !2.
// export const addTwoIntegers = (params: addTwoIntegersArgs) => {
//   return params.num1 + params.num2;
// };

// type addTwoIntegersArgs = {
  // num1: number;
  // num2: number;
// }

// type sumArgs = string  // type could be string, number, boolean ...


// !3.
// export const addTwoIntegers = (params) => {
//   return params.num1 + params.num2;
// };

// interface addTwoIntegersArgs {         // it only represent for objects...
  // num1: number;
  // num2: number;
// }