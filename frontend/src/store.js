import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import user from "./Signin/reducers";
import { createBrowserHistory } from "history";
import { routerMiddleware, connectRouter } from "connected-react-router";

const history = createBrowserHistory();
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  combineReducers({ user, router: connectRouter(history) }),
  composeEnhancers(applyMiddleware(routerMiddleware(history)))
);

export { store, history };
