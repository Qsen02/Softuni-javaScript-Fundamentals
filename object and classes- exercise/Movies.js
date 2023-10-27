function movieList(inputArray) {
    let movies = [];
    for (command of inputArray) {
        if (command.includes("addMovie")) {
            let token = command.split("addMovie ");
            let movieName = token.pop();
            let movieObj = { name: movieName };
            movies.push(movieObj);
        } else if (command.includes("directedBy")) {
            let token = command.split(" directedBy ");
            let movieName = token[0];
            let director = token[1];
            let movie = movies.find(movie => movie.name == movieName);
            if (movie) {
                movie.director = director;
            }
        } else if (command.includes("onDate")) {
            let token = command.split(" onDate ");
            let movieName = token[0];
            let date = token[1];
            let movie = movies.find(movie => movie.name == movieName);
            if (movie) {
                movie.date = date;
            }
        }
    }
    for (let movie of movies) {
        if (movie.hasOwnProperty("name") && movie.hasOwnProperty("director") && movie.hasOwnProperty("date")) {
            console.log(JSON.stringify(movie));
        }
    }
}
movieList([
    'addMovie Fast and Furious',
    'addMovie Godfather',
    'Inception directedBy Christopher Nolan',
    'Godfather directedBy Francis Ford Coppola',
    'Godfather onDate 29.07.2018',
    'Fast and Furious onDate 30.07.2018',
    'Batman onDate 01.08.2018',
    'Fast and Furious directedBy Rob Cohen'
])