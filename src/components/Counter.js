import React, { Component } from "react";
import { connect } from "react-redux";

class Counter extends Component {
  incrementCount = () => {
    this.props.dispatch({ type: "INCREMENT" });
  };

  decrementCount = () => {
    this.props.dispatch({ type: "DECREMENT" });
  };

  render() {
    return (
      <div>
        <div className="App">
          <div className="content">
            <strong>Count:</strong> {this.props.count}
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
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    count: state.count,
  };
};

export default connect(mapStateToProps)(Counter);
