import { useState } from 'react'
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

  return (
    <>
      <div className="container text-center">
        <h1 className='mt-4'>Lista Film</h1>
        <div className="row mt-4">
          <div className="col-12">
            {/* selezione del genere */}
            <select className="form-select text-center">
              <option value="">Tutti i generi</option>
              <option value="Fantascienza">Fantascienza</option>
              <option value="Thriller">Thriller</option>
              <option value="Romantico">Romantico</option>
              <option value="Azione">Azione</option>
            </select>
            {/* ciclo array */}
            <ul className='list-group'>
              {movies.map((movie, index) => {
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
