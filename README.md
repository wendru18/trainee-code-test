# Tech Trainee Code Test

We are interested in the quality of the implementation rather than the number of features. We value originality and creativity. The application and the code should be of such quality so that it can be read and maintained by other developers.


Your task is to create a Movie API written as a class using JavaScript that should perform/offer a certain set of methods (listed below). You are to put around **1 hour** on this project. How you solve it is eventually up to you. We will look at everything from readable code, documentation, minimal code duplication, error handling, etc.


You will receive a JSON file containing movie objects, which should be used as input when instantiating the Movie API. Write your code inside the index.js file. An example of how such a class could look like:

```javascript
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

### Finish the REQUIRED tagged line and at least 6 of the methods on lines 2 to 11 below:
1. (REQUIRED) When instantiating the class with the imported movies.json file, add an “id” and a random “rating” from 1 to 5 for each movie before storing it.
2. A method that returns movies from a certain genre.
3. A method that removes a movie with a certain id (if found).
4. A method that returns the movies with the subtitle and thumb properties filtered out.
5. A method that returns the movies sorted by name.
6. A method that returns the 2 top rated movies and 2 bottom rated movies.
7. A method that prints out the three top rated movies.
8. A method that prints out movies sorted from bottom rated to top rated.
9. A method that allows the user to add a new movie object to the movie list (supply all properties but the “id” and “rating”. The “id” and “rating” properties should be added internally by the method.
10. A method that returns a movie with a certain id (if found).
11. A method that changes the title of a movie with a certain id (if found). The updated title should be sent in as an argument to the method.

When you are done, upload your files to a github repo and send that link to us in an email. Please also write down the amount of time you've spent on this.
