import React from "react";

export default class PostAddForm extends React.Component {
  constructor() {
    super();
  }

  render() {
    return (
      <form className="bottom-panel d-flex">
        <input
          className="form-control new-post-label"
          placeholder="О чем вы думаете?"
        ></input>
        <button className="btn btn-outline-secondary">Добавить</button>
      </form>
    );
  }
}
