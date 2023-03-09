import "./App.css";
import "./App.css";
import BusinessList from "../BusinessList/BusinessList";
import { Component } from "react";

class App extends Component {
  render() {
    return (
      <div className="app">
        <h1>ravenous</h1>
        <BusinessList />
      </div>
    );
  }
}

export default App;
