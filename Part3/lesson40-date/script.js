'use strict';

// // date for now
// const now = new Date();
// console.log(now);


// const now = new Date(2020, 5, 1, 20);
// console.log(now); // 2020-06-01T17:00:00.000Z

// const now = new Date(0);
// console.log(now); // 1970-01-01T00:00:00.000Z

// const now = new Date(-999999999999);
// console.log(now); // 1938-04-24T22:13:20.001Z


// // get for date
// const now = new Date();
// console.log(now.getFullYear());
// console.log(now.getMonth());
// console.log(now.getDate());
// console.log(now.getDay());

// console.log(now.getHours());
// console.log(now.getUTCHours());

// console.log(now.getMinutes());
// console.log(now.getMilliseconds());

// console.log(now.getTimezoneOffset());
// console.log(now.getTime()); // milliseconds after 1970-01-01

// // put in milliseconds and get date
// const now = new Date(1602702516311);
// console.log(now);


// set for date
// const now = new Date();
// console.log(now.setHours(18)); 
// console.log(now.setHours(18, 40));

const now = new Date('2020-10-16');
console.log(now); // date format

const now1 = Date.parse('2020-10-16');
console.log(now1); // milliseconds format
// console.log(now.setHours(40));
// date look different in console Visual Studio Code and in console web browser

let start = new Date();

for (let i = 0; i < 100000; i++) {
    let some = i ** 3;
}

let end = new Date();

alert(`loop was worked ${end - start} milliseconds`);
