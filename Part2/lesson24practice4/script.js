"use strict";

const personalMovieDB = {
    count = 0,
    movies: {},
    actors: {},
    genres: [],
    privat: false
	
start: function() {
    personalMovieDB.count = +prompt('How many movies have you watched?', '');
    
    while (personalMovieDB.count == '' || personalMovieDB.count == null || isNaN(personalMovieDB.count)) {
        personalMovieDB.count = +prompt('How many movies have you watched?', '');
    }
},

rememberMyFilms: function() {
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
    }
},

// rememberMyFilms();
detectPersonalLevel: function() {
    if (personalMovieDB.count < 10) {
        console.log('not enough watched');
    }else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
        console.log('you good watcher');
    }else if (personalMovieDB.count >= 30) {
        console.log('you movie fan')
    }else {
        console.log('mistake');
    }
},

// detectPersonalLevel();
showMyDB: function(hidden) {
    if(!hidden) {
        console.log(personalMovieDB);
    }
},

toggleVisibaleMyDB: function() {
	if(personalMovieDB.privat) {
		personalMovieDB = false;
	} else {
		personalMovieDB.privat = true;
	}
},

// writeYourGenres: function() {
    // for(let i=1; i <= 3; i++) {
       // personalMovieDB.genres[i-1] = prompt(`What genres are you like? ${i}`);
    // }
// }

writeYourGenres: function() {
    for(let i=1; i < 2; i++) {
		let genre = prompt(`What genres are you like? ${i}`);
		if(genre === '' || genre == null) {
			console.log('Your data is not correct');
			i--;
		} else {
		personalMovieDB.genres[i-1] = genre; 	
		}
		
		// alternative variant
		
		
		let genres = prompt(`What genres are you like? ${i}`);
		
		if(genres === '' || genres == null) {
			console.log('Your data is not correct');
			i--;
		} else {
			personalMovieDB.genres == genres.split(', ');
			personalMovieDB.genres.sort();
		}
    }
	
	personalMovieDB.genres.forEach((item, i) => {
		console.log(`Your faivorite genre ${i + 1} - this ${item}`);
	});
}
};
