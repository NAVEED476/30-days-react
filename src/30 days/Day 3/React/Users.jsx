import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { adduser, deleteuser, updateUser } from "../Redux/actions";

const Users = () => {
  const userData = useSelector((state) => state.users.value);
  const dispatch = useDispatch();
  const [name, setname] = useState("");
  const [uname, setUname] = useState("");
  const [updatename, setUpdateName] = useState("");

  const handleSubmit = (e) => {
    // Dispatch action here
    e.preventDefault();
    dispatch(adduser({ id: userData[userData.length - 1] + 1, name, uname }));
  };

  return (
    <div>
      <div>
        {/* <form action="" onSubmit={handleSubmit}> */}
        <input
          type="text"
          value={name}
          onChange={(e) => setname(e.target.value)}
          placeholder="Name ...."
        />
        <input
          type="text"
          value={uname}
          onChange={(e) => setUname(e.target.value)}
          placeholder="user Name"
        />
        <button type="submit" onClick={handleSubmit}>
          Submit
        </button>
        {/* </form> */}
      </div>
      <div
        className="user"
        style={{ display: "flex", flexDirection: "column" }}
      >
        {userData.map((obj) => {
          return (
            <div
              key={obj.id}
              style={{
                margin: "auto",
                marginTop: "100px",
                width: "250px",
                height: "150px",
                border: "1px solid red",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                flexDirection: "column",
              }}
            >
              <h3>{obj.name}</h3>
              <h3>{obj.username}</h3>
              <input
                type="text"
                onChange={(e) => setUpdateName(e.target.value)}
                placeholder="update user name"
              />
              <button
                onClick={() => {
                  dispatch(
                    updateUser({ id: obj.id, uname: updatename })
                  );
                }}
              >
                Update
              </button>
              <button
                onClick={() => {
                  dispatch(deleteuser({ id: obj.id }));
                }}
              >
                delete
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Users;
