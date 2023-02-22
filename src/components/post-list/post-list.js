import React from "react";
import PostListItem from "../post-list-item";

export default class PostList extends React.Component {
  render() {
    const { posts } = this.props;
    const elements = posts.map(({ label, important, like }) => {
      console.log(label);
      return (
        <ul className="app-list list-group">
          <li className="list-group-item">
            <PostListItem label={label} important={important} like={like} />
          </li>
        </ul>
      );
    });

    return <div>{elements}</div>;
  }
}

// return (

// )
