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
import Navigation from "./Navigation";
import Footer from "./Footer";

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div className="app">
          <Router>
            <div>
              <Navigation className="header" />
              <div className="main">
                {/* <Singin /> */}
                <Route path="/signin" component={Singin} />
                <Route path="/signup" component={Signup} />
              </div>
            </div>
          </Router>

          <Footer className="footer" />
        </div>
      </Provider>
    );
  }
}

export default App;
