import React from "react";
import { Button } from "react-bootstrap";

const UserCard = ({ user }) => {
  return (
    <article>
      <h2>{`${user.first_name} ${user.last_name}`}</h2>
      <ul>
        <li>{user.email}</li>
        <li>{user.birthday}</li>
      </ul>
      <Button variant="primary">Edit</Button>
      <Button variant="danger">Delete</Button>
    </article>
  );
};

export default UserCard;
