import React, { Component } from "react";
import { EllipsisOutlined, UserOutlined } from "@ant-design/icons";

import "./Post.scss";
import { Card, Avatar, Comment } from "antd";
import { IPost } from "../../context/interfaces";
import CommentActions from "./CommentActions/CommentActions";
import CommentListContainer from "./CommentListContainer/CommentListContainer";

const { Meta } = Card;

interface IState {
  liked: boolean;
  interacted: boolean;
  likes: number;
  dislikes: number;
}

export default class Post extends Component<IPost, IState> {
  render() {
    const { name } = this.props.createdBy;
    const { content, created, comments } = this.props;

    return (
      <Card
        className="post"
        extra={
          <Comment
            className="post-container"
            actions={[<CommentActions created={created} />]}
            author={
              <span className="post-author">
                <a>{name}</a>
                <span className="post-title-info"> posted their opinion</span>
              </span>
            }
            avatar={<Avatar icon={<UserOutlined />} />}
            content={<p className="post-content">{content}</p>}
          />
        }
        actions={[<EllipsisOutlined key="ellipsis" />]}
      >
        <CommentListContainer comments={comments} />
      </Card>
    );
  }
}
