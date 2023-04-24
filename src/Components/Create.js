import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { createUser } from "../features/userDetailsSlice";
import { useNavigate } from "react-router-dom";

const Create = () => {
  const [user, setUser] = useState({});
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleUserData = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    dispatch(createUser(user));
    navigate("/read");
  };
  return (
    <form className="w-50 mx-auto my-5">
      <h2 className="my-2">Enter details</h2>
      <div className="mb-3">
        <label className="form-label">Name</label>
        <input
          type="text"
          name="name"
          className="form-control"
          onChange={handleUserData}
        />
      </div>
      <div className="mb-3">
        <label className="form-label">Email address</label>
        <input
          type="email"
          className="form-control"
          name="email"
          aria-describedby="emailHelp"
          onChange={handleUserData}
        />
      </div>
      <div className="mb-3">
        <label className="form-label">Age</label>
        <input
          type="number"
          className="form-control"
          name="age"
          onChange={handleUserData}
        />
      </div>
      <div className="form-check">
        <input
          className="form-check-input"
          type="radio"
          name="gender"
          value="Male"
          onChange={handleUserData}
        />
        <label className="form-check-label">Male</label>
      </div>
      <div className="form-check">
        <input
          className="form-check-input"
          type="radio"
          name="gender"
          value="Female"
          onChange={handleUserData}
        />
        <label className="form-check-label">Female</label>
      </div>
      <button type="button" className="btn btn-primary" onClick={handleSubmit}>
        Submit
      </button>
    </form>
  );
};

export default Create;
