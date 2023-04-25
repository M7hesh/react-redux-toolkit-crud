import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { showUser, deleteUser } from "../features/userDetailsSlice";
import Modal from "./Modal";
import { Link } from "react-router-dom";

const Read = () => {
  const dispatch = useDispatch();
  const { users, loading, searchData } = useSelector((state) => state.app);
  const [id, setId] = useState("");
  const [showModal, setShowModal] = useState(false);
  const [filterByGender, setFilterByGender] = useState("");

  useEffect(() => {
    dispatch(showUser());
  }, [dispatch]);
  // Dispatch is a safe dependency to add and it won't cause infinite loops.

  const handleGenderFilter = (e) => {
    setFilterByGender(e.target.value);
  };

  if (loading) {
    return <h2>Loading</h2>;
  }

  return (
    <div className=" mx-auto">
      {showModal && (
        <Modal
          id={id}
          showModal={showModal}
          setShowModal={setShowModal}
        ></Modal>
      )}
      <h1 className=" mx-auto">All details</h1>
      <input
        className="form-check-input"
        type="radio"
        name="gender"
        value=""
        checked={filterByGender === ""}
        onChange={handleGenderFilter}
      />
      <label className="form-check-label">All</label>
      <input
        className="form-check-input"
        type="radio"
        name="gender"
        value="Male"
        checked={filterByGender === "Male"}
        onChange={handleGenderFilter}
      />
      <label className="form-check-label">Male</label>
      <input
        className="form-check-input"
        type="radio"
        name="gender"
        value="Female"
        checked={filterByGender === "Female"}
        onChange={handleGenderFilter}
      />
      <label className="form-check-label">Female</label>
      {users &&
        users
          .filter((user) => {
            if (searchData.length === 0) {
              return user;
            } else {
              return user?.name
                ?.toLowerCase()
                .includes(searchData.toLowerCase());
            }
          })
          .filter((user) => {
            if (filterByGender) {
              return user.gender === filterByGender;
            } else {
              return user;
            }
          })
          .map((user) => (
            <div key={user.id} className="card w-25 mx-auto my-2">
              <div className="card-body mx-auto">
                <h5 className="card-title">{user.name}</h5>
                <h6 className="card-subtitle mb-2 text-muted">{user.email}</h6>
                <p className="card-text">{user.age}</p>
                <p className="card-text">{user.gender}</p>
                <button
                  className="card-link"
                  onClick={() => [setId(user.id), setShowModal(true)]}
                >
                  View
                </button>
                <Link to={`/update/${user.id}`} className="card-link">
                  Edit
                </Link>
                <Link
                  onClick={() => dispatch(deleteUser(user.id))}
                  className="card-link"
                >
                  Delete
                </Link>
              </div>
            </div>
          ))}
    </div>
  );
};

export default Read;
