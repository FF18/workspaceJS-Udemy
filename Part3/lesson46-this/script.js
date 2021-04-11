'use strict';

// function showThis() {
//     console.log(this);
// }
// showThis();

// 1) Reguler function
// function showThis(a, b) {
//     console.log(this);
//     function sum() {
//         console.log(this);
//         // return this.a + this.b;
//         return a + b;
//     }
//     console.log(sum());
// }
// showThis(4, 5);

// 2) Context
// const obj = {
//     a: 20,
//     b: 15,
//     sum: function() {
//        // console.log(this);
//        // that function, which starts up in method of object
//        function shout() {
//            console.log(this);
//        }
//        shout();
//     }
// };
// obj.sum();

// 3) new
// function User(name, id) {
//     this.name = name;
//     this.id = id;
//     this.human = true;
// }
// let ivan = new User('Ivan', 23);

// 4) methodes call and apply
function sayName(surname) {
    console.log(this);
    console.log(this.name + surname);
}

const user = {
    name: 'John'
};

sayName.call(user, 'Smith');
sayName.apply(user, ['Smith']);

// 4) another method bind
// function count(num) {
//     return this*num;
// }

// const double = count.bind(2);
// console.log(double(3));
// console.log(double(13));

// Ways to call functions:
// 1) Reguler function: this = window, but if write 'use strict' - undefined.
// 2) Context about methodes object - the object itself.
// 3) This in constructors and classes - this is a new instance of an object.
// 4) Manual binding 'this': call, apply, bind.

// const btn = document.querySelector('button');
// btn.addEventListener('click', function() {
//     // console.log(this); // call context - the element itself on which the event occurred (this = event.target)
//     this.style.backgroundColor = 'red';
// });

// const btn = document.querySelector('button');
// btn.addEventListener('click', () => {
//     // console.log(this); // call context - the element itself on which the event occurred (this = event.target)
//     this.style.backgroundColor = 'red';
// });

const btn = document.querySelector('button');
btn.addEventListener('click', (e) => {
    // console.log(this); // call context - the element itself on which the event occurred (this = event.target)
    e.target.style.backgroundColor = 'red';
});



// an arrow function has no context of its own. She takes it from her parent
const obj = {
    num: 5,
    sayNumber: function() {
        const say = () => {
            console.log(this.num);
        };
        say();
    }
};
obj.sayNumber();

// const double = (a) => {
//     return a*2;
// };

const double = a => a*2;

console.log(double(4));