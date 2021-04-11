"use strict";

// const timeId = setTimeout(function(text) {
	// console.log(text);
// }, 2000, 'Hello');

const btn = document.querySelector('.btn');
let timeId,
	i = 0;

// recursion
function myAnimation() {
	const elem = document.querySelector('.box');
	let pos = 0;
	
	const id = setInterval(frame, 10);
	function frame() {
		if (pos == 300) {
			clearInterval(id);
		} else {
			pos++;
			elem.style.top = pos + "px";
			elem.style.left = pos + "px";
		}
	}
}

btn.addEventListener('click', myAnimation);

// btn.addEventListener('click', () => {
	// // const timeId = setTimeout(logger, 2000);
	// timeId = setInterval(logger, 500);
// });



// function logger () {
	// if (i === 3) {
		// clearInterval(timeId);
	// }
	// console.log('text');
	// i++;
// }

// let id = setTimeout(function log(){
	// console.log('Hello');
	// id = setTimeout(log, 500);
// }, 500);