// Home.js

import React from 'react';
import { Link } from 'react-router-dom';

const MovieTile = ({ movie }) => (
  <Link to={`/details/${encodeURIComponent(movie.title)}`}>
    <div className="movie-tile">
      <img src={movie.image} alt={movie.title} />
      <h3>{movie.title}</h3>
      <p>{movie.description}</p>
      <div className="rating">
        {Array.from({ length: movie.rating }, (_, i) => (
          <span key={i}>&#9733;</span>
        ))}
      </div>
    </div>
  </Link>
);

const Home = ({ movies }) => (
  <div>
    <div id="search-results" className="movie-tiles">
      {movies.map((movie, index) => (
        <MovieTile key={index} movie={movie} />
      ))}
    </div>
  </div>
);

export default Home;
