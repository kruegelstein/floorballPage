import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "./index.css";
import App from "./App.jsx";
import Impressum from "./components/impressum/Impressum.jsx";
import Login from "./components/login/Login.jsx";
import * as serviceWorker from "./serviceWorker";

ReactDOM.render(
  <Router>
    <Route path="/" exact component={App} />
    <Route path="/imprint" component={Impressum} />
    <Route path="/login" component={Login} />
  </Router>,
  document.getElementById("roote")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
