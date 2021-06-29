import React, { Component } from "react";
import SearchBar from "./SearchBar";
import MovieList from "./MovieList";

class App extends Component {
  state = {
    movies: [],
    searchQuery: "",
  };

  async componentDidMount(){
    const baseURL = "http://localhost:3005/movies";
    const response = await fetch(baseURL);
    const data = await response.json();
    console.log(data);

    this.setState({movies : data})
  }

  deleteMovie = (movie) => {
    const newMovieList = this.state.movies.filter((m) => m.id !== movie.id);

    // this.setState({
    //   movies: newMovieList,
    // });

    this.setState((state) => ({
      movies: newMovieList,
    }));
  };

  searchMovie = (e) => {
    this.setState({ searchQuery: e.target.value });
  };

  render() {
    //Show Searched Movies
    let filteredMovies = this.state.movies.filter((movie) => {
      return (
        movie.name
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
        <MovieList movies={filteredMovies} deleteMovieProp={this.deleteMovie} />
      </div>
    );
  }
}

export default App;
