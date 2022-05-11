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

    fetchMoviesFromGenre(wanted_genre){
        return this.movies.filter(function(obj) {
            var movie_genre = obj["genre"].toLowerCase();
            wanted_genre = wanted_genre.toLowerCase();

            return movie_genre == wanted_genre;
        });
    }
}

const moviesJson = require('./movies.json');
const API = new MovieAPI(moviesJson);
const allMovies = API.fetchAllMovies();

const comedyMovies = API.fetchMoviesFromGenre("action");
console.log(comedyMovies.length);