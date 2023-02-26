import React from "react";

export default class PostStatusFilter extends React.Component {
  constructor(props) {
    super(props);
    this.buttons = [
      { label: "Все", name: "all" },
      { label: "Понравилось", name: "like" },
    ];
  }

  render() {
    const { OnFilterSelect } = this.props;
    const buttons = this.buttons.map(({ name, label }) => {
      console.log(name, this.props.filter);
      const active = this.props.filter === name;
      const clazz = active ? "btn-info" : "btn-outline-secondary";
      return (
        <button
          key={name}
          type="button"
          className={`btn ${clazz}`}
          onClick={() => OnFilterSelect(name)}
        >
          {label}
        </button>
      );
    });
    return <div className="btn-group">{buttons}</div>;
  }
}
