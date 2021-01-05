import React, { Component } from "react";

export default class SimpleCounter extends Component {
  state = {
    count: 0,
  };

  incrementCount = () => {
    this.setState((prevState) => ({
      count: prevState.count + 1,
    }));
  };

  decrementCount = () => {
    this.setState((prevState) => ({
      count: prevState.count - 1,
    }));
  };
  render() {
    return (
      <div className="App">
        <div className="content">
          <strong>Count:</strong> {this.state.count}
        </div>
        <div className="field is-grouped is-grouped-centered mt-2">
          <button className="button is-danger" onClick={this.decrementCount}>
            <span className="icon is-small">
              <i className="fas fa-minus"></i>
            </span>
          </button>
          <button
            className="button ml-2 is-success"
            onClick={this.incrementCount}
          >
            <span className="icon is-small">
              <i className="fas fa-plus-circle"></i>
            </span>
          </button>
        </div>
      </div>
    );
  }
}
