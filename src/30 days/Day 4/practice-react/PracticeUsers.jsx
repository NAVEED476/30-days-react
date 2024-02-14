import React, { useEffect, useState } from "react";
import "./user.css";
import { FakeuserData } from "../practice-redux/Fakedata";
import { useSelector } from "react-redux";
const PracticeUsers = () => {
  const [name, setname] = useState("");
  const [lname, setlName] = useState("");
  const [email, setEmail] = useState("");
  const [number, setnumber] = useState("");
  const userdata = useSelector((state) => state.user.value);
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  console.log(userdata);

  return (
    <div className="user-cont">
      <div className="create-user">
        <form action="" className="form" onSubmit={handleSubmit}>
          <input
            type="text"
            value={name}
            onChange={(e) => {
              setname(e.target.value);
            }}
            placeholder="first name"
          />
          <br />
          <input
            type="text"
            value={lname}
            onChange={(e) => {
              setlName(e.target.value);
            }}
            placeholder="last name"
          />
          <br />
          <input
            type="text"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
            placeholder="email"
          />
          <br />
          <input
            type="text"
            value={number}
            onChange={(e) => {
              setnumber(e.target.value);
            }}
            placeholder="number"
          />
          <br />
          <button>Submit</button>
        </form>
      </div>
      <div className="display-user">
        {userdata &&
          userdata.map((user) => {
            return (
              <div>
                <h1>{user.firstname}</h1>
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default PracticeUsers;
