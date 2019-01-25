import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import {
  BrowserRouter as Router,
  Route,
  browserHistory
} from "react-router-dom";

import Singin from "./Signin/component";
import Signup from "./Signup/component";

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <header className="App-header">
            <p>ECサイトのトップページ</p>
          </header>
          <div className={styleMedia.main}>
            {/* <Singin /> */}
            <Route path="/signin" component={Singin} />
            <Route path="/signup" component={Signup} />
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
