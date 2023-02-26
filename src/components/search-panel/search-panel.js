import React from "react";

export default class SearchPanel extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      search: "",
    };
    this.ChangeInput = this.ChangeInput.bind(this);
  }
  ChangeInput(e) {
    this.setState = { input: e.target.value };

    this.props.onUpdateSearch(this.state.search);
  }
  render() {
    return (
      <input
        className="form-control search-panel"
        placeholder="Поиск по записи"
        value={this.state.search}
        onChange={this.ChangeInput}
      ></input>
    );
  }
}
