import { createStore, combineReducers, applyMiddleware } from "redux";
import user from "./Signin/reducers";
import { createBrowserHistory } from "history";
import { routerMiddleware, connectRouter } from "connected-react-router";

const history = createBrowserHistory();

const store = createStore(
  combineReducers({ user, router: connectRouter(history) }),
  applyMiddleware(routerMiddleware(history))
);

export { store, history };
