import React from "react";
import PostListItem from "../post-list-item";
import ListGroup from "react-bootstrap/ListGroup";

const PostList = ({ posts, ToggleLike, ToggleImportant }) => {
  const elements = posts.map(({ label, important, like, id }) => {
    return (
      <li key={id} className="list-group-item">
        <PostListItem
          ToggleImportant={() => ToggleImportant(id)}
          ToggleLike={() => ToggleLike(id)}
          label={label}
          important={important}
          like={like}
        />
      </li>
    );
  });

  return <ListGroup className="app-list">{elements}</ListGroup>;
};
export default PostList;
