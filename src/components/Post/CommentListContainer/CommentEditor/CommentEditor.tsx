import React, { Component } from "react";

import { Form, Button, Input } from "antd";

const { TextArea } = Input;

interface IProps {}
interface IState {}

export default class CommentEditor extends Component<IProps, IState> {
  state = {
    comments: [],
    submitting: false,
    value: "",
  };

  handleSubmit = () => {
    if (!this.state.value) {
      return;
    }

    this.setState({
      submitting: true,
    });

    setTimeout(() => {
      this.setState({
        submitting: false,
        value: "",
      });
    }, 1000);
  };

  handleChange = (e: any) => {
    this.setState({
      value: e.target.value,
    });
  };

  render() {
    const { submitting, value } = this.state;

    return (
      <>
        <Form.Item>
          <TextArea rows={4} onChange={this.handleChange} value={value} />
        </Form.Item>
        <Form.Item>
          <Button
            htmlType="submit"
            loading={submitting}
            onClick={this.handleSubmit}
            type="primary"
          >
            Add Comment
          </Button>
        </Form.Item>
      </>
    );
  }
}
