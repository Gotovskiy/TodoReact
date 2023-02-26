import React from "react";

export default class AppHeader extends React.Component {
  constructor(props) {
    super(props);
    this.hello = 123;
  }

  render() {
    const { count, liked } = this.props;
    return (
      <div className="app-header">
        <h1>Lukin Egor</h1>
        <h2>
          {count} записей, из них понравилось {liked}
        </h2>
      </div>
    );
  }
}
