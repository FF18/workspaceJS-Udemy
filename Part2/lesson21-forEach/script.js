"use strict";

const arr = [1, 2, 3, 6, 8];

// arr.pop(); // delete last element from array
// arr.push(10); // add last element to array

// arr.shift(); // delete first element from array (very RARELY used)
// arr.unshift(12); // add first element to array (very RARELY used)

// console.log(arr);

for(let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
}

console.log();

for (let value of arr) {
    console.log(value);
}

console.log();

// now length show the wrong value
// arr[99] = 0;
// console.log(arr.length);
// console.log(arr);

// forEach with call back function for each element array (frequent use)
arr.forEach(function(item, i, arr) {
    console.log(`${i}: ${item} inside array ${arr}`);
});

// forEach vs for...of
// forEach cannot be stopped
// for...of use operators break and continues

const str = prompt("", "");
const products = str.split(", ");
products.sort();
console.log(products.join('; '));

// method sort to do sorting all string
const arr1 = [2, 13, 26, 8, 10];
arr1.sort();
console.log(arr1);

const arr2 = [2, 13, 26, 8, 10];
arr2.sort(compareNum);
console.log(arr2);

function compareNum(a, b) {
    return a - b;
}