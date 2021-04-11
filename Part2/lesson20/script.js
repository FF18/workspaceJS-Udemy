"use strict";

// const obj = new Object(); // not in use
const options = {
    name: 'test',
    width: 1024,
    height: 1024,
    colors: {
        border: 'black',
        bg: 'red'
    },
    // create our own method
    makeTest: function() {
        console.log("Test"); 
    }
};

options.makeTest();

// destructuring object
const {border, bg} = options.colors;
console.log(border);

// length of object
// console.log(Object.keys(options).length);

// console.log(options["colors"]["border"]);
// console.log(options.name);
// console.log();
// delete options.name;  
// console.log(options);

// let counter = 0;
// for ... in : use for object
// for(let key in options) {
//     if(typeof(options[key]) === 'object') {
//         for(let i in options[key]) {
//             console.log(`Property ${i} has meaning ${options[key][i]}`);
//             counter++;
//         }
//     } else {
//         console.log(`Properties ${key} has meaning ${options[key]}`);
//         counter++;
//     }
// }
// console.log(counter);

// let counter = 0;
// for(let key in options) {
//     counter++;
// }
// console.log(counter);