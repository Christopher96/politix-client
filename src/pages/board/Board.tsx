import React, { Component } from "react";
import BoardBar from "../../components/BoardBar/BoardBar";
import Post from "../../components/Post/Post";
import { BoardColor, IPost, IComment } from "../../context/interfaces";

import { List, Button, Skeleton } from "antd";

import request from "request";

import "./Board.scss";

interface IProps {}
interface IState {
  initLoading: boolean;
  loading: boolean;
  data: any[];
  list: any[];
}

const fetchAmount = 3;

export default class Board extends Component<IProps, IState> {
  state = {
    initLoading: true,
    loading: false,
    data: new Array<any>(),
    list: new Array<any>(),
  };

  componentDidMount() {
    this.fetchPosts().then((posts: IPost[]) => {
      this.setState({
        initLoading: false,
        data: posts,
        list: posts,
      });
    });
  }

  fetchPosts = (): Promise<IPost[]> => {
    const user = {
      name: "Christopher Gauffin",
    };
    const comments: IComment[] = [
      {
        createdBy: user,
        created: "2018-08-20 15:53",
        content: "I'm a comment motherblippetybeep 123",
      },
    ];
    const post = {
      comments,
      createdBy: user,
      created: "2018-08-20 15:53",
      content: "This is a post with some interesting opinion, hail allah sauce",
    };
    return new Promise((res) => res([post]));
    // request.get(
    //   {
    //     url: `https://randomuser.me/api/?results=${count}&inc=name,gender,email,nat&noinfo`,
    //     json: true,
    //   },
    //   callback
    // );
  };

  onLoadMore = () => {
    this.setState({
      loading: true,
      list: this.state.data.concat(
        [...new Array<any>(fetchAmount)].map(() => ({ loading: true }))
      ),
    });
    this.fetchPosts().then((res: any) => {
      const data = this.state.data.concat(res.results);
      this.setState(
        {
          data,
          list: data,
          loading: false,
        },
        () => {
          // Resetting window's offsetTop so as to display react-virtualized demo underfloor.
          // In real scene, you can using public method of react-virtualized:
          // https://stackoverflow.com/questions/46700726/how-to-use-public-method-updateposition-of-react-virtualized
          window.dispatchEvent(new Event("resize"));
        }
      );
    });
  };

  render() {
    const { initLoading, loading, list } = this.state;
    console.log(list);
    const loadMore =
      !initLoading && !loading ? (
        <div
          style={{
            textAlign: "center",
            marginTop: 12,
            height: 32,
            lineHeight: "32px",
          }}
        >
          <Button onClick={this.onLoadMore}>loading more</Button>
        </div>
      ) : null;

    return (
      <>
        <BoardBar boardTitle="Test" boardColor={BoardColor.Green}></BoardBar>
        <div id="board-content">
          <List
            className="demo-loadmore-list"
            loading={initLoading}
            itemLayout="horizontal"
            loadMore={loadMore}
            dataSource={list}
          >
            {list.map((post, i) => (
              <List.Item key={i}>
                <Skeleton avatar title={false} loading={post.loading} active>
                  <Post {...post}></Post>
                </Skeleton>
              </List.Item>
            ))}
          </List>
        </div>
      </>
    );
  }
}
