import React from "react";
import "./Modal.css";
import { useSelector } from "react-redux";

const Modal = ({ id, showModal, setShowModal }) => {
  const allUsers = useSelector((state) => state.app.users);
  const user = allUsers.filter((obj) => obj.id === id);
  const { name, age, email, gender } = user?.[0];

  return (
    <div className="modalBackground">
      <div className="modalContainer">
        <button onClick={() => setShowModal(false)}>Close</button>
        <h2>{name}</h2>
        <h2>{age}</h2>
        <h2>{email}</h2>
        <h2>{gender}</h2>
      </div>
    </div>
  );
};

export default Modal;
