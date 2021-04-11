"use strict";

const numberOfFilms = +prompt('How many movies have you watched?', '');

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

for (let i=0; i<2; i++) {
    const a = prompt('One of the last movies you watched?', ''),
          b = prompt('How mutch would you rate it?', '');

    if (a != null && b != null && a != '' && b != '' && a.length < 50) {
          personalMovieDB.movies[a] = b;
          console.log('done');
    }else {
        console.log('error');
        i--;
    }

// let j = 0;
// while (j < 2) {
//     const a = prompt('One of the last movies you watched?', ''),
//           b = prompt('How mutch would you rate it?', '');
//           j++;

//     if (a != null && b != null && a != '' && b != '' && a.length < 50) {
//           personalMovieDB.movies[a] = b;
//           console.log('done');
//     }else {
//         console.log('error');
//         j--;
// }

let j = 0;
while (j < 2) {
    const a = prompt('One of the last movies you watched?', ''),
          b = prompt('How mutch would you rate it?', '');
          j++;

    if (a != null && b != null) {
          personalMovieDB.movies[a] = b;
          console.log('done1');
    }else if (a != '' && b != '') {
            personalMovieDB.movies[a] = b;
            console.log('done2');
    }else if (a.length < 50) {
        personalMovieDB.movies[a] = b;
        console.log('done3');
    }else {
        console.log('error');
        j--;
}


    if (personalMovieDB.count < 10) {
        console.log('not enough watched');
    }else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
        console.log('you good watcher');
    }else if (personalMovieDB.count >= 30) {
        console.log('you movie fan')
    }else {
        console.log('mistake');
    }
}

console.log(personalMovieDB);