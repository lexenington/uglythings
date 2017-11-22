import React from "react";
import ReactDOM from "react-dom";
import App from "./App.js";
import "./index.css";

//import and create store
import {createStore} from "redux";
import reducers from "./reducers"

//import Provider
import {Provider} from "react-redux";
let store = createStore(reducers, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())

//Provide the store to all compoenents
let Root = () => (
  <Provider store={store}>
  <App />
  </Provider>
)

ReactDOM.render(<Root />, document.querySelector("#root"));
