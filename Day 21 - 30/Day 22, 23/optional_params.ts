export const getName = (first: string, last?: string) => {
  // two params
  if (last) {
    return `${first} ${last}`;
  }
  return first;
};

const name = getName("John");   // here the second argument is optional
