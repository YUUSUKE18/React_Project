import React from "react";
import { render } from "react-dom";
import { configureStore } from "@reduxjs/toolkit";
import { Provider } from "react-redux";
import { composeWithDevTools } from "redux-devtools-extension";

import App from "./App";
import rootReducer from "./reducers";

import "./index.css";

const store = configureStore({
  reducer: rootReducer,
});

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
