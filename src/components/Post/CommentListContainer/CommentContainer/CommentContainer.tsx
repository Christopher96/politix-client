import React, { Component } from "react";
import { Comment, Avatar } from "antd";
import { IComment } from "../../../../context/interfaces";
import CommentActions from "../../CommentActions/CommentActions";

interface IState {}

export default class CommentContainer extends Component<IComment, IState> {
  render() {
    const { content, created } = this.props;

    return (
      <Comment
        avatar={
          <Avatar
            src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"
            alt="Han Solo"
          />
        }
        actions={[<CommentActions created={created} />]}
        content={content}
      />
    );
  }
}
