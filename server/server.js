'use strict';

const express = require('express');
let movies = require('./movies.json');

// Constants
const PORT = 8000;
const HOST = '0.0.0.0';

// App
const app = express();
app.use(express.json());

app.get('/', (req, res) => {
  res.send('Play your movies on Viaplay!');
});

app.get('/movies', (req, res) => {
  res.json(movies);
});

//TODO Display a single item based on ID
app.get('/movies/:id', (req, res) => {
  const id = req.params.id;
  //try catch
  const fetchMovie = movies.filter(movie => movie.id == id);
  res.json(fetchMovie);
});

// TODO Create a new movie item with incremental ID
app.post('/movies', (req, res) => {
  const body = req.body;
  console.log(body);

  const maxId = movies.length > 0
    ? Math.max(...movies.map(movie => movie.id)) 
    : 0;

  const newMovie = {
    id: maxId + 1,
    description: body.description,
    sources: body.sources,
    subtitle: body.subtitle,
    thumb: body.thumb,
    title: body.title,
    genre: body.genre,
  };

  movies = movies.concat(newMovie);
  res.json(newMovie);
}); 

// TODO Delete a movie item based on ID
app.delete('/movies/:id', (req, res) => {
  const id = Number(req.params.id);
  movies = movies.filter(movie => movie.id !== id);

  res.status(204).end();

});

// TODO Update a movie item based on ID
app.put('/movies/:id', (req, res) => {
  const body = req.body;

  const updateId = Number(req.params.id);

  const newMovie = {
    id: updateId,
    description: body.description,
    sources: body.sources,
    subtitle: body.subtitle,
    thumb: body.thumb,
    title: body.title,
    genre: body.genre,
  };

  movies = movies.map(movie => 
    movie.id == updateId 
    ? newMovie : movie
  );

  res.json(movies);

});

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