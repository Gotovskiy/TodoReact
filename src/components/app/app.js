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

function App() {
  return (
    <div className="main-box">
      <AppHeader />
      <div className="search-panel d-flex">
        <SearchPanel />
        <PostStatusFilter />
      </div>
      <PostList />
      <PostAddForm />
    </div>
  );
}

export default App;
