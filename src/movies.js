// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors. How could you "clean" a bit this array and make it unified (without duplicates)?


function getAllDirectors(array) {

    let newArray = array.map((movie) => movie.director);
    return newArray;

}
// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?

function howManyMovies(array) {
    let spielbergMovies = array.filter(function (element) {
        return element.director === "Steven Spielberg" && element.genre.includes("Drama");
    })
    return spielbergMovies.length;
}

// Iteration 3: All rates average - Get the average of all rates with 2 decimals


function ratesAverage(array) {
    if (!array.length) return 0;
    let total = array.reduce((accumulator, currentValue) => {
        if (!currentValue.rate) {
            currentValue.rate = 0;
        }
        return accumulator + currentValue.rate;
    }, 0);
    return +(total / array.length).toFixed(2);
}


// Iteration 4: Drama movies - Get the average of Drama Movies

function dramaMoviesRate(array) {
    let total = array.filter((element) => element.genre.includes("Drama"));
    if (!total.length) return 0;
    let sum = total.reduce((accumulator, currentValue) => accumulator + currentValue.rate, 0);
    return +(sum / total.length).toFixed(2);
}

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)

function orderByYear(array) {
    let newArray = array.sort((a, b) => {
        if (a.year - b.year === 0) {
            return a.title.localeCompare(b.title);
        } else {
            return a.year - b.year;
        }
    });
    return [...newArray];
}

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles

function orderAlphabetically(array) {
    let mutableArray = [...array];
    let sorted = mutableArray.sort((a, b) => a.title.localeCompare(b.title));
    let newArray = [];
    for (let i = 0; i < 20; i++) {
        if (i < mutableArray.length) {
            newArray.push(sorted[i].title)
        }
    }
    return newArray;
}

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes

function turnHoursToMinutes(array){
    let minutes = 0;
    let mutableArray = array.slice();
    mutableArray.forEach((movie) =>{
        let duration = movie.duration;
        let dividedString = duration.toString().split(" ");
        console.log(dividedString);
        if(dividedString[0].includes("h") && dividedString[1]){
            minutes = (parseInt(dividedString[0]) * 60) + parseInt(dividedString[1]);
        }else if(dividedString[0].includes("min")){
            dividedString[0].replace("min", "");
            minutes = parseInt(dividedString[0]);
        }else{
            minutes = parseInt(dividedString[0]) * 60;
        }
        movie.duration = minutes;
    })

    return mutableArray;
}


// BONUS - Iteration 8: Best yearly rate average - Best yearly rate average

function bestYearAvg(array){
    if(!array.length) return null;
    let years = {};
    array.forEach((movie) =>{
        if(!years.hasOwnProperty(movie.year)){
            years[movie.year] = [];
            years[movie.year].push(movie.rate);
        }else{
            years[movie.year].push(movie.rate);
        }
    })
    

}



