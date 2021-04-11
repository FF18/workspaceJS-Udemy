'use strict';

window.addEventListener('DOMContentLoaded', function() {
	
	// Tabs
	
	let tabs = document.querySelectorAll('.tabheader__item'),
		tabsContent = document.querySelectorAll('.tabcontent'),
		tabsParent = document.querySelector('.tabheader__items');
		
		function hideTabContent() {
			tabsContent.forEach(item => {
				item.classList.add('hide');
				item.classList.remove('show', 'fade');
			});
			
			tabs.forEach(item => {
				item.classList.remove('tabheader__item_active');
			});
		}
		
		function showTabContent(i = 0) {
			tabsContent[i].classList.add('show', 'fade');
			tabsContent[i].classList.remove('hide');
			tabs[i].classList.add('tabheader__item_active');
		}
		
		hideTabContent();
		showTabContent();
		
		tabsParent.addEventListener('click', function(event) {
			const target = event.target;
			if (target && target.classList.contains('tabheader__item')) {
				tabs.forEach((item, i) => {
					if (target == item) {
				hideTabContent();
				showTabContent(i);
			}
				});
			}
		});
		
		// Timer
		const deadline = '2020-11-25';
		
		function getTimeRemaining(endtime) {
			const t = Date.parse(endtime) - Date.parse(new Date()),
				days = Math.floor(t / (1000*60*60*24)),
				hours = Math.floor((t/1000/60/60) % 24),
				minutes = Math.floor((t/1000/60) % 60),
				seconds = Math.floor((t/1000) % 60);
				
				return {
					'total': t,
					'days': days,
					'hours': hours,
					'minutes': minutes,
					'seconds': seconds
				};
		}
		
		function getZero(num) {
			if(num >= 0 && num < 10) {
				return `0${num}`;
			} else {
				return num;
			}
		}
		
		function setClock(selector, endtime) {
			const timer =document.querySelector(selector),
				days = timer.querySelector('#days'),
				hours = timer.querySelector('#hours'),
				minutes = timer.querySelector('#minutes'),
				seconds = timer.querySelector('#seconds'),
				timeInterval = setInterval(updateClock, 1000);
				
			updateClock();
			
			function updateClock() {
				const t = getTimeRemaining(endtime);
				
				days.innerHTML = getZero(t.days);
				hours.innerHTML = getZero(t.hours);
				minutes.innerHTML = getZero(t.minutes);
				seconds.innerHTML = getZero(t.seconds);
				
				if(t.total <= 0) {
					clearInterval(timeInterval);
				}
			}
		}
		
		setClock('.timer', deadline);
		
		// Modal
		
		// [] for attributes
		const modalTrigger = document.querySelectorAll('[data-modal]'),
			modal = document.querySelector('.modal'),
			modalCloseBtn = document.querySelector('[data-close]');
			 
			 			 
			 function openModal() {
				 modal.classList.add('show');
				 modal.classList.remove('hide');
				 // modal.classList.toggle('show'); // alternative variant
				 document.body.style.overflow = 'hidden';
				 // if user opened modal window yourself, modalTimerId don't work
				 clearInterval(modalTimerId);
			 }
			 
				 modalTrigger.forEach(btn => {
				 btn.addEventListener('click', openModal);
			 });
			 
			 			 // modalTrigger.forEach(btn => {
				 // btn.addEventListener('click', () => {
				 // modal.classList.add('show');
				 // modal.classList.remove('hide');
				 // // modal.classList.toggle('show'); // alternative variant
				 // document.body.style.overflow = 'hidden';
				 // });
			 // });
			 
			 function closeModal() {
				 modal.classList.add('hide');
				 modal.classList.remove('show');
				 // modal.classList.toggle('show'); // alternative variant
				 document.body.style.overflow = '';
			 }

			 modalCloseBtn.addEventListener('click', closeModal);

			 // modalCloseBtn.addEventListener('click', () => {
				 // // modal.classList.add('hide');
				 // // modal.classList.remove('show');
				 // modal.classList.toggle('show'); // alternative variant
				 // document.body.style.overflow = '';
			 // });
			 
			 modal.addEventListener('click', (e) => {
				 if(e.target === modal) {
					closeModal();
				 }
			 });
			 
			 // modal.addEventListener('click', (e) => {
				 // if(e.target === modal) {
				 // // modal.classList.add('hide');
				 // // modal.classList.remove('show');
				 // modal.classList.toggle('show'); // alternative variant
				 // document.body.style.overflow = '';
				 // }
			 // });
			 
			 document.addEventListener('keydown', (e) => {
				 if(e.code === "Escape") {
					 closeModal();
				 }
			 });
			 
			 // Modal 2
			 const modalTimerId = setTimeout(openModal, 5000);
			 
			 window.addEventListener('scroll', () => {
				 if(window.pageXOffset + document.documentElement.clientHeight >= document.documentElement.scrollHeight) {
					 openModal();
				 }
			 });
});