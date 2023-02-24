import React from "react";
import PostListItem from "../post-list-item";
import ListGroup from "react-bootstrap/ListGroup";

const PostList = ({ posts }) => {
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

  return <ListGroup className="app-list">{elements}</ListGroup>;
};
export default PostList;
