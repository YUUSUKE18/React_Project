import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import productListReducer from "./reducer/productReducer";

import thunk from "react-thunk";

const initialState = {};
const reducer = combineReducers({
  productList: productListReducer,
});
const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
  reducer,
  initialState,
  compose(applyMiddleware(thunk))
);

export default store;
