import React, { Component } from "react";
import { Tooltip } from "antd";
import {
  LikeFilled,
  LikeOutlined,
  DislikeFilled,
  DislikeOutlined,
} from "@ant-design/icons";

interface IProps {
  created: string;
}
interface IState {}

export default class CommentActions extends Component<IProps, IState> {
  state = {
    liked: false,
    interacted: false,
    likes: 10,
    dislikes: 5,
  };

  like = () => {
    this.setState({
      liked: true,
      interacted: true,
    });
  };

  dislike = () => {
    this.setState({
      liked: false,
      interacted: true,
    });
  };

  render() {
    const { liked, interacted, likes, dislikes } = this.state;
    const { created } = this.props;

    return (
      <>
        <Tooltip key="comment-basic-like" title="Like">
          <span onClick={this.like}>
            {liked && interacted ? <LikeFilled /> : <LikeOutlined />}
            <span className="comment-action">{likes}</span>
          </span>
        </Tooltip>
        <Tooltip key="comment-basic-dislike" title="Dislike">
          <span onClick={this.dislike}>
            {!liked && interacted ? <DislikeFilled /> : <DislikeOutlined />}
            <span className="comment-action">{dislikes}</span>
          </span>
        </Tooltip>
        <span key="comment-basic-reply-to">Reply to</span>
        <Tooltip title={created} className="date-created">
          <span>{created}</span>
        </Tooltip>
      </>
    );
  }
}
