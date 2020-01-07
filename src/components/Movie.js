import React from "react";
import { Link } from "react-router-dom";

const DEFAULT_PLACEHOLDER_IMAGE =
  "https://m.media-amazon.com/images/M/MV5BMTczNTI2ODUwOF5BMl5BanBnXkFtZTcwMTU0NTIzMw@@._V1_SX300.jpg";

const Movie = ({ movie }) => {
  const poster =
    movie.Poster === "N/A" ? DEFAULT_PLACEHOLDER_IMAGE : movie.Poster;
  return (
    <div className="container">
      <div>
        <h2>{movie.Title}</h2>
        <div>
          <img
            width="400"
            alt={`The movie titled: ${movie.Title}`}
            src={poster}
          />
        </div>
        <p>({movie.Year})</p>
        <Link to="/details">
          <a className="btn btn-dark">View More</a>
        </Link>
      </div>
    </div>
  );
};

export default Movie;
