import React, { Component } from "react";
import { Provider } from "react-redux";
import { store, history } from "./store";
import "./App.css";
import { Route } from "react-router-dom";
import { ConnectedRouter } from "connected-react-router";

import NoLogin from "./NoLogin";
import Singin from "./Signin";
import Signup from "./Signup/component";
import Navigation from "./Navigation";
import Footer from "./Footer";

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div className="app">
          <ConnectedRouter history={history}>
            <div>
              <Navigation className="header" />
              <div className="main">
                <Route path="/" component={NoLogin} />
                <Route path="/signin" component={Singin} />
                <Route path="/signup" component={Signup} />
              </div>
            </div>
          </ConnectedRouter>

          <Footer className="footer" />
        </div>
      </Provider>
    );
  }
}

export default App;
