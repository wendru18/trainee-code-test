'use strict';

const express = require('express');
const movies = require('./movies.json');

// Constants
const PORT = 8000;
const HOST = '0.0.0.0';

// App
const app = express();
app.get('/', (req, res) => {
  res.send('Hello World');
});

app.get('/movies', (req, res) => {
  res.json(movies);
});

//TODO Display a single item based on ID
app.get('/movies/:id', (req, res) => {
  const movieID = req.params.id;
  // console.log(movieID, movies)
  // res.json(movieID);
  try {
    const movie = getMovie(movieID)
    console.log('hej', movie)
    res.send(movie);
  } catch( error ) {
    res.send(error);
  }
})

const getMovie = (id) => {
  try {
    const movie = movies.filter(movie => movie.id === id)
    console.log('mov', movie)
    return movie;
  } catch(error) {
      console.log(`Cannot fetch restaurant with id: ${id} from db: ${error}`);
  }
};

app.listen(PORT, HOST);
console.log(`Running on http://${HOST}:${PORT}`);