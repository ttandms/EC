import React, { Component } from "react";
import { Provider } from "react-redux";
import { store } from "./store";
import { ConnectedRouter } from "react-router-redux";
import logo from "./logo.svg";
import "./App.css";
import {
  BrowserRouter as Router,
  Route,
  browserHistory
} from "react-router-dom";

import Singin from "./Signin";
import Signup from "./Signup/component";

class App extends Component {
  render() {
    return (
      <Provider store={store}>
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
      </Provider>
    );
  }
}

export default App;
