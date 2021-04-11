'use strict';

// This is ES5 --> in ES6 used classes - that more comfortable
// constructor
function User(name, id) {
    this.name = name;
    this.id = id;
    this.human = true;
    // method
    this.hello = function() {
        console.log(`Hello ${this.name}`);
    };
}

User.prototype.exit = function() {
    console.log(`User ${this.name} went out`);
};

const ivan = new User('Ivan', 28);
const alex = new User('Alex', 20);

ivan.exit();

ivan.hello();
alex.hello();

console.log(ivan);
console.log(alex);