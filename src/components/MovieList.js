import React, { Component } from "react";

export default class MovieList extends Component {
  render() {
    const truncateOverview = (string, maxLength) => {
      if (!string) return null;
      if (string.length <= maxLength) return string;
      return `${string.substring(0, maxLength)} ...`;
    };

    return (
      <div className="row">
        {this.props.movies.map((movie) => (
          <div className="col-lg-3 col-md-4 col-xs-12 col-sm-6" key={movie.id}>
            <div className="card mb-4 shadow-sm">
              <img
                className="card-img-top"
                alt="Sample Movie"
                src={`https://www.themoviedb.org/t/p/w220_and_h330_face/`.concat(
                  movie.backdrop_path
                )}
              ></img>
              <div className="card-body">
                <h5 className="card-title">{movie.title}</h5>
                <p className="card-text">
                  {truncateOverview(movie.overview, 100)}
                </p>
                <div className="d-flex justify-content-between align-items-center">
                  <a href={`https://www.themoviedb.org/movie/${movie.id}`}><button className="btn btn-outline-primary">Details</button></a>
                  <h3>
                    <span className="badge bg-secondary">
                      {movie.vote_average}
                    </span>
                  </h3>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    );
  }
}
