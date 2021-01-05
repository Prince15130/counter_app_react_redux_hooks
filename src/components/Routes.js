import React, { Component } from "react";
import { Router, Switch, Route } from "react-router-dom";
import { CounterHooks } from "./CounterHooks";
import CounterRedux from "./CounterRedux";
import history from "./history";
import SimpleCounter from "./SimpleCounter";

export default class Routes extends Component {
  render() {
    return (
      <Router history={history}>
        <Switch>
          <Route path="/" exact component={SimpleCounter} />
          <Route path="/CounterHooks" exact component={CounterHooks} />
          <Route path="/CounterRedux" exact component={CounterRedux} />
        </Switch>
      </Router>
    );
  }
}
