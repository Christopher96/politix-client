import React, { Component } from "react";
import { EllipsisOutlined, UserOutlined } from "@ant-design/icons";

import "./Post.scss";
import { Card, Avatar } from "antd";

const { Meta } = Card;

interface IState {}

export default class Comment extends Component<IComment, IState> {
  render() {
    const { name } = this.props.post.createdBy;
    const { created } = this.props.post;

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
          description="This is the description"
        />
      </Card>
    );
  }
}
