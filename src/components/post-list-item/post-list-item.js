import React from "react";

export default class PostListItem extends React.Component {
  render() {
    const { label, important, like, ToggleLike, ToggleImportant, DeleteItem } =
      this.props;
    let classNames = "app-list-item d-flex justify-content-between";
    if (important) {
      classNames += " important";
    }
    if (like) {
      classNames += " like";
    }
    return (
      <div className={classNames}>
        <span className="app-list-item-label" onClick={ToggleLike}>
          {label}
        </span>
        <div className="d-flex justify-content-center align-items-center">
          <button className="btn-star btn-sm" onClick={ToggleImportant}>
            <i className="fa-solid fa-star"></i>
          </button>
          <button className="btn-trash btn-sm" onClick={DeleteItem}>
            <i className="fa-solid fa-trash"></i>
          </button>
          <i className="fa-solid fa-heart"></i>
        </div>
      </div>
    );
  }
}
