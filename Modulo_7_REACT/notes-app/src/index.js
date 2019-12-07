import React from "react";
import ReactDOM from "react-dom";

import "./css/components/main-header.css";
import "./css/components/main-layout.css";
import "./css/components/tag-list.css";
import "./css/components/main-list.css";
import "./css/components/notes.css";
import "./css/components/generic-form.css";
import "./css/base.css";

import { BrowserRouter, Switch, Route } from "react-router-dom";
import { Dashboard } from "./pages/Dashboard";
import { Login } from "./pages/Login";
import { Register } from "./pages/Register";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
          <Dashboard />
        </Route>
        <Route path="/login">
          <Login />
        </Route>
        <Route path="/">
          <Register />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

const rootElement = document.getElementById("app-root");
ReactDOM.render(<App />, rootElement);
