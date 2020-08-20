import React, { Component } from "react";
import { EllipsisOutlined, UserOutlined } from "@ant-design/icons";

import "./Post.scss";
import { Card, Avatar } from "antd";
import { IPost } from "../../context/interfaces";

const { Meta } = Card;

interface IState {}

export default class Post extends Component<IPost, IState> {
  render() {
    const { name } = this.props.createdBy;
    const { content, created } = this.props;

    return (
      <Card
        className="post"
        extra={[<span>{created}</span>]}
        actions={[<EllipsisOutlined key="ellipsis" />]}
      >
        <Meta
          avatar={<Avatar icon={<UserOutlined />} />}
          title={
            <span>
              {name}
              <span className="post-info"> posted their opinion</span>
            </span>
          }
          description={content}
        />
      </Card>
    );
  }
}
