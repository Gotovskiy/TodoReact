import React from "react";

export default class PostListItem extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="app-list-item d-flex justify-content-between">
        <span className="app-list-item-label">SomeText</span>
        <div className="d-flex justify-content-center align-items-center">
          <button className="btn-star btn-sm">
            <i className="fa-solid fa-star"></i>
          </button>
          <button className="btn-trash btn-sm">
            <i className="fa-solid fa-trash"></i>
          </button>
          <i className="fa-solid fa-heart"></i>
        </div>
      </div>
    );
  }
}
