import { combineReducers, createStore } from "redux";

import counter from "./counter";
import auth from "./auth";

const rootReducer = combineReducers({
  counter: counter,
  auth: auth,
});

const store = createStore(rootReducer);

export default store;
