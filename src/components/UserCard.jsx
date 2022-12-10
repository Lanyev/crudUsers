import React from "react";
import { Button } from "react-bootstrap";

const UserCard = ({ user, deleteUser, setUserUpdate }) => {
  return (
    <article>
      <h2>{`${user.first_name} ${user.last_name}`}</h2>
      <ul>
        <li>
          <span>Email: </span>
          {user.email}
        </li>
        <li>
          <span>Birthdate: </span>
          {user.birthday}
        </li>
      </ul>
      <Button onClick={() => deleteUser(user.id)} variant="danger">
        Delete
      </Button>
      <Button onClick={() => setUserUpdate(user)} variant="primary">
        Edit
      </Button>
    </article>
  );
};

export default UserCard;
