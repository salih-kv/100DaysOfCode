/**
 * ====================================
 * if(); else if();
 * ====================================
 */

let mark = Math.floor(Math.random() * 100);
console.log(mark);

if (mark >= 90) {
  console.log("Student has scored an A");
} else if (mark >= 70 && mark <= 89) {
  console.log("Student has scored an B");
} else if (mark >= 50 && mark <= 69) {
  console.log("Student has scored an c");
} else if (mark >= 30 && mark <= 49) {
  console.log("Student has scored an D");
} else {
  console.log("failed");
}
