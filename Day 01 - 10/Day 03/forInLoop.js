/**
 * ====================================
 * for....in
 * ====================================
 */

// In JavaScript, the for-in loop allows you to loop through the properties of an object.
// The statements of code found within the loop body will be executed once for each property of the object.

var colors = {
  primary: "red",
  secondary: "cyan",
  tertiary: "yellow",
};

for (var color in colors) {
  console.log(color + " -> " + colors[color]); // property of object & elements
}

var colorsArr = ["orange", "green", "yellow"];

for (var colorIndex in colorsArr) {
  console.log(color + " -> " + colorsArr[color]); // index of array elements & elements
}
