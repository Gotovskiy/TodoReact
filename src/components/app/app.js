import "./app.css";
import React from "react";
import AppHeader from "../app-header/app-header.js";
import SearchPanel from "../search-panel";
import PostStatusFilter from "../post-status-filter";
import PostList from "../post-list";
import PostAddForm from "../post-add-form";
//css
import "../app/app.css";
import "../app-header/app-header.css";
import "../search-panel/search-panel.css";
import "../post-status-filter/post-status-filter.css";
import "../post-list-item/post-list-item.css";
import "../post-list/post-list.css";
import "../post-add-form/post-add-form.css";
import "../post-list/post-list.css";

export default class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      data: [
        {
          label: "Let's do it!",
          important: true,
          like: true,
          id: "asd2sfs1ad",
        },
        {
          label: "Let's do some buildings",
          important: true,
          like: true,
          id: "asdsfs1ad3",
        },
        {
          label: "I can do it maybe...",
          important: false,
          like: false,
          id: "a2sd",
        },
        {
          label: "Omfg i does it!",
          important: false,
          like: false,
          id: "asafsad",
        },
      ],
    };
    this.ToggleLike = this.ToggleLike.bind(this);
    this.ToggleImportant = this.ToggleImportant.bind(this);
  }
  ToggleLike(id) {
    this.setState(({ data }) => {
      const index = data.findIndex((elem) => elem.id === id);
      const old_obj = data[index];
      let newItem;
      newItem = { ...old_obj, like: !old_obj.like };
      const newArr = [
        ...data.slice(0, index),
        newItem,
        ...data.slice(index + 1),
      ];
      return { data: newArr };
    });
  }

  ToggleImportant(id) {
    this.setState(({ data }) => {
      const index = data.findIndex((elem) => elem.id === id);
      const old_obj = data[index];
      let newItem;
      newItem = { ...old_obj, important: !old_obj.important };
      const newArr = [
        ...data.slice(0, index),
        newItem,
        ...data.slice(index + 1),
      ];
      return { data: newArr };
    });
  }

  render() {
    return (
      <div className="main-box">
        <AppHeader />
        <div className="search-panel d-flex">
          <SearchPanel />
          <PostStatusFilter />
        </div>
        <PostList
          posts={this.state.data}
          ToggleLike={this.ToggleLike}
          ToggleImportant={this.ToggleImportant}
        />
        <PostAddForm />
      </div>
    );
  }
}
