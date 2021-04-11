'use strict';

// const persone = {
//     name: 'Alex',
//     tel: '+744444444'
// };

// console.log(JSON.stringify(persone));
// console.log(JSON.parse(JSON.stringify(persone)));

// deep copy
const persone = {
    name: 'Alex',
    tel: '+744444444',
    parents: {
        mom: 'Olga',
        dad: 'Mike'
    }
};

// deep copy
const clone = JSON.parse(JSON.stringify(persone));
clone.parents.mom = 'Ann';
console.log(persone);
console.log(clone);