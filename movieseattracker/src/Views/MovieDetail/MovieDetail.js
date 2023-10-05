import React from 'react';
import { useParams } from 'react-router-dom';

const MovieDetail = () => {
  // Use useParams to get the movie ID from the URL
  const { movieName } = useParams();

  // Fetch the movie details using the movieId
  // ...

  return (
    <div>
      {/* Display movie details */}
      <h1>Movie Detail Page for ID: {movieName}</h1>
    </div>
  );
};

export default MovieDetail;