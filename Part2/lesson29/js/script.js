'use strict';

const box = document.getElementById('box'),
	  btns = document.getElementsByTagName('button'),
	  circles = document.getElementsByClassName('circle'),
	  wrapper = document.querySelector('.wrapper'),
	  hearts = wrapper.querySelectorAll('.heart'),
//	  hearts = document.querySelectorAll('.heart'),
	  oneHeart = wrapper.querySelector('.heart');
//	  oneHeart = document.querySelector('.heart');
	 
console.dir(box); // element as object in browser - we can see all properties and methods this object

// box.style.backgroundColor = 'blue';
// box.style.width = '500px';

box.style.cssText = `background-color: blue; width: 500px`;
btns[1].style.borderRadius = '100%';
circles[0].style.backgroundColor = 'red';

// this cycle is used very rarely
// for(let i = 0; i < hearts.length; i++) {
//	hearts[i].style.backgroundColor = 'blue';
// }

hearts.forEach(item => {
	item.style.backgroundColor = 'blue';
});

const div = document.createElement('div');
// this method is used very rarely
// const text = document.createTextNode('I was hear');

div.classList.add('black'); // style.css have 'black'
// document.body.append('div');

// document.querySelector('.wrapper').append(div);

wrapper.append(div); // insert in to end parent
// wrapper.appendChild(div); // deprecated method

// wrapper.prepend(div); // insert at the beginning of the parent

// hearts[0].before(div);
// hearts[0].after(div);

// wrapper.insertBefore(div, hearts[1]); // deprecated method

// circles[0].remove();
//wrapper.removeChild(hearts[1]);
hearts[0].replaceWith(circles[0]);
// wrapper.replaceChild(circles[0], hearts[0]); // deprecated method

// div.innerHTML = "Hello World"; // for text and HTML (not for client - security)
div.innerHTML = "<h1>Hello World</h1>"; // for text and HTML (not for client - security)

// div.textContent = "Hello"; // for text only (for security - use for client)
// div.textContent = "<h1>Hello World</h1>"; // for text only (for security - use for client)

// div.insertAdjacentHTML("beforebegin", '<h2>hello</h2>');
// div.insertAdjacentHTML("afterbegin", '<h2>hello</h2>');

// div.insertAdjacentHTML("beforeend", '<h2>hello</h2>');
div.insertAdjacentHTML("afterend", '<h2>hello</h2>');