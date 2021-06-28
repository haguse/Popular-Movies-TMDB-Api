import React, { Component } from "react";

export default class MovieList extends Component {
  render() {
    // function removeMovie(e) {
    //   console.log(el);
    // }

    return (
      <div className="row">
        {this.props.movies.map((movie) => (
          <div className="col-lg-3 col-md-4 col-xs-12 col-sm-6" key={movie.id}>
            <div className="card mb-4 shadow-sm">
              <img
                className="card-img-top"
                alt="Sample Movie"
                src={movie.imageURL}
              ></img>
              <div className="card-body">
                <h5 className="card-title">{movie.name}</h5>
                <p className="card-text">{movie.overview}</p>
                <div className="d-flex justify-content-between align-items-center">
                  <button
                    onClick={(event) => this.props.deleteMovieProp(movie)}
                    type="button"
                    className="btn btn-outline-danger"
                  >
                    Delete
                  </button>
                  <h3>
                    <span className="badge bg-secondary">{movie.rating}</span>
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
