import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { updateUser } from "../features/userDetailsSlice";

const Update = () => {
  const { id } = useParams();
  const { users } = useSelector((state) => state.app);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [updatedData, setUpdatedData] = useState({});

  useEffect(() => {
    const user = users.filter((obj) => obj.id === id);
    setUpdatedData(user?.[0]);
  }, [id, users]);

  const handleUpdateData = (e) => {
    setUpdatedData({ ...updatedData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    dispatch(updateUser(updatedData));
    navigate("/read");
  };

  return (
    <form className="w-50 mx-auto my-5">
      <h2 className="my-2">Edit details</h2>
      <div className="mb-3">
        <label className="form-label">Name</label>
        <input
          type="text"
          name="name"
          className="form-control"
          value={updatedData?.name}
          onChange={handleUpdateData}
        />
      </div>
      <div className="mb-3">
        <label className="form-label">Email address</label>
        <input
          type="email"
          className="form-control"
          name="email"
          aria-describedby="emailHelp"
          value={updatedData?.email}
          onChange={handleUpdateData}
        />
      </div>
      <div className="mb-3">
        <label className="form-label">Age</label>
        <input
          type="text"
          className="form-control"
          name="age"
          value={updatedData?.age}
          onChange={handleUpdateData}
        />
      </div>
      <div className="form-check">
        <input
          className="form-check-input"
          type="radio"
          name="gender"
          value="Male"
          checked={updatedData?.gender === "Male"}
          onChange={handleUpdateData}
        />
        <label className="form-check-label">Male</label>
      </div>
      <div className="form-check">
        <input
          className="form-check-input"
          type="radio"
          name="gender"
          value="Female"
          checked={updatedData?.gender === "Female"}
          onChange={handleUpdateData}
        />
        <label className="form-check-label">Female</label>
      </div>
      <button type="button" className="btn btn-primary" onClick={handleSubmit}>
        Submit
      </button>
    </form>
  );
};

export default Update;
