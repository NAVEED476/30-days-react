import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { adduser } from "../Redux/actions";

const Users = () => {
  const userData = useSelector((state) => state.users.value);
  const dispatch = useDispatch();
  const [name, setname] = useState("");
  const [uname, setUname] = useState("");
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
        {/* <button
          onClick={dispatch(
            adduser({ id: 1, name, uname })
          )}
        >
          Submit
        </button> */}
        {/* </form> */}
      </div>
      <div className="user">
        {userData.map((obj) => {
          return (
            <div key={obj.id}>
              <h3>{obj.name}</h3>
              <h3>{obj.username}</h3>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Users;
