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
import { Auth0Provider } from "./react-auth0-spa";
import { domain, clientId } from "./config";

const onRedirectCallback = appState => {
  history.push(
    appState && appState.targetUrl
      ? appState.targetUrl
      : window.location.pathname
  );
};

const routing = (
  <Provider store={createAppStore()}>
    <Auth0Provider
      domain={domain}
      client_id={clientId}
      redirect_uri={window.location.origin}
      onRedirectCallback={onRedirectCallback}
    >
      <Router history={history}>
        <div>
          <Route path="/" exact component={Login} />
          <Route path="/register" exact component={Register} />
          <Route path="/home" exact component={Home} />
          <Route path="/Dashboard" exact component={Dashboard} />
          <Route path="/StreamDelete" exact component={StreamDelete} />
        </div>
      </Router>
    </Auth0Provider>
  </Provider>
);

ReactDOM.render(routing, document.getElementById("root"));
