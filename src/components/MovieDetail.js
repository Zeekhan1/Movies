import React from "react";
const DEFAULT_PLACEHOLDER_IMAGE =
  "https://m.media-amazon.com/images/M/MV5BMTczNTI2ODUwOF5BMl5BanBnXkFtZTcwMTU0NTIzMw@@._V1_SX300.jpg";
const MovieDetail = movie => {
  const poster =
    movie.Poster === "N/A" ? DEFAULT_PLACEHOLDER_IMAGE : movie.Poster;

  return (
    //   {/* <h2>{movie.Title}</h2>
    //   <div>
    //     <img
    //       width="200"
    //       alt={`The movie titled: ${movie.Title}`}
    //       src={poster}
    //     />
    //   </div>
    //   <p>({movie.Year})</p> */}

    //   {/* <script id="result-template" type="text/x-handlebars-template">
    //     <div class="jumbotron">
    //       <span>Movie Title: {movie.Title}</span>
    //       <br />
    //       <span>Overview: {movie.Overview}</span>
    //       <br />
    //       <span>Release date: {movie.release_date}</span>
    //       <br />
    //       <img src={`https://image.tmdb.org/t/p/w185/${movie.Poster}`} />
    //       <br />
    //       <span>Rated: {movie.Rated}}</span>
    //       <br />
    //       <span>Release date: {movie.release_date}</span>
    //       <br />
    //       <span>Popularity: {movie.vote_average}</span>
    //       <br />
    //     </div>
    //   </script> */}

    <div className="container">
      <div
        className="row"
        onClick=""
        style={{ cursor: "pointer", paddingTop: 50 }}
      >
        <i className="fas fa-arrow-left"></i>
        <span style={{ marginLeft: 10 }}>Go Back</span>
      </div>
      <div className="row">
        {movie.poster_path == null ? (
          <img
            src={"https://pixlr.com/photo/image-design-11-1-pw.jpg"}
            alt="card image"
            style={{ width: "100%", height: 360 }}
          />
        ) : (
          <img
            src={`http://image.tmdb.org/t/p/w185${movie.Poster}`}
            alt="card image"
            style={{ width: "100%", height: 360 }}
          />
        )}
      </div>
      <div className="col-s-12-m-8">
        <div className="info-container">
          <p>{movie.Title}</p>
          <p>{movie.realease_date}</p>
          <p>{movie.overview}</p>
        </div>
      </div>
    </div>
  );
};
export default MovieDetail;
