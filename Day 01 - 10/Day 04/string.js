/**
 * ====================================
 * string methods
 * ====================================
 * .length
 * 1.slice()
 * 2.substring()
 * 3.replace()
 * 4.replaceAll()
 * 5.toUpperCase()
 * 6.toLowerCase()
 * 7.concat()
 * 8.trim()
 * 9.trimStart()
 * 10.trimEnd()
 * 11.padStart()
 * 12.padEnd()
 * 13.charAt()
 * 14.charCodeAt()
 * 15.split()
 * 16.indexOf()
 * 17.lastIndexOf()
 * 18.search()
 * ====================================
 */

/*
[ // ^ - Syntax]
[ // ~ - Method/property]
*/
/** string is immutable (not changeable) - always return new string */
//  =================================================================

let str = "sample text"; // multiline not possible
// let str1 = 'another text'   // multiline not possible

// let string2 = `lorem
// ipsum`;    // multiline is possible

// ~ --------------------------------------------------- .length - property

// console.log(str[0]);    // s
// console.log(str.length);    // 11 - including space

// const emoji = "😄";
// console.log(emoji.length); // 2

// ~ 1 --------------------------------------------------- slice()

// ^ slice(indexStart)
// ^ slice(indexStart, indexEnd)

let str3 = "Lorem ipsum program";
// console.log(str3.slice(6,11));   // ipsum
// console.log(str3);   // Lorem ipsum program
// console.log(str3.slice(12));    // program
// console.log(str3.slice(-3));    // ram

// ~ 2 --------------------------------------------------- substring()

// ^ slice(indexStart)
// ^ slice(indexStart, indexEnd)

// console.log(str3.substring(0, 5)); // Lorem
// console.log(str3.substring(6)); // ipsum program

// ~ 3 --------------------------------------------------- replace()
// replace only update first match and also case sensitive

// ^ replace(pattern, replacement)

let str4 = "Lorem ipsum random text, online";
let res = str4.replace("online", "offline");
// console.log(res);    // Lorem ipsum random text, offline
// console.log(str4);   // Lorem ipsum random text, online

let p = "The fox jumps over the dog, dog reacted.";
let regex = /dog/g; // g - global, i - ignore case sensitive
// console.log(p.replace(regex, "cat")); // The fox jumps over the cat, cat reacted.

// here replace all dog instead of one, bcz of global

// ~ 4 --------------------------------------------------- replaceAll()
// case sensitive

let p_ = "The fox jumps over the dog, dog reacted. Dog barks!";
// console.log(p_.replaceAll("dog", "cat")); // The fox jumps over the cat, cat reacted. Dog barks!

// ~ 5 --------------------------------------------------- toUpperCase()
// console.log(str.toUpperCase());
// ~ 6 --------------------------------------------------- toLowerCase()
// console.log(str.toLowerCase());
// ~ 7 --------------------------------------------------- concat()
// possible to concat multiple strings

let str5 = "hello";
let str6 = "world";
// console.log(str5.concat(' ',str6));

// ~ 8 --------------------------------------------------- trim()
// ignore whitespace starting and ending

let str7 = "    hello world     ";
// console.log(str7);

// console.log(str7.trim()); // hello world

// ~ 9 --------------------------------------------------- trimStart()
// console.log(str7.trimStart());  // hello world
// ~ 10 --------------------------------------------------- trimEnd()
// console.log(str7.trimEnd());    //     hello world
// ~ 11 --------------------------------------------------- padStart()

// ^ padStart(targetLength)
// ^ padStart(targetLength, padString)

let text = "5";
// console.log(text.padStart(4,'0')); // 0005
let num = "85";
// console.log(num.padStart(10,'*'));    // ********85
// ~ 12 --------------------------------------------------- padEnd()

// console.log(text.padEnd(3,'H'));    // 5HH
// console.log(text.padEnd(3,'Hi'));    // 5Hi
// console.log(text.padEnd(4,'Hi'));    // 5HiH
let text1 = "Creepers";
// console.log(text1.padEnd(11,'.'));  // Creepers...

// ~ 13 --------------------------------------------------- charAt()
// console.log(text1.charAt(0));   // C
// ~ 14 --------------------------------------------------- charCodeAt()
// console.log(text1.charCodeAt(0));   // 67 - get unicode of the character
// ~ 15 --------------------------------------------------- split()
const p1 = "brown fox";

const words = p1.split(" ");
// console.log(words); // [ 'brown', 'fox' ]
// console.log(words[0]); // 'brown'

let nameStr = "Arjun, Rahul, Ram, Mohan";
let res1 = nameStr.split(",");
// console.log(res1);  // [ 'Arjun', ' Rahul', ' Ram', ' Mohan' ]

// ~ 16 --------------------------------------------------- indexOf()
let _str = "Lorem ipsum random";
// console.log(_str.indexOf('ipsum'));    // 6
// ~ 17 --------------------------------------------------- lastIndexOf()
let str1 = "lorem ipsum random text, random text";
// console.log(str1.lastIndexOf('random'));    // 25
// ~ 18 --------------------------------------------------- search()
// console.log(str1.search(/Text/i));    // 19
