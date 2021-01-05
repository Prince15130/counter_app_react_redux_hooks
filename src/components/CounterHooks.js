import React, { useState } from "react";

export const CounterHooks = () => {
  const [counter, setCounter] = useState(0);
  return (
    <div className="App">
      <div className="content">
        <strong>Count:</strong> {counter}
      </div>
      <div className="field is-grouped is-grouped-centered mt-2">
        <button
          className="button is-danger"
          onClick={() => setCounter(counter - 1)}
        >
          <span className="icon is-small">
            <i className="fas fa-minus"></i>
          </span>
        </button>
        <button
          className="button ml-2 is-success"
          onClick={() => setCounter(counter + 1)}
        >
          <span className="icon is-small">
            <i className="fas fa-plus-circle"></i>
          </span>
        </button>
      </div>
    </div>
  );
};
