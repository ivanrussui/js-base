'use strict';

// let numberOfFilms;

// function start() {
// 	numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');

// 	while (numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)) {
// 		numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');
// 	}
// }

// start();

const personalMovieDB = {
  count: 0,
  movies: {},
  actors: {},
  genres: [],
  privat: false,
  start: function () {
    personalMovieDB.count = +prompt('Сколько фильмов вы уже посмотрели?', '');

    while (
      personalMovieDB.count == '' ||
      personalMovieDB.count == null ||
      isNaN(personalMovieDB.count)
    ) {
      personalMovieDB.count = +prompt('Сколько фильмов вы уже посмотрели?', '');
    }
  },

  rememberMyFilms: function () {
    for (let i = 0; i < 2; i++) {
      const a = prompt('Один из просмотренных фильмов?', ''),
        b = prompt('На сколько оцените его?', '');

      if (a != null && b != null && a != '' && b != '' && a.length < 50) {
        personalMovieDB.movies[a] = b;
        console.log('done');
      } else {
        console.log('err');
        i--;
      }
    }
  },

  detectPersonalLevel: function () {
    if (personalMovieDB.count < 10) {
      console.log('Просмотрено довольно мало фильмов');
    } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
      console.log('Вы классический зритель');
    } else if (personalMovieDB.count >= 30) {
      console.log('Вы киноман');
    } else {
      console.log('Произошла ошибка');
    }
  },

  showMyDB: function (hidden) {
    if (!hidden) {
      console.log(personalMovieDB);
    }
  },

  toggleVisibleMyDB: function () {
    if (personalMovieDB.privat) {
      personalMovieDB.privat = false;
    } else {
      personalMovieDB.privat = true;
    }
  },

  // writeYourGenres: function () {
  //   for (let i = 1; i <= 3; i++) {
  //     personalMovieDB.genres[i - 1] = prompt(
  //       `Ваш любимый жанр под номером ${i}`
  //     );
  //     while (personalMovieDB.genres == '' || personalMovieDB.genres == null) {
  //       personalMovieDB.genres[i - 1] = prompt(`Ваш любимый жанр под номером ${i}`);
  //     }
  //   }
  // 	personalMovieDB.genres.forEach(function (item, i) {
  // 		console.log(`Любимый жанр #${i + 1} - это ${item}`);
  // 	});
  // },
  writeYourGenres: function () {
    for (let i = 1; i < 2; i++) {
      // let genre = prompt(`Ваш любимый жанр под номером ${i}`);

      // if (genre === '' || genre == null) {
      //   console.log('Вы ввели некорректные данные или не ввели их вовсе');
      //   i--;
      // } else {
      //   personalMovieDB.genres[i - 1] = genre;
      // }

			let genres = prompt(`Введите ваши любимые жанры через запятую`).toLowerCase();

			if (genres === '' || genres == null) {
        console.log('Вы ввели некорректные данные или не ввели их вовсе');
        i--;
			}	else {
				personalMovieDB.genres = genres.split(', ');
				personalMovieDB.genres.sort();
			}
    }

    personalMovieDB.genres.forEach((item, i) => {
      console.log(`Любимый жанр #${i + 1} - это ${item}`);
    });
  },
};

// personalMovieDB.start();
// personalMovieDB.rememberMyFilms();

// personalMovieDB.detectPersonalLevel();
// personalMovieDB.showMyDB(personalMovieDB.privat);
// personalMovieDB.toggleVisibleMyDB();
// personalMovieDB.writeYourGenres();

// function rememberMyFilms() {
//   for (let i = 0; i < 2; i++) {
//     const a = prompt('Один из просмотренных фильмов?', ''),
//       b = prompt('На сколько оцените его?', '');

//     if (a != null && b != null && a != '' && b != '' && a.length < 50) {
//       personalMovieDB.movies[a] = b;
//       console.log('done');
//     } else {
//       console.log('err');
//       i--;
//     }
//   }
// }

// rememberMyFilms();

// function detectPersonalLevel() {
//   if (personalMovieDB.count < 10) {
//     console.log('Просмотрено довольно мало фильмов');
//   } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
//     console.log('Вы классический зритель');
//   } else if (personalMovieDB.count >= 30) {
//     console.log('Вы киноман');
//   } else {
//     console.log('Произошла ошибка');
//   }
// }

// detectPersonalLevel();

// function showMyDB(hidden) {
//   if (!hidden) {
//     console.log(personalMovieDB);
//   }
// }

// showMyDB(personalMovieDB.privat);

// function writeYourGenres() {
//   for (let i = 1; i <= 3; i++) {
//     personalMovieDB.genres[i - 1] = prompt(`Ваш любимый жанр под номером ${i}`);
//   }
// }

// writeYourGenres();

// альтернатива showMyDB без аргумента
// function showMyDB() {
// 	if (personalMovieDB.privat == false) {
// 		console.log(personalMovieDB);
// 	} else {
// 		console.log('privat == true');
// 	}
// }

// showMyDB();

// вторым циклом
// let i = 0;
// while (i < 2) {
// 	i++;
//   const a = prompt('Один из просмотренных фильмов?', ''),
//     b = prompt('На сколько оцените его?', '');

//   if (a != null && b != null && a != '' && b != '' && a.length < 50) {
//     personalMovieDB.movies[a] = b;
//     console.log('done');
//   } else {
//     console.log('err');
//     i--;
//   }
// }

// третьим циклом
// let i = 0;
// do {
// 	i++;
//   const a = prompt('Один из просмотренных фильмов?', ''),
//     b = prompt('На сколько оцените его?', '');

//   if (a != null && b != null && a != '' && b != '' && a.length < 50) {
//     personalMovieDB.movies[a] = b;
//     console.log('done');
//   } else {
//     console.log('err');
//     i--;
//   }
// }
// while (i < 2);
