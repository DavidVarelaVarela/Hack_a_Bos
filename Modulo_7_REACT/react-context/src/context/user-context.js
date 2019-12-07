import React, { useState, useContext } from "react";

// 1) Crear el contexto a traves de createContext
export const UserContext = React.createContext({});

// 2) Crear un custom Provider
export function UserProvider({ initialUsers, children }) {
  // 2.1) Crear mis estados
  const [selectedUser, setSelectedUser] = useState(null);
  const [users, setUsers] = useState(initialUsers);

  // 2.2) Crear los metodos que me permitan modificarlos
  const handleAddUser = name => {
    const newUser = { id: Date.now(), name };
    setUsers(users.concat(newUser));
  };

  // 2.3) Devolver mi Custom Provider
  return (
    <UserContext.Provider
      value={{ users, selectedUser, setSelectedUser, handleAddUser }}
    >
      {children}
    </UserContext.Provider>
  );
}

// 3) Crear us Custom hook
export function useUsers() {
  const context = useContext(UserContext);
  return context;
}
