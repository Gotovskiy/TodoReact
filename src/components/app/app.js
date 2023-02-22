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

export default class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      data: [
        { label: "Let's do it!", important: true, like: true },
        { label: "I can do it maybe...", important: false, like: false },
        { label: "Omfg i does it!", important: false, like: false },
      ],
    };
  }

  render() {
    return (
      <div className="main-box">
        <AppHeader />
        <div className="search-panel d-flex">
          <SearchPanel />
          <PostStatusFilter />
        </div>
        <PostList posts={this.state.data} />
        <PostAddForm />
      </div>
    );
  }
}
