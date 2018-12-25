import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import ListItem from "./ListItem/component";

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <p>ECサイトのトップページ</p>
        </header>
        <ListItem />
      </div>
    );
  }
}

export default App;
