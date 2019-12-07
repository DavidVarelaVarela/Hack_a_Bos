import React from "react";
import { useUsers } from "../context/user-context";

const UsersList = () => {
  const { users, selectedUser, setSelectedUser } = useUsers();

  return (
    <div>
      <h4>Users: </h4>
      {users.map(user => (
        <div
          onClick={() => setSelectedUser(user)}
          className={`user-item ${selectedUser &&
            user.id === selectedUser.id &&
            "user-item-selected"}`}
        >
          {user.name}
        </div>
      ))}
    </div>
  );
};

export default UsersList;
