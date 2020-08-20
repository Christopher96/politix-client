import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";

import Home from "./pages/home/Home";
import Register from "./pages/register/Register";
import NotFound from "./pages/404/NotFound";
import Board from "./pages/board/Board";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";

import "./App.scss";
import { Layout } from "antd";

const { Content } = Layout;

export default class App extends Component {
  render() {
    return (
      <>
        <Layout id="layout">
          <Header></Header>
          <Content id="content">
            <Route path="/">
              <Switch>
                <Route exact path="/" component={Home} />
                <Route path="/register" component={Register} />
                <Route path="/board" component={Board} />
                <Route component={NotFound} />
              </Switch>
            </Route>
            <Footer></Footer>
          </Content>
        </Layout>
      </>
    );
  }
}
