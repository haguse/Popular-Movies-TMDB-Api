import React, { Component } from "react";

export default class SearchBar extends Component {
 
  //Disable default Enter Submit
  handleFormSubmit = (e) => {
    e.preventDefault();
  };

  render() {
    return (
      <form onSubmit={this.handleFormSubmit}>
        <div className="form-row mb-4 mt-4">
          <div className="col-12">
            <input
              onChange={this.props.searchMovieProp}
              type="text"
              className="form-control"
              placeholder="Search..."
            ></input>
          </div>
        </div>
      </form>
    );
  }
}
