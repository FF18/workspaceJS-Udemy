"use strict";

// +: that mean to take answer how number
const numberOfFilms = +prompt('How many movies have you watched?', '');

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

const a = prompt('One of the last movies you watched?', ''),
      b = prompt('How mutch would you rate it?', ''),
      c = prompt('One of the last movies you watched?', ''),
      d = prompt('How mutch would you rate it?', '');

personalMovieDB.movies[a] = b;
personalMovieDB.movies[c] = d;

console.log(personalMovieDB);