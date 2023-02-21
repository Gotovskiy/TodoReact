import React from "react";
import PostListItem from "../post-list-item";

export default class PostList extends React.Component {
  constructor(props) {
    super();
  }
  render() {
    return (
      <ul className="app-list list-group">
        <li className="list-group-item">
          <PostListItem />
        </li>
        <li className="list-group-item">
          <PostListItem />
        </li>
        <li className="list-group-item">
          <PostListItem />
        </li>
      </ul>
    );
  }
}
