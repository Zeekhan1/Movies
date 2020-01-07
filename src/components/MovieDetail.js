import React from "react";
import { Link } from "react-router-dom";
import MovieList from "./MovieList";
const DEFAULT_PLACEHOLDER_IMAGE =
  "https://m.media-amazon.com/images/M/MV5BMTczNTI2ODUwOF5BMl5BanBnXkFtZTcwMTU0NTIzMw@@._V1_SX300.jpg";
const MovieDetail = movie => {
  const poster =
    movie.Poster === "N/A" ? DEFAULT_PLACEHOLDER_IMAGE : movie.Poster;

  return (
    <div className="movie">
      <Link to="/">
        <i className="fa fa-arrow-left"></i>
        <span style={{ marginLeft: 10 }}>Go Back</span>
      </Link>

      <div className="col-s-12 m-8">
        <div className="info-cintainer">
          <p>{movie.Title}</p>
          <p>{movie.Release_date}</p>
          <p>{movie.Overview}</p>
        </div>
      </div>
    </div>
  );
};
export default MovieDetail;
