import React from "react";
import ReactDOM from "react-dom";
import "./styles/index.css";
import Login from "./components/Login";
import Register from "./components/Register";
import Home from "./components/Home";
import Dashboard from "./components/Dashboard";
import StreamDelete from "./components/StreamDelete";

import { Route, Router } from "react-router-dom";
import history from "./services/History";
import { Provider } from "react-redux";
import { createAppStore } from "./redux";

const routing = (
  <Provider store={createAppStore()}>
    <Router history={history}>
      <div>
        <Route path="/" exact component={Login} />
        <Route path="/register" exact component={Register} />
        <Route path="/home" exact component={Home} />
        <Route path="/Dashboard" exact component={Dashboard} />
        <Route path="/StreamDelete" exact component={StreamDelete} />
      </div>
    </Router>
  </Provider>
);

ReactDOM.render(routing, document.getElementById("root"));
