import React from "react";

export default class AppHeader extends React.Component {
  constructor(props) {
    super(props);
    this.hello = 123;
  }
  render() {
    return (
      <div className="app-header">
        <h1>Lukin Egor</h1>
        <h2>5 записей, из них понравилось 0</h2>
      </div>
    );
  }
}
