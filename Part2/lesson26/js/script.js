"use strict";

// To String
// 1)
console.log(typeof(String(null)));
console.log(typeof(String(4))); // string

// 2)
console.log(null + ""); // string

const num =5;
console.log("https://vk.com/catalog/" + num);

const fontSize = 26 + 'px';
console.log(26 + 'px');

// To Number
// 1)
console.log(typeof(Number('4'))); // number

// 2
console.log(+'5'); // number

// 3)
console.log(typeof(parsInt("15px", 10)));

// we are get string only from customer
let answ = +prompt("Hello", "");

// To boolean

// We are get false only from:
0, '', null, undefined, NaN
// empty string
''
// not empty string
' '

// 1)
// We are get true from:
let switcher = null;
if(switcher) {
	console.log('Working...');
}

switcher = 1; // true

if(switcher) {
	console.log('Working...');
}

// 2)
console.log(typeof(Boolean('4')));

// 3)
console.log(typeof(!!"44444")); // Two simbols !! for string will get boolean