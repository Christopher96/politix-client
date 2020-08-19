import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";

import Home from "./pages/home/Home";
import Register from "./pages/register/Register";
import NotFound from "./pages/404/NotFound";
import TopBar from "./components/TopBar";

import "./App.scss";

export default class App extends Component {
  render() {
    return (
      <>
        <Route path="/">
          <Route component={TopBar} />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/register" component={Register} />
            <Route component={NotFound} />
          </Switch>
        </Route>
      </>
    );
  }
}
