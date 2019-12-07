import React from "react";
import { useUsers } from "../context/user-context";

const UserDetails = () => {
  const { selectedUser } = useUsers();

  return (
    <div>
      <h4>User Details: </h4>

      {selectedUser && (
        <React.Fragment>
          <p>
            Selected User name: <strong>{selectedUser.name}</strong>
          </p>
          <p>
            Selected User id: <strong>{selectedUser.id}</strong>
          </p>
        </React.Fragment>
      )}

      {!selectedUser && (
        <p>Please select a user in the list to see the details.</p>
      )}
    </div>
  );
};

export default UserDetails;
