import React from 'react';
import './App.css';

function App() {

  const movies = [
    { title: 'Film', image: 'image2.jpg', description: 'This is a great movie about...', rating: 5 },
    { title: 'Film', image: 'image2.jpg', description: 'This is a great movie about...', rating: 5 },
    { title: 'Film', image: 'image2.jpg', description: 'This is a great movie about...', rating: 5 },
    { title: 'Film', image: 'image2.jpg', description: 'This is a great movie about...', rating: 5 },
    { title: 'Film', image: 'image2.jpg', description: 'This is a great movie about...', rating: 5 },
    { title: 'Film', image: 'image2.jpg', description: 'This is a great movie about...', rating: 5 },
    { title: 'Film', image: 'image2.jpg', description: 'This is a great movie about...', rating: 5 },
    { title: 'Film', image: 'image2.jpg', description: 'This is a great movie about...', rating: 5 },

    // Dodaj więcej filmów według potrzeb
  ];

  return (
      <div className="App">
        <header className="App-header">
          <div className="logo-search">
            <div className="logo">
              <img src="logo.png" alt=""/>
            </div>
            <div className="search-bar" alt="Logo">
              <input type="text" placeholder="Search" />
            </div>
          </div>
          <div id="login">
            <button className="login-button">Log In</button>
          </div>
        </header>

        <div className="container">
          <div id="search-results" className="movie-tiles">
            {movies.map((movie, index) => (
              <div key={index} className="movie-tile">
                <img src={movie.image} alt={movie.title} />
                <h3>{movie.title}</h3>
                <p>{movie.description}</p>
                <div className="rating">
                  {Array.from({ length: movie.rating }, (_, i) => (
                    <span key={i}>&#9733;</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        <footer className="footer">
          <div class="copyright">
            © Baza Filmow - Seweryn Dutka
          </div>
        </footer>
        
      </div>

    );
  }

  export default App;
