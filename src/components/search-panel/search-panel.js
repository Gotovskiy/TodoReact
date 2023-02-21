import React from "react";

export default class SearchPanel extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <input
        className="form-control search-panel"
        placeholder="Поиск по записи"
      ></input>
    );
  }
}
