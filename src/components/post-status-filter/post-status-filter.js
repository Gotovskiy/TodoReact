import React from "react";

export default class PostStatusFilter extends React.Component {
  render() {
    const { OnFilterSelect } = this.props;
    return (
      <div className="btn-group">
        <button
          className="btn btn-info active"
          onClick={() => OnFilterSelect("all")}
        >
          Все
        </button>
        <button
          className="btn btn-outline-secondary"
          onClick={() => OnFilterSelect("like")}
        >
          Понравилось
        </button>
      </div>
    );
  }
}
