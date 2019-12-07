import React from "react";
import ReactDOM from "react-dom";

import avatarImg from "./assets/avatar.jpg";

import "./styles.css";

function App() {
  return (
    <React.Fragment>
      <h2>From Import</h2>
      <img src={avatarImg} />
      <h2>From Public</h2>
      <img src="/img/avatar.jpg" />
    </React.Fragment>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
