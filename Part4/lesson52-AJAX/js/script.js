'use strict';

// retrieving data from a page
const inputRub = document.querySelector('#rub'),
      inputUsd = document.querySelector('#usd');
      
      // event handler 'input'
      inputRub.addEventListener('input', () => {
        // browser request
        const request = new XMLHttpRequest();

        // Methods of object XMLHttpRequest
        // this method collects settings that will help make a request in the future
        // request.open(method, url, async, login, pass);
        request.open('GET', 'js/current.json');
        request.setRequestHeader('Content-type', 'application/json; charset=utf-8');
        request.send(); // this operation is asynchronous
		
		// status ready request for now moment
		// request.addEventListener('readystatechange', () => {
			// if(request.readyState === 4 && request.status === 200) {
				// console.log(request.response);
				// const data = JSON.parse(request.response);
				// inputUsd.value = (+inputRub.value / data.current.usd).toFixed(2);
			// } else {
				// inputUsd.value = "Samsing not good";
			// }
		// });
		
				request.addEventListener('load', () => {
			if(request.status === 200) {
				console.log(request.response);
				const data = JSON.parse(request.response);
				inputUsd.value = (+inputRub.value / data.current.usd).toFixed(2);
			} else {
				inputUsd.value = "Samsing not good";
			}
		});

        // Properties of object XMLHttpRequest
        // we get a response from the server and do something with it
        // status: codes answer from server - codes 200, 404 and etc.
        // statusText: text description of codes answer's from server - OK, Not Found and etc.
        // response: answer from server (backend developer)
		// readyState: Loading, Done and etc.
		
		// Events of this object
		// ..............
		// readystatechange
		// load
      });