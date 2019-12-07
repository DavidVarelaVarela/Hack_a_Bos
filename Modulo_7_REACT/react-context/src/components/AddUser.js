import React, { useState } from "react";
import { useUsers } from "../context/user-context";

const AddUser = () => {
  const { handleAddUser } = useUsers();
  const [userName, setUserName] = useState("");

  return (
    <React.Fragment>
      <hr />
      <h3>Add new user:</h3>
      <input
        type="text"
        placeholder="Enter name"
        value={userName}
        onChange={e => setUserName(e.target.value)}
      />
      <button className="add-btn" onClick={() => handleAddUser(userName)}>
        Add
      </button>
    </React.Fragment>
  );
};

export default AddUser;
