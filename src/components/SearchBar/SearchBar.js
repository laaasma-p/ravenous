import { Component } from "react";

class SearchBar extends Component {
  render() {
    return (
      <div>
        <div>
          <ul>Sort Options</ul>
        </div>
        <div>
          <input placeholder="Search Businesses" />
          <input placeholder="Where?" />
        </div>
        <div>
          <a href="link.com">Let's Go</a>
        </div>
      </div>
    );
  }
}

export default SearchBar;
