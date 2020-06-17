import { createStore, combineReducers, applyMiddlewear, compose } from "redux";
import thunk from "redux-thunk";
import authReducer from "../reducers/auth";

const composeEnhance = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  combineReducers({
    auth: authReducer,
  }),
  composeEnhance(applyMiddlewear(thunk))
);

export default store;
