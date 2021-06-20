import React from "react";
import ReactDOM from "react-dom";
import AppRouter from "./Router/AppRouter";
import { Provider } from "react-redux";
import store from "./store/store";
import "./styles.css";
import "bootstrap/dist/css/bootstrap.min.css";

ReactDOM.render(
  <Provider store={store}>
    <AppRouter />
  </Provider>,
  document.getElementById("root")
);
