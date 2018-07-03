import React, { Component } from "react";

import { Switch, Route } from "react-router-dom";

import Route1 from "./Route1";
import Route2 from "./Route2";
import Route3 from "./Route3";

export default class Routes extends Component {
  render() {
    return (
      <Switch>
        <Route exact path="/" component={Route1} />
        <Route
          path="/route2"
          render={props => <Route2 {...props} products={this.props.products} />}
        />
        <Route
          path="/route3/:id"
          render={props => <Route3 {...props} products={this.props.products} />}
        />
      </Switch>
    );
  }
}
