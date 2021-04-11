"use strict";

// callback - order of execution of functions

function first() {
    // Do something
    setTimeout(function() {
        console.log(1);
    }, 500);
}

function second() {
    console.log(2);
}

first();
second();

function learnJS(lang, callback) {
    console.log(`I learn: ${lang}`);
    callback();
}

function done() {
    console.log('I took this lesson!');
}

learnJS('JavaScript', done);

// learnJS('JavaScript', function() {
//     console.log('I took this lesson!');
// });