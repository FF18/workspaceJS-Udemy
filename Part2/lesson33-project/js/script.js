/* Задания на урок:

1) Реализовать функционал, что после заполнения формы и 
нажатия кнопки "Подтвердить" - 
новый фильм добавляется в список. Страница не должна 
перезагружаться.
Новый фильм должен добавляться в movieDB.movies.
Для получения доступа к значению input - обращаемся к нему 
как input.value;
P.S. Здесь есть несколько вариантов решения задачи, 
принимается любой, но рабочий.

2) Если название фильма больше, чем 21 символ - обрезать его 
и добавить три точки

3) При клике на мусорную корзину - элемент будет удаляться 
из списка (сложно)

4) Если в форме стоит галочка "Сделать любимым" - в консоль 
вывести сообщение: 
"Добавляем любимый фильм"

5) Фильмы должны быть отсортированы по алфавиту */

'use strict';

document.addEventListener('DOMContentLoaded', () => {
	
// Код из предыдущей практики lesson 30 - начало
const movieDB = {
    movies: [
        "Логан",
        "Лига справедливости",
        "Ла-ла лэнд",
        "Одержимость",
        "Скотт Пилигрим против..."
    ]
};

const adv = document.querySelectorAll('.promo__adv img'),
	poster = document.querySelector('.promo__bg'),
	genre = poster.querySelector('.promo__genre'),
	movieList = 
document.querySelector('.promo__interactive-list'),
// lesson 33
addForm = document.querySelector('form.add'),
addInput = addForm.querySelector('.adding__input'),
// from atribute []
checkbox = addForm.querySelector('[type="checkbox"]');

addForm.addEventListener('submit', (event) => {
	// ajax - not refresh page (wright in beginning only)
	event.preventDefault();
	
	// input from customer
	let newFilm = addInput.value;
	// 4) галочка "Сделать любимым"
	const favorite = checkbox.checked;
	
	if (newFilm) {
		// 2) Если название фильма больше, чем 21 символ
		if (newFilm.length > 21) {
			newFilm = `${newFilm.substring(0, 22)}...`;
		}
			// input in DB and will sort
	// All information will in string view from customer
	movieDB.movies.push(newFilm);
	sortArr(movieDB.movies);
	// moviieDB.movies.sort();
	
	createMovieList(movieDB.movies, movieList);
	}
	
	// input in DB and will sort
	// All information will in string view from customer
//	movieDB.movies.push(newFilm);
//	sortArr(movieDB.movies);
	// moviieDB.movies.sort();
	
//	createMovieList(movieDB.movies, movieList);
	
	event.target.reset();
	// addForm.reset();
});
	
	const deleteAdv = (arr) => {
		arr.forEach(item => {
			item.remove();
		});
	};
	
//	deleteAdv(adv);
	
// adv.forEach(item => {
//	item.remove();
// });

// genre.textContent = "ДРАМА";

// poster.style.backgroundImage = 'url("img/bg.jpg")';

const makeChanges = () => {
	genre.textContent = "ДРАМА";

	poster.style.backgroundImage = 'url("img/bg.jpg")';
};

// makeChanges();

const sortArr = (arr) => {
	arr.sort();
};

// sortArr(movieDB.movies);

// movieList.innerHTML = "";

// movieDB.movies.sort();

// movieDB.movies.forEach((film, i) => {
//	movieList.innerHTML += `
//		<li class="promo__interactive-item">${i + 1} ${film}
//			<div class="delete"></div>
//		</li>
//	`;
// });
// Код из предыдущей практики - конец

// lesson 33

// movieDB.movies.sort();
// to reuse a block of code, create a function
function createMovieList(films, parent) {
	parent.innerHTML = "";
	// movieList.innerHTML = "";

	// movieDB.movies.forEach((film, i) => {
	films.forEach((film, i) => {
		// movieList.innerHTML += `
		parent.innerHTML += `
			<li class="promo__interactive-item">${i + 1} ${film}
				<div class="delete"></div>
			</li>
		`;
	});
}
	
	// calling all functions that were declared above
	deleteAdv(adv);
	makeChanges();
	sortArr(movieDB.movies);
	createMovieList(movieDB.movies, movieList);

});


