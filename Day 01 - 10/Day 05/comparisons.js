// Comparisons

5 > 4; // true - Obviously, true.
"apple" > "pineapple"; // false - Dictionary comparison, hence false. "a" is smaller than "p".
"2" > "12"; // true - Again, dictionary comparison, first char "2" is greater than the first char "1".
undefined == null; // true - Values null and undefined equal each other only.
undefined === null; // false - Strict equality is strict. Different types from both sides lead to false.
null == "\n0\n"; // false - Similar to (4), null only equals undefined.
null === +"\n0\n"; // false - Strict equality of different types.
