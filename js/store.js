import { createStore, compose, applyMiddleware } from "redux";
import thunk from 'redux-thunk';
import reducers from "./reducers";

let reduxDevTool = null;

if (typeof window === "object" && typeof window.devToolsExtension !== "undefined" ) {
  reduxDevTool = window.devToolsExtension();
} else {
  reduxDevTool = f => f;
}

const store = createStore(reducers, compose(applyMiddleware(thunk),reduxDevTool));

export default store;
