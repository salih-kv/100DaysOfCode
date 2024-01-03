/**
 * ====================================
 * Objects
 * ====================================
 */

// Initializing an Object with object literal notation
// let person = {
//   firstName: "James",
//   lastName: "Bond",
//   age: 25,
//   getFullName: function () {
//     return this.firstName + " " + this.lastName;
//   },
// };

// Access values of an object
// dot notation
// console.log(person.age);

// bracket notation
// console.log(person["firstName"]);

// ==============================
const employee = {
  fullName: "John Doe",
  age: 30,
  occupation: {
    title: "Graphic Designer",
    department: "Marketing",
    salary: 80000,
  },
  friends: ["Aadam", "Marley", "Martin"],
  ownCar: true,
  address: {
    houseName: "lorem ipsum",
    houseNumber: "345",
    place: {
      state: "Mediqq",
      district: "Ownwn",
      pin: 49343,
    },
  },
};

// console.log(employee);
// console.log(employee.age);
// console.log(employee.friends[0]);
// console.log(employee.address.place.pin);

// employee.ownCar = false;
// console.log(employee);

// employee.maritalStatus = "single";
// console.log(employee);

// delete employee.friends;
// console.log(employee);
