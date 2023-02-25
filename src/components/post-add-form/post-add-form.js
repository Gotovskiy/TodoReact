import React from "react";

export default class PostAddForm extends React.Component {
  constructor(props) {
    super(props);
    this.AddInput = this.AddInput.bind(this);
    this.onChange = this.onChange.bind(this);
    this.state = {
      input: "",
    };
  }
  onChange(e) {
    console.log(this.state.input);
    this.setState({ input: e.target.value });
  }

  AddInput(e) {
    e.preventDefault();
    this.props.AddItem(this.state.input);
    this.setState({ input: "" });
  }
  render() {
    return (
      <form className="bottom-panel d-flex" onSubmit={this.AddInput}>
        <input
          className="form-control new-post-label"
          placeholder="О чем вы думаете?"
          onChange={this.onChange}
          value={this.state.input}
        ></input>
        <button className="btn btn-outline-secondary">Добавить</button>
      </form>
    );
  }
}
