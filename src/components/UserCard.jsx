import React from "react";
import { Card, Button } from "react-bootstrap";

const UserCard = ({ user, deleteUser, setUserUpdate }) => {
  return (
    <Card className="card__user">
      <Card.Body>
        <h2>
          <Card.Title>{`${user.first_name} ${user.last_name}`}</Card.Title>
        </h2>
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
        <Button
          className="button button__delete"
          onClick={() => deleteUser(user.id)}
          variant="danger"
        >
          Delete
        </Button>
        <Button
          className="button button__edit"
          onClick={() => setUserUpdate(user)}
          variant="primary"
        >
          Edit
        </Button>
      </Card.Body>
    </Card>
  );
};

export default UserCard;
