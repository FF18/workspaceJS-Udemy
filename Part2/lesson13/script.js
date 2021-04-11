"use strict";

if (1) {
    console.log("Ok!");
}else {
    console.log('Error');
}

const num1 = 50;
if (num1<49) {
    console.log('that is small');
}else if (num1>100) {
    console.log('that is big');
}else if (num1>50) {
    console.log('that is good');
}else {
    console.log('not any one');
}

const num2 = 100;
switch (num2) {
    case 49:
        console.log('that is small');
        break;
    case 100:
        console.log('that is big');
        break;
    case 50:
        console.log('that is good');
        break;
    default:
        console.log('not any one');
}