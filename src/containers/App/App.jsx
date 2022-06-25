import "bootstrap/dist/css/bootstrap.css";
import React, { useEffect } from "react";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import "../../scss/app.scss";
import Router from "./Router";
import store from "./store";

export default function App() {
  // useEffect(() => {
  //   if (window.location.pathname == "/") {
  //     window.location.href = "/1";
  //   }
  // }, []);
  return (
    <Provider store={store}>
      <BrowserRouter>
        <div>
          <Router />
        </div>
      </BrowserRouter>
    </Provider>
  );
}
