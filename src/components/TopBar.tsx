import React, { Component } from "react";
import { PageHeader } from "antd";

import "./TopBar.scss";

interface IProps {}
interface IState {}

export default class TopBar extends Component<IProps, IState> {
  render() {
    return (
      <PageHeader
        className="site-page-header"
        onBack={() => null}
        title="Title"
        subTitle="This is a subtitle"
      />
    );
  }
}
