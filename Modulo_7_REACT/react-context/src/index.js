import React, { useState } from "react";
import ReactDOM from "react-dom";

import UsersList from "./components/UsersList";
import UserDetails from "./components/UserDetails";
import AddUser from "./components/AddUser";
import { UserContext, UserProvider } from "./context/user-context";

import "./styles.css";

function App() {
  const initialUsers = [{ id: 1, name: "John" }, { id: 2, name: "Joanna" }];

  return (
    <UserProvider initialUsers={initialUsers}>
      <div className="app">
        <h2>Usando Context con hooks</h2>
        <p>
          'UsersList', 'UserDetails' y 'AddUser' son componentes que usan el
          mismo contexto "UsersContext"
        </p>
        <div className="users-container">
          <UsersList />
          <UserDetails />
        </div>
        <AddUser />
      </div>
    </UserProvider>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
