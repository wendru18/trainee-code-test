const cors = require('cors')
const express = require('express');
let movies = require('./movies.json');

// Constants
const PORT = 8000;
const HOST = '0.0.0.0';

// App
const app = express();
app.use(cors())
app.use(express.json());

// Routes
app.get('/', (req, res) => {
  res.send('Play your movies on Viaplay!');
});

app.get('/movies', (req, res) => {
  //@TODO return filtered movies by genre if requested by user, otherwise return all as done below
  //      look into query params, eg user might call endpoint http://<HOST>:<PORT>/movies?genre=Action
  res.json(movies);
});

app.get('/movies/:id', (req, res) => {
  const id = req.params.id;
  //@TODO Fetch a movie item based on ID
});


app.post('/movies', (req, res) => {
  const body = req.body;
  //@TODO Create a new movie item with incremental ID
}); 

app.delete('/movies/:id', (req, res) => {
  //@TODO Delete a movie item based on ID
});


app.put('/movies/:id', (req, res) => {
 //@TODO Update a movie item based on ID
});

/* catch accessing non-existent endpoints */
app.use((req, res) => {
  res.status(404).send({ error: "You tried to access an unknown endpoint!" });
});

// Run app
app.listen(PORT, HOST, () => {
  console.log(`Running on http://${HOST}:${PORT}`);
});
