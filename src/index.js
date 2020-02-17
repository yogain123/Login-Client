import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import Login from "./Login";
import Register from "./Register";
import Home from "./Home";
import Dashboard from "./Dashboard";

import { Route, BrowserRouter as Router } from "react-router-dom";
import history from "./History";
import { Provider } from "react-redux";
import { createAppStore } from "./Redux";

const routing = (
  <Provider store={createAppStore()}>
    <Router history={history}>
      <div>
        <Route path="/" exact component={Login} />
        <Route path="/register" exact component={Register} />
        <Route path="/home" exact component={Home} />
        <Route path="/Dashboard" exact component={Dashboard} />
      </div>
    </Router>
  </Provider>
);

ReactDOM.render(routing, document.getElementById("root"));
