class MovieAPI {

    // Initialise movie list, mantain a list of properties which are characterised by strings
	constructor(movies) {
		this.movies = movies;
        this.initMovies();
        this.stringProperties = ["title", "description", "subtitle", "thumb", "genre"]
	}

    // For every movie, init with string ID (based on index) and allocate mock rating
    initMovies(){
        for(var movie_id in this.movies){
            var movie = this.movies[movie_id]
            movie.id = movie_id;
            movie.rating = Math.floor(Math.random() * (5) + 1)
        }
    }

    // Mock standardise function - in this case, it simply lowercases string properties
    standardise(p, v){
        if(this.stringProperties.includes(p))
            return v.toLowerCase();
        return v;
    }

	fetchAllMovies(){
		return this.movies;
	}

    // Fetch all movies with value for property
    fetchMovies(property, value){
        return this.movies.filter(x => this.standardise(property, x[property]) == this.standardise(property, value));
    }

    // Remove movie from API with ID
    removeMovie(id){
        this.movies = this.movies.filter(x => { return x["id"] !== id });
    }

    // Filter properties from movies
    filter(properties){
        return this.movies.filter(x => {
            for(var prop in properties)
                delete x[properties[prop]];
            return x;
            }
        );
    }

    // A method that returns the movies sorted by property in order, where 0 -> ascending, 1 -> descending
    sort(property, order){
        return this.movies.sort((a, b) => {
            var movie_a = this.standardise(property, a[property]);
            var movie_b = this.standardise(property, b[property]);
            if(order)
                return (movie_a < movie_b) ? - 1 : (movie_a > movie_b) ? 1 : 0;
            else
                return (movie_a > movie_b) ? - 1 : (movie_a < movie_b) ? 1 : 0;
        });
    }


}

//! Please uncomment code from each sub-task. Tack!

const moviesJson = require('./movies.json');

//* 1. (REQUIRED) When instantiating the class with the imported movies.json file, add an “id” and a random “rating” from 1 to 5 for each movie before storing it.
const API = new MovieAPI(moviesJson);

//* 2. A method that returns movies from a certain genre.

// actionMovies = API.fetchMovies(property = "genre", value = "action");
// console.log(actionMovies)

//* 3. A method that removes a movie with a certain id (if found).

// var allMovies = API.fetchAllMovies();
// console.log(allMovies[0]["title"]);
// API.removeMovie(id = "0");

// allMovies = API.fetchAllMovies();
// console.log(allMovies[0]["title"]);

//* 4. A method that returns the movies with the subtitle and thumb properties filtered out.

// fitleredMovies = API.filter(["thumb", "subtitle"]);
// console.log(fitleredMovies);

//* 5. A method that returns the movies sorted by name.

// sortedMoviesByName = API.sort("name", 0);
// console.log(sortedMoviesByName);

//* 6. A method that returns the 2 top rated movies and 2 bottom rated movies.

// sortedMovies = API.sort("rating", 0);
// console.log(sortedMovies.slice(0, 2));
// console.log(sortedMovies.slice(-2));

//* 7. A method that prints out the three top rated movies.

// sortedMovies = API.sort("rating", 0);
// console.log(sortedMovies.slice(0, 3));
