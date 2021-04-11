"use strict";

// PART STRING
// const str = "test";
const str = "teSt";

// console.log(str.length);
// console.log(str[2]);
// console.log(str[2] = 'd');

// console.log(str.toUpperCase());
console.log(str.toLowerCase());
console.log(str);

const fruit = "Some fruit";

// search of substring
// console.log(fruit.indexOf("fruit"));
console.log(fruit.indexOf("q"));

const logg = "Hello World";

// letters start and end to cut out word
console.log(logg.slice(6, 11));
console.log(logg.slice(6));
console.log(logg.slice(-5, -1));
console.log(logg.slice(-5));

// numbers > 0
console.log(logg.substring(6, 11));

// letter start and length word to cut out
console.log(logg.substr(6, 5));



// PART NUMBERS
const num = 12.2;

console.log(Math.round(num));

// word to number translation
const test = "12.2px";
console.log(parseInt(test));
console.log(parseFloat(test));