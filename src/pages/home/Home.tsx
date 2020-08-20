import React, { Component } from "react";
import { Button } from "antd";

interface IProps {}
interface IState {}

export default class Home extends Component<IProps, IState> {
  render() {
    return (
      <>
        <Button>hello</Button>
      </>
    );
  }
}
