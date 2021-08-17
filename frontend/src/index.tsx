import React from "react";
import ReactDOM from "react-dom";
import { Spinner } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./index.scss";
import App from "./App";
import store from "./Store/store";
import { persistor } from './Store/store';
import { Provider } from "react-redux";
import { Suspense } from "react";
import { PersistGate } from 'redux-persist/integration/react'

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
       <PersistGate loading={ <div style={{height:"100vh"}} className="w-100 h-100 d-flex justify-content-center align-items-center">
        <Spinner  animation="border" variant="primary" />{" "}
        </div>} persistor={persistor}> 

             <App />
      </PersistGate >
    </Suspense>
  </Provider>,

  document.getElementById("root")
);

