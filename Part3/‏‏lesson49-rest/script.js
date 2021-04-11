'use strict';

const log = function(a, b, ...rest) {
	console.log(a, b, rest);
}

log('basic', 'rest', 'operator', 'usage');

// function calcOrDouble(number, basis) { // ES5
function calcOrDouble(number, basis = 2) { // ES6
	basis = basis || 2; // ES5
	console.log(number * basis);
}

calcOrDouble(3);