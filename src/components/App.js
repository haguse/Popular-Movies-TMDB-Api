import React, { Component } from "react";
import SearchBar from "./SearchBar";
import MovieList from "./MovieList";

class App extends Component {
  state = {
    movies: [
      {
        name: "The Matrix 3",
        rating: "8.1",
        overview:
          "Set in the 22nd century, The Matrix tells the story of a computer hacker who joins a group of underground insurgents fighting the vast and powerful computers who now rule the earth.",
        imageURL:
          "https://image.tmdb.org/t/p/w600_and_h900_bestv2/dXNAPwY7VrqMAo51EKhhCJfaGb5.jpg",
        id: 0,
      },
      {
        name: "The Matrix Reloaded",
        rating: "6.9",
        imageURL:
          "https://image.tmdb.org/t/p/w600_and_h900_bestv2/jBegA6V243J6HUnpcOILsRvBnGb.jpg",
        overview:
          "Six months after the events depicted in The Matrix, Neo has proved to be a good omen for the free humans, as more and more humans are being freed from the matrix and brought to Zion, the one and only stronghold of the Resistance. Neo himself has discovered his superpowers including super speed, ability to see the codes of the things inside the matrix and a certain degree of pre-cognition.",
        id: 1,
      },
      {
        name: "Saw 3D",
        rating: "7.5",
        overview:
          "SAW legacy, a group of Jigsaw survivors gathers to seek the support of self-help guru and fellow survivor Bobby Dagen, a man whose own dark secrets unleash a new wave of terror.",
        imageURL:
          "https://image.tmdb.org/t/p/w600_and_h900_bestv2/qHCZ6LjtmqWDfXXN28TlIC9OppK.jpg",
        id: 2,
      },
      {
        name: "Blitz 007",
        rating: "11",
        overview:
          "A tough, renegade cop with a gay sidekick is dispatched to take down a serial killer who has been targeting police officers.",
        imageURL:
          "https://image.tmdb.org/t/p/w600_and_h900_bestv2/qCPMjT8Ld8tvs1zs7LY2jpKlRIK.jpg",
        id: 3,
      },
      {
        name: "Hostage",
        rating: "6.3",
        imageURL:
          "https://image.tmdb.org/t/p/w600_and_h900_bestv2/4hne3v6jN4MlCnhSkxOW7YspJhr.jpg",
        overview:
          "When a mafia accountant is taken hostage on his beat, a police officer – wracked by guilt from a prior stint as a negotiator – must negotiate the standoff, even as his own family is held captive by the mob.",
        id: 4,
      },
      {
        id: 5,
        name: "Superman",
        rating: 7.6,
        overview:
          "This is a wider card with supporting text below as a natural lead-in to additional content.",
        imageURL:
          "https://image.tmdb.org/t/p/w220_and_h330_face/6Bbq8qQWpoApLZYWFFAuZ1r2gFw.jpg",
      },
      {
        id: 6,
        name: "Rogue",
        rating: 7.4,
        overview:
          "This is a wider card with supporting text below as a natural lead-in to additional content.",
        imageURL:
          "https://image.tmdb.org/t/p/w220_and_h330_face/uOw5JD8IlD546feZ6oxbIjvN66P.jpg",
      },
      {
        id: 7,
        name: "Project Power",
        rating: 6.7,
        overview:
          "This is a wider card with supporting text below as a natural lead-in to additional content.",
        imageURL:
          "https://image.tmdb.org/t/p/w220_and_h330_face/TnOeov4w0sTtV2gqICqIxVi74V.jpg",
      },
      {
        id: 8,
        name: "The Flash",
        rating: 8.3,
        overview:
          "This is a wider card with supporting text below as a natural lead-in to additional content.",
        imageURL:
          "https://image.tmdb.org/t/p/w220_and_h330_face/wHa6KOJAoNTFLFtp7wguUJKSnju.jpg",
      },
      {
        id: 9,
        name: "Interstellar",
        rating: 6.8,
        overview:
          "This is a wider card with supporting text below as a natural lead-in to additional content.",
        imageURL:
          "https://image.tmdb.org/t/p/w220_and_h330_face/gEU2QniE6E77NI6lCU6MxlNBvIx.jpg",
      },
      {
        id: 10,
        name: "Arrow",
        rating: 7.9,
        overview:
          "This is a wider card with supporting text below as a natural lead-in to additional content.",
        imageURL:
          "https://image.tmdb.org/t/p/w220_and_h330_face/gKG5QGz5Ngf8fgWpBsWtlg5L2SF.jpg",
      },
    ],
    searchQuery: "",
  };

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
