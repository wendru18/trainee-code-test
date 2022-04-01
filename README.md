# Tech Trainee Code Test

We are interested in the quality of the implementation rather than the quantity of features. We value originality and creativity. The application and the code should be of such quality so that it can be read and maintained by other developers.


Your task is to create a Movie API as a “class” that should perform/offer a certain set of methods (listed below). You are to put around **1 hour** on this project. Since it’s listed as a 'must have' on the application you will have to write this using JavaScript. How you solve it is eventually up to you. We will look at everything from code style, documentation, DRY principles, error handling etc. If you are adding tests, then you can use whichever testing framework you’d like, but we recommend [Jest](https://jestjs.io/).


You will receive a JSON file containing movie objects, which should be used as input when instantiating the Movie API. Write your code inside the index.js file. Example of how the instantiation could look like: 

```javascript
// index.js
const moviesJson = require('./movies.json');
class MovieAPI {
	constructor(movies) {
		this.movies = movies;
	}

	fetchAllMovies(){
		return this.movies;
	}
}


const API = new MovieAPI(moviesJson);
const allMovies = API.fetchAllMovies();
```

### Finish at least 6 of the methods on line 2 to 9 below:
1. (REQUIRED) When instantiating the class with the imported movies.json file, add an “id” and a random “rating” from 1-5 for each movie before storing it
2. A method that returns movies from a certain genre
3. A method that removes a movie with a certain id (if found)
4. A method that returns the movies with the subtitle and thumb properties filtered out
5. A method that returns the movies sorted by name
6. A method that returns the 2 top rated movies and 2 bottom rated movies
7. A method that prints out the three top rated movies
8. A method that prints out movies sorted from lowest rated to top rated.
9. A method that allows the user to add a new movie object to the movie list (supply all properties but the “id” and “rating”. The “id” and “rating” properties should be added internally by the class-method.
