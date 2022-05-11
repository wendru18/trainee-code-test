class MovieAPI {
	constructor(movies) {
		this.movies = movies;
        this.initMovies();
	}

    // When instantiating the class with the imported movies.json file, add an “id” and a random “rating” from 1 to 5 for each movie before storing it.
    initMovies(){
        for(var movie_id in this.movies){
            var movie = this.movies[movie_id]
            movie.id = movie_id;
            movie.rating = Math.floor(Math.random() * (5) + 1)
        }
    }

	fetchAllMovies(){
		return this.movies;
	}

    // A method that returns movies from a certain genre.
    fetchMoviesFromGenre(wanted_genre){
        return this.movies.filter(function(obj) {
            var movie_genre = obj["genre"].toLowerCase();
            wanted_genre = wanted_genre.toLowerCase();

            return movie_genre == wanted_genre;
        });
    }

    // A method that removes a movie with a certain id (if found).
    removeMovie(id){
        this.movies = this.movies.filter(function(obj) {
            return obj["id"] !== id;
        });
    }

    // A method that returns the movies with the subtitle and thumb properties filtered out.
    filterSubtitleThumb(){
        var properties = ["thumb", "subtitle"]
        return this.movies.filter(function(obj) {
            for(var prop in properties)
                delete obj[properties[prop]];
            return obj;
        });
    }
}

const moviesJson = require('./movies.json');
const API = new MovieAPI(moviesJson);
var allMovies = API.fetchAllMovies();

const comedyMovies = API.fetchMoviesFromGenre("action");

API.removeMovie(id = "0");
allMovies = API.fetchAllMovies();

console.log(API.filterSubtitleThumb())

