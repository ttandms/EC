import { createStore, combineReducers } from "redux";
import { routerReducer } from "react-router-redux";
import user from "./Signin/reducers";

const store = createStore(combineReducers({ user, router: routerReducer }));

export { store };
