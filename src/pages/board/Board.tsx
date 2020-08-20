import React, { Component } from "react";
import BoardBar from "../../components/BoardBar/BoardBar";
import Post from "../../components/Post/Post";
import { BoardColor } from "../../context/interfaces";

import "./Board.scss";

interface IProps {}
interface IState {}

export default class Board extends Component<IProps, IState> {
  render() {
    const user = {
      name: "Christopher Gauffin",
    };
    const post = {
      createdBy: user,
      created: "2018-08-20 15:53",
      content: "This is a post with some interesting opinion, hail allah sauce",
    };
    return (
      <>
        <BoardBar boardTitle="Test" boardColor={BoardColor.Green}></BoardBar>
        <div id="board-content">
          <Post {...post}></Post>
        </div>
      </>
    );
  }
}
