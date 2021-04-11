"use strict";

// const numberOfFilms = +prompt('How many movies have you watched?', '');

const personalMoviesDB = {
//	count = numberOfFilms,
    count = 0,
    movies: {},
    actors: {},
    genres: {},
    privat: false,

start: function() {
	personalMoviesDB.count = +prompt('How many movies have you watched?', '');
	while(personalMoviesDB.count == '' || personalMoviesDB.count == null || isNaN(personalMoviesDB.count)) {
		personalMoviesDB.count = +prompt('How many movies have you watched?', '');
	}
}
rememberMyFilms: function() {
    for(let i=0; i<2; i++) {
        const a = prompt('One of the last movies you watched?', ''),
                b = prompt('How mutch would you rate it?', '');

        if()
    }
}
};