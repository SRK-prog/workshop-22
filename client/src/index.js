import React from "react";
import ReactDOM from "react-dom";
import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { Provider } from "react-redux";
import { createLogger } from "redux-logger";
import reducers from "./redux/reducers";
import "./index.css";
import App from "./App";

const loggerMiddleware = createLogger();
const store = createStore(reducers, applyMiddleware(thunk, loggerMiddleware));

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
