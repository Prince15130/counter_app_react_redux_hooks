import React, { Component } from "react";
import { Provider } from "react-redux";
import store from "../store/store";
import Counter from "./Counter";

export default class CounterRedux extends Component {
  render() {
    return (
      <Provider store={store}>
        <Counter />
      </Provider>
    );
  }
}
