import React, { Component } from "react";
import { BoardColor } from "../../context/interfaces";

import "./BoardBar.scss";

interface IProps {
  boardColor: BoardColor;
  boardTitle: string;
}
interface IState {}

export default class BoardBar extends Component<IProps, IState> {
  render() {
    return (
      <div
        className="board-bar"
        style={{ backgroundColor: this.props.boardColor }}
      >
        <h1 className="board-title">{this.props.boardTitle}</h1>
      </div>
    );
  }
}
