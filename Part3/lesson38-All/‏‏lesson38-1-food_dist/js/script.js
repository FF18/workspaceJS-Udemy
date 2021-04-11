"use strict";


window.addEventListener('DOMContentLoaded', () => {
	
	// It is possible to register a 'document' instead of a window
	const tabs = document.querySelectorAll('.tabheader__item'),
		tabsContent =  document.querySelectorAll('.tabcontent'),
		tabsParent = document.querySelector('.tabheader__items');
		
		function hideTabContent() {
			tabsContent.forEach(item => {
				item.style.display = 'none';
			});
			
			tabs.forEach(item => {
				item.classList.remove('tabheader__item_active');
			});
		}
		
		function showTabContent(i = 0) {
			tabsContent[i].style.display = 'block';
			tabs[i].classList.add('tabheader__item_active');
		}
		
		hideTabContent();
		showTabContent();
		
		tabsParent.addEventListener('click', (event) => {
			const target = event.target;
			
			if(target && target.classList.contains('tabheader__item')) {
				// mistake
				tabs.forEach((item, i) => {
					if (target == item) {
						hideTabContent();
						showTabContent(i);
					}
				});
			}
		});
});