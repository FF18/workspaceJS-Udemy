"use strict";

// 1)
let x = 5;
alert(x++); // answer: 5
// if this ones expression:
alert(++x); // answer: 6

// 2)
[] + false - null + true // answer: NaN
// step 1
console.log([] + false); // "false"
// [] - type is String always
console.log(typeof([] + false)); // String
// step 2
console.log([] + false - null); // NaN
// step 3
console.log([] + false - null + true); // NaN

// 3)
let y = 1;
let x = y =2;
alert(x); // answer: 2

// 4)
// What is sum?
[] + 1 + 2 // answer: "12" (because [] is String)

// 5)
alert("1"[0]); // answer: "1" (letter corresponding to the index)

// 6)
// the AND operator always stumbles on false
console.log(2 && 1 && null && 0 && undefined); // answer: null

// 7)
// What is different between:
!!(a && b) // answer: false (boolean)
(a && b) // answer: ab (string)

// 8)
// the OR operator always stumbles on true.
// the AND operator is executed before the OR operator - priority higher.
alert(null || 2 && 3 || 4); // answer: 3
// step 1
alert( 2 && 3 ); // answer: 3
// step 2
alert(null || 3 ); // answer: 3
// step 3
alert(3 || 4); // answer: 3

// 9)
// Is the true: a == b?
const a = [1, 2, 3];
const b = [1, 2, 3];
console.log(a == b); // answer: false

// 10)
alert(+"Infinity"); // answer: infinity

//11)
// If this expression right?
// to looke unicode
console.log("Dog" > "apple"); // answer: yes

// 12)
// the OR operator always stumbles on true.
console.log(0 || "" || 2 || undefined || true || false); // answer: 2
// step 1
console.log(0 || ""); // false
// step 2
console.log(false || 2); // 2
