import React, { createContext, useState } from "react";

export const CounterContext = createContext();
export const CounterContextProvider = (props) => {
  const [counter, setCounter] = useState(0);
  const incrementCount = () => {
    setCounter(counter + 1);
  };

  const decrementCount = () => {
    setCounter(counter - 1);
  };
  return (
    <CounterContext.Provider
      value={{ counter, incrementCount, decrementCount }}
    >
      {props.children}
    </CounterContext.Provider>
  );
};
