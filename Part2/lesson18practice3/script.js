"use strict";

let numberOfFilms;

function start() {
	numberOfFilms = +prompt('How many films are you looked yet?', '');
	
	while(numberOfFilms == '' || numberOfFilms == null | isNaN(numberOfFilms) == true) {
		numberOfFilms = +prompt('How many films are you looked yet?', '');
	}
}

start();

const personalMovieDB = {
	count: numberOfFilms,
	movies: {},
	actors: {},
	genres: {},
	privat: false,
};

for(let i = 0; i < 2; i++) {
	const a = prompt('One last film?', ''),
		  b = prompt('how mutch are you think?', '');
    if(a != null && b != null && a != '' && b != '' && a.length < 50) {
		personalMovieDB.movies[a] = b;
		console.log(done);
	} else {
		console.log(error);
		i--;
	}
}

function detectPersonalLevel() {
	if(personalMovieDB.count < 10) {
		console.log("Are you watched many films?");
	} else if(personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
		console.log('You classic');
	} else if(personalMovieDB.count >= 30) {
		console.log('You movie fan');
	} else {
		console.log('mistake');
	}
}

detectPersonalLevel();

function showMyDB(hidden) {
	if(!hidden) {
		console.log(personalMovieDB);
	}
	
}

showMyDB(personalMovieDB);

function writeYourGenres() {
	for(let i = 1; i <= 3; i++) {
		personalMovieDB.genres [i-1] = prompt(`What genres are you like? ${i}`);
	}
}

writeYourGenres();