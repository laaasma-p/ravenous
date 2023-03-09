import { Component } from "react";
import "./SearchBar.css";

const sortByOptions = {
  "Best Match": "best_match",
  "Highest Rated": "rating",
  "Most Reviewed": "review_count",
};

class SearchBar extends Component {
  renderSortByOptions() {
    return Object.keys(sortByOptions).map((sortByOption) => {
      let sortByOptionValue = sortByOptions[sortByOption];
      return <li key={sortByOptionValue}>{sortByOption}</li>;
    });
  }

  render() {
    return (
      <div className="searchbar">
        <div className="searchbar-sort-options">
          <ul>{this.renderSortByOptions()}</ul>
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
