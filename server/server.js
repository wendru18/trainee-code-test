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
  const movie = req.params.id;
  res.json(movie);

  // try {
  //   res.send(await getOne(req.params.id));
  // } catch( error ) {
  //   res.send(error);
  // }
})

app.listen(PORT, HOST);
console.log(`Running on http://${HOST}:${PORT}`);