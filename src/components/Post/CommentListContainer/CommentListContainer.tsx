import React, { Component } from "react";

import { Avatar, Comment, List } from "antd";

import { IComment } from "../../../context/interfaces";
import CommentContainer from "./CommentContainer/CommentContainer";
import CommentEditor from "./CommentEditor/CommentEditor";

const CommentList = ({ comments }: any) => (
  <List
    dataSource={comments}
    header={`${comments.length} ${comments.length > 1 ? "replies" : "reply"}`}
    itemLayout="horizontal"
    renderItem={(comment: IComment) => <CommentContainer {...comment} />}
  />
);

interface IProps {
  comments: IComment[];
}
interface IState {}

export default class CommentListContainer extends Component<IProps, IState> {
  render() {
    const { comments } = this.props;

    return (
      <>
        {comments.length > 0 && <CommentList comments={comments} />}
        <Comment
          avatar={
            <Avatar
              src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"
              alt="Han Solo"
            />
          }
          content={<CommentEditor />}
        />
      </>
    );
  }
}
