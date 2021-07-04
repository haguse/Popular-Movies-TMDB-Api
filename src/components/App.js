import React, { Component } from "react";
import SearchBar from "./SearchBar";
import MovieList from "./MovieList";
import axios from "axios";
require("dotenv").config();

class App extends Component {
  state = {
    movies: [],
    searchQuery: "",
  };

  async componentDidMount() {
    const response = await axios.get(
      `https://api.themoviedb.org/3/movie/popular?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&page=1`
    );
    this.setState({ movies: response.data.results });
  }

  searchMovie = (e) => {
    this.setState({ searchQuery: e.target.value });
  };

  render() {
    //Show Searched Movies
    let filteredMovies = this.state.movies.filter((movie) => {
      return (
        movie.title
          .toLowerCase()
          .indexOf(this.state.searchQuery.toLowerCase()) !== -1
      );
    });

    return (
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <SearchBar searchMovieProp={this.searchMovie} />
          </div>
        </div>
        <MovieList movies={filteredMovies} />
      </div>
    );
  }
}

export default App;
