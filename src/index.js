import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import axios from "axios";

import rootReducer from "./redux";
import * as serviceWorker from "./serviceWorker";
import ErrorPage from "./404";

import "./index.css";

import App from "./App";

const store = createStore(rootReducer, composeWithDevTools());

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA

// const getConfig = () => {
//   return new Promise((resolve, reject) => {
//     var subdomain = window.location.host.split(".")[0];
//     axios
//       .get(`${process.env.REACT_APP_API_URL}v1.0/agency/${subdomain}`)
//       .then((response) => {
//         console.log(":::", response)
//         resolve(response)
//       })
//       .catch((err) => {
//         console.log("ERROR", err);
//         reject(err)
//       })
//       ;
//   });
// };

// getConfig()
//   .then(() => {
ReactDOM.render(
  <BrowserRouter>
    <Provider store={store}>
      <App />
    </Provider>
  </BrowserRouter>,
  document.getElementById("root")
);
// })
// .catch((err) =>
//   ReactDOM.render(<ErrorPage />, document.getElementById("root"))
// );

serviceWorker.unregister();
