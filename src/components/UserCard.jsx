import React, { useState } from "react";
import { Card, Button, Modal } from "react-bootstrap";

const UserCard = ({
  user,
  deleteUser,
  setUserUpdate,
  handleChangeShowModal,
}) => {
  const [showModal, setShowModal] = useState(false); // new state variable to control the modal
  const [modalAction, setModalAction] = useState(null); // new state variable to store the action (delete or edit)

  const handleDeleteClick = () => {
    // show the modal and store the action as "delete"
    setShowModal(true);
    setModalAction("delete");
  };

  const handleEditClick = () => {
    // show the modal and store the action as "edit"
    setShowModal(true);
    setModalAction("edit");
  };

  const handleConfirm = () => {
    // execute the corresponding action based on the stored action
    if (modalAction === "delete") {
      deleteUser(user.id);
    } else if (modalAction === "edit") {
      setUserUpdate(user);
      handleChangeShowModal();
    }

    // hide the modal after executing the action
    setShowModal(false);
  };

  const handleCancel = () => {
    // hide the modal and reset the stored action
    setShowModal(false);
    setModalAction(null);
  };

  return (
    <>
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
            className="button__delete"
            onClick={handleDeleteClick}
            variant="danger"
          >
            Delete
          </Button>
          <Button
            className="button__edit"
            onClick={handleEditClick}
            variant="primary"
          >
            Edit
          </Button>
        </Card.Body>
      </Card>

      {/* Modal for confirmations */}
      <Modal show={showModal} onHide={handleCancel}>
        <Modal.Header closeButton>
          <Modal.Title>Confirm Action</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          Are you sure you want to{" "}
          {modalAction === "delete" ? "delete" : "edit"} this user?
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCancel}>
            Cancel
          </Button>
          <Button variant="primary" onClick={handleConfirm}>
            Confirm
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default UserCard;
