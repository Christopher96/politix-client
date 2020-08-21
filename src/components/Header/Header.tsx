import React, { Component } from "react";
import { PageHeader, Button, Avatar } from "antd";
import { UserOutlined } from "@ant-design/icons";

import "./Header.scss";

interface IProps {}
interface IState {}

const login = [
  <Avatar
    key="3"
    style={{ backgroundColor: "var(--color-primary)" }}
    icon={<UserOutlined />}
  />,
  <span key="2">Not logged in</span>,
  <Button key="1">Log in</Button>,
];

export default class Header extends Component<IProps, IState> {
  render() {
    return (
      <PageHeader
        className="site-page-header"
        ghost={false}
        onBack={() => null}
        title="Title"
        subTitle="This is a subtitle"
        extra={login}
      />
    );
  }
}
