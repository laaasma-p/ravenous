import { Component } from "react";
import "./SearchBar.css";

class SearchBar extends Component {
  render() {
    return (
      <div className="searchbar">
        <div className="searchbar-sort-options">
          <ul>Sort Options</ul>
        </div>
        <div className="searchbar-fields">
          <input placeholder="Search Businesses" />
          <input placeholder="Where?" />
        </div>
        <div className="searchbar-submit">
          <a href="link.com">Let's Go</a>
        </div>
      </div>
    );
  }
}

export default SearchBar;
