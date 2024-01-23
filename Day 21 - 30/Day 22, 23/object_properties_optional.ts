export const getName = (params: { first: string; last?: string }) => {
  if (params.last) {
    return `${params.first} ${params.last}`;
  }
  return params.first;
};

const name = getName({
  first: "Matt",
});

// optional params - ?:



export const getAge = (params: { age: number | undefined }) => {
  return params.age;
};

const age = getAge({
  age: undefined,
});
