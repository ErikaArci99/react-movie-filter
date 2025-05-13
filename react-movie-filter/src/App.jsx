import { useState, useEffect } from 'react'
import './App.css'

const movies = [
  { title: 'Inception', genre: 'Fantascienza' },
  { title: 'Il Padrino', genre: 'Thriller' },
  { title: 'Titanic', genre: 'Romantico' },
  { title: 'Batman', genre: 'Azione' },
  { title: 'Interstellar', genre: 'Fantascienza' },
  { title: 'Pulp Fiction', genre: 'Thriller' },
];

function App() {

  // variabile di stato per filtraggio
  const [filteredMovies, setFilteredMovies] = useState(movies);

  // variabile di stato
  const [genre, setGenre] = useState("");

  // logica della funzione di filtraggio
  useEffect(() => {
    if (genre !== '') {
      const selectedMovies = movies.filter(movie => movie.genre === genre);
      setFilteredMovies(selectedMovies);
    }
    else {
      // non filtro l array
      setFilteredMovies(movies);
    }
  }, [genre]);

  return (
    <>
      <div className="container text-center">
        <h1 className='mt-4'>Lista Film</h1>
        <div className="row mt-4">
          <div className="col-12">
            {/* selezione del genere */}
            <select className="form-select text-center" value={genre} onChange={(e) => setGenre(e.target.value)}>
              <option value="">Tutti i generi</option>
              <option value="Fantascienza">Fantascienza</option>
              <option value="Thriller">Thriller</option>
              <option value="Romantico">Romantico</option>
              <option value="Azione">Azione</option>
            </select>
            {/* ciclo array */}
            <ul className='list-group'>
              {filteredMovies.map((movie, index) => {
                return (<li key={index} className="list-group-item">
                  {movie.title} <em>{movie.genre}</em>
                </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
