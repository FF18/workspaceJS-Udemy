"use strict";

// example 1
// function showFirstMessage() {
//     console.log("Hello WOrld!");
// }

// showFirstMessage();

let num = 20;
function showFirstMessage(text) {
    console.log(text);
    // num = 10;
 //   let num = 10;
    console.log(num);
}

showFirstMessage();
console.log(num);

// example 2
function calc(a, b) {
    return (a + b); // word "return" always end of function
}

console.log(calc(4, 3));
console.log(calc(5, 6));
console.log(calc(10, 6));

// example 3
function ret() {
    let num = 50;
    //
    return num;
}

const anotherNum = ret();
console.log(anotherNum);