import React, { Component } from "react";
import { PageHeader, Button, Avatar, Descriptions } from "antd";
import { UserOutlined } from "@ant-design/icons";

import "./Header.scss";

interface IProps {}
interface IState {}

const login = [
  <Avatar
    style={{ backgroundColor: "var(--color-primary)" }}
    icon={<UserOutlined />}
  />,
  <Descriptions.Item label="Product">Not logged in</Descriptions.Item>,
  <Button>Log in</Button>,
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
