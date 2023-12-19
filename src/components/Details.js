// Details.js

import React from 'react';
import { useParams } from 'react-router-dom';

const Details = ({ movies }) => {
  const { title } = useParams();

  // Ensure that movies is defined before attempting to find the movie
  if (!movies) {
    return <div>Loading...</div>;
  }

  // Find the movie with the matching title
  const movie = movies.find((m) => m.title === decodeURIComponent(title));

  if (!movie) {
    return <div>Movie not found</div>;
  }

  return (
    <div>
      <h2>{movie.title}</h2>
      <img src={movie.image} alt={movie.title} />
      <p>Description: {movie.description}</p>
      <p>Rating: {movie.rating} stars</p>
      {/* Add more details as needed */}
    </div>
  );
};

export default Details;
