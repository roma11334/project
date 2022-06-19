const numberOfFilms = prompt("Сколько фильмов вы уже посмотрели?", '');
const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

let nameOfFilm = prompt("Один из последних просмотреных фильмов?",'');
let markOfFilm = prompt("На сколько оцените его?",'');
let nameOfFilm2 = prompt("Один из последних просмотреных фильмов?",'');
let markOfFilm2 = prompt("На сколько оцените его?",'');
personalMovieDB.movies[nameOfFilm] = markOfFilm;
personalMovieDB.movies[nameOfFilm2] = markOfFilm2;
console.log(personalMovieDB);
