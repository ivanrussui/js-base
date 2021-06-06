'use strict';

const personalMovieDB = {
  count: 0,
  movies: {},
  actors: [],
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
      // код будет выполняться не 2 раза, а в зависимости от кол-ва которое ввел пользователь
      // for (let i = 0; i < personalMovieDB.count; i++) {

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

  // пишу актеров
  rememberMyActors: function () {
    for (let i = 1; i <= 3; i++) {
      personalMovieDB.actors[i - 1] = prompt(`Актер под номером ${i}`);

      while (personalMovieDB.actors == '' || personalMovieDB.actors == null) {
        personalMovieDB.actors[i - 1] = prompt(`Актер под номером ${i}`);
      }
    }
    personalMovieDB.actors.forEach(function (item, i) {
      console.log(`Актер под номером #${i + 1} - это ${item}`);
    });
  },

  // другой вариант так как в writeYourGenres()
  // rememberMyActors: function () {
  // 	for (let i = 0; i < 1; i++) {
  // 		let actors = prompt('Введите любимых актеров фильмов');
  // 		// с мeтодом toUpperCase() нулл ниже не работает
  // 		// let actors = prompt('Введите имена актеров фильмов').toUpperCase();

  // 		if (actors === '' || actors == null) {
  // 			console.log('Имена актеров не приняты, попробуйте еще раз');
  // 			i--;
  // 		}	else {
  // 			personalMovieDB.actors = actors;
  // 		}
  // 	}
  // },

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

  writeYourGenres: function () {
    for (let i = 1; i < 2; i++) {
      let genres = prompt(`Введите ваши любимые жанры через запятую`);
      // с мeтодом toLowerCase() нулл ниже не работает
      // let genres = prompt(`Введите ваши любимые жанры через запятую`).toLowerCase();

      if (genres === '' || genres === null) {
        console.log('Вы ввели некорректные данные или не ввели их вовсе');
        i--;
      } else {
        personalMovieDB.genres = genres.split(', ');
        personalMovieDB.genres.sort();
      }
    }

    personalMovieDB.genres.forEach((item, i) => {
      console.log(`Любимый жанр #${i + 1} - это ${item}`);
    });
  },

  // альтернатива функции (объекта) выше, тут 3 жанра отдельно просит внести и нет метода сортировки
  // writeYourGenres: function () {
  //   for (let i = 1; i <= 3; i++) {
  //     personalMovieDB.genres[i - 1] = prompt(
  //       `Ваш любимый жанр под номером ${i}`
  //     );
  //     while (personalMovieDB.genres == '' || personalMovieDB.genres == null) {
  //       personalMovieDB.genres[i - 1] = prompt(
  //         `Ваш любимый жанр под номером ${i}`
  //       );
  //     }
  //   }
  //   personalMovieDB.genres.forEach(function (item, i) {
  //     console.log(`Любимый жанр #${i + 1} - это ${item}`);
  //   });
  // },
};

personalMovieDB.start();
personalMovieDB.rememberMyFilms();
personalMovieDB.detectPersonalLevel();

// написал актеров
personalMovieDB.rememberMyActors();

// personalMovieDB.toggleVisibleMyDB();

// с аргументом ты не увидишь personalMovieDB в консоли так как toggleVisibleMyDB() его скрывает (если его поставить сверху), а без него с или без аргумента не имеет значения, так как toggleVisibleMyDB() идет ниже по коду
personalMovieDB.showMyDB(personalMovieDB.privat);
// personalMovieDB.showMyDB();

personalMovieDB.toggleVisibleMyDB();
personalMovieDB.writeYourGenres();
