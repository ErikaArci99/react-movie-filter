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
            <div className="col-12">
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
      </div>
    </>
  )
}

export default App
