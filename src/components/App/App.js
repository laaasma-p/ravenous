import "./App.css";
import "./App.css";
import BusinessList from "../BusinessList/BusinessList";
import { Component } from "react";
import SearchBar from "../SearchBar/SearchBar";

class App extends Component {
  render() {
    return (
      <div className="app">
        <h1>ravenous</h1>
        <SearchBar />
        <BusinessList />
      </div>
    );
  }
}

export default App;
