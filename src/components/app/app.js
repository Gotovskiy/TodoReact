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
      term: "",
      filter: "all",
    };
    this.ToggleLike = this.ToggleLike.bind(this);
    this.ToggleImportant = this.ToggleImportant.bind(this);
    this.DeleteItem = this.DeleteItem.bind(this);
    this.AddItem = this.AddItem.bind(this);
    this.FilterPost = this.FilterPost.bind(this);
    this.OnFilterSelect = this.OnFilterSelect.bind(this);
    this.searchFilter = this.searchFilter.bind(this);
    this.onUpdateSearch = this.onUpdateSearch.bind(this);
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

  DeleteItem(id) {
    this.setState(({ data }) => {
      const index = data.findIndex((elem) => elem.id === id);
      const newArr = [...data.slice(0, index), ...data.slice(index + 1)];
      return { data: newArr };
    });
  }

  AddItem(input_text) {
    let newItem = {
      label: input_text,
      important: false,
      like: false,
      id: Date.now(),
    };
    this.setState(({ data }) => {
      const newArr = [newItem, ...data.slice(0)];
      return { data: newArr };
    });
  }

  OnFilterSelect(filter) {
    this.setState({ filter });
  }

  FilterPost(items, filter) {
    if (filter === "like") {
      return items.filter((item) => item.like);
    } else {
      return items;
    }
  }
  onUpdateSearch(term) {
    this.setState({ term });
  }

  searchFilter(data, term) {
    console.log(data, term);
    if (term.length === 0) {
      return data;
    } else {
      return data.filter((item) => {
        return item.label.indexOf(term) > -1;
      });
    }
  }

  render() {
    const { data, term, filter } = this.state;
    const liked = this.state.data.filter((item) => item.like).length;
    const count = this.state.data.length;
    const visiblePosts = this.FilterPost(this.searchFilter(data, term), filter);
    return (
      <div className="main-box">
        <AppHeader count={count} liked={liked} />
        <div className="search-panel d-flex">
          <SearchPanel onUpdateSearch={this.onUpdateSearch} />
          <PostStatusFilter
            OnFilterSelect={this.OnFilterSelect}
            filter={filter}
          />
        </div>
        <PostList
          posts={visiblePosts}
          ToggleLike={this.ToggleLike}
          ToggleImportant={this.ToggleImportant}
          DeleteItem={this.DeleteItem}
        />
        <PostAddForm AddItem={this.AddItem} />
      </div>
    );
  }
}
