import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import MovieDetail from "./MovieDetail";
import { MovieList } from "./MovieList";
import Movie from "./Movie";
import "../App.css";

const App = () => {
  return (
    <Router>
      <div className="App">
        <Route path="/" exact component={MovieList} />
        <Route path="/details" exact component={MovieDetail} />
      </div>
    </Router>
  );
};

export default App;
