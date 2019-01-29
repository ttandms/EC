import React, { Component } from "react";
import { Provider } from "react-redux";
import { store, history } from "./store";
import "./App.css";
import { Route } from "react-router-dom";
import { ConnectedRouter } from "connected-react-router";

import NoLogin from "./NoLogin";
import Singin from "./Signin";
import Signup from "./Signup";
import Navigation from "./Navigation";
import Footer from "./Footer";
import Product from "./Product";

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
                <Route path="/product" component={Product} />
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
