import React from "react";
import ReactDOM from "react-dom";
import { Spinner } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./index.scss";
import App from "./App";
import store from "./Store/reducers/store";
import { Provider } from "react-redux";
import { Suspense } from "react";

ReactDOM.render(
  <Provider store={store}>
    <Suspense
      fallback={
        <div className="spinner">
          <Spinner
            style={{ fontSize: "34px" }}
            animation="border"
            variant="success"
          />{" "}
        </div>
      }
    >
      <App />
    </Suspense>
  </Provider>,

  document.getElementById("root")
);
