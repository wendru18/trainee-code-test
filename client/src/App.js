import './App.css';
import MovieForm from './components/MovieForm';
import useFetch from './hooks/useFetch';

function App() {
  const { fetchData, data } = useFetch();

  const handleClick = (e) => {
    e.preventDefault();
    fetchData('http://0.0.0.0:8000/movies');
  }
  return (
    <div className="App">
      <header className="App-header">
        Display the available movies:
      </header>
      {data !== null && <ul>
        {data.map(movie => {
          return (
            <li key={movie.id}>
              <h4>{movie.title}</h4>
              <p>{movie.description}</p>
              <p>{movie.sources[0]}</p>
              <p>{movie.subtitle}</p>
              <p>{movie.thumb}</p>
              <p>{movie.genre}</p>
            </li>
          )
        })}
      </ul>}
      <button onClick={handleClick}>
        Fetch movie titles
      </button>
      <br />
      <MovieForm />
    </div>
  );
}

export default App;
