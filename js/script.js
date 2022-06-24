
'use strict';

let numberOfFilms;

function start(){
    numberOfFilms = prompt("Сколько фильмов вы уже посмотрели?", '');

    while(numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)){
        numberOfFilms = prompt("Сколько фильмов вы уже посмотрели?", '');
    }
}
start();

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

/* let nameOfFilm = prompt("Один из последних просмотреных фильмов?",'');
let markOfFilm = prompt("На сколько оцените его?",'');
let nameOfFilm2 = prompt("Один из последних просмотреных фильмов?",'');
let markOfFilm2 = prompt("На сколько оцените его?",'');
personalMovieDB.movies[nameOfFilm] = markOfFilm;
personalMovieDB.movies[nameOfFilm2] = markOfFilm2;
console.log(personalMovieDB); */



function rememberMyFilms(){
    metka: for(let i = 0; i < 2; i++){
        let nameOfFilm = prompt("Один из последних просмотреных фильмов?",'');
        let markOfFilm = prompt("На сколько оцените его?",'');
    
        if(nameOfFilm == '' || markOfFilm == '' || nameOfFilm === null || markOfFilm === null || nameOfFilm.length > 50 ) {
            i--;
            continue metka;
        }
    
        personalMovieDB.movies[nameOfFilm] = markOfFilm;
    }
}

rememberMyFilms();

function detectPersonalLevel(){
    if (personalMovieDB.count < 10){
        console.log("Просмотерно довольно мало фильмов");
    } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30){
        console.log("Вы классический зритель");
    } else if (personalMovieDB.count >= 30){
        console.log("Вы киноман");
    } else{
        console.log("Произошла ошибка");
    }
}

detectPersonalLevel();

function showMyDB(hidden){
    if (!hidden){
        console.log(personalMovieDB);
    }
}

showMyDB(personalMovieDB.privat);

function writeYourGenres(){
    for(let i = 0; i < 3; i++){
        personalMovieDB.genres[i] = prompt(`Ваш любимый жанр под номером ${i+1} `,'');
    }
}
 writeYourGenres();