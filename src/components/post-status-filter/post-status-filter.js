import React from "react";

export default class PostStatusFilter extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="btn-group">
        <button className="btn btn-info active">Все</button>
        <button className="btn btn-outline-secondary">Понравилось</button>
      </div>
    );
  }
}
