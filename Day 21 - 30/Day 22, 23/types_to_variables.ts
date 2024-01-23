interface User {
  id: number;
  firstName: string;
  lastName: string;
  isAdmin: boolean;
}

/**
 * How do we ensure that defaultUser is of type User
 * at THIS LINE - not further down in the code?
 */
const defaultUser: User = {
  id: 1,
  firstName: "Matt",
  lastName: "Pocock",
  isAdmin: true,
}; // : User - assigning Types to Variables

const getUserId = (user: User) => {
  return user.id;
};

const userId = getUserId(defaultUser);

//
let a: number = 1;
let str: string = "hello";
let isAuthenticated: boolean = true;
let obj: object = {};
