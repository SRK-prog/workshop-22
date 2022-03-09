import React from "react";
import { useSelector } from "react-redux";
import "../App.css";

const User = () => {
  const data = useSelector((state) => state.userData);
  return (
    <div className="CardContainer">
      <div style={{ textAlign: "center" }}>
        <div className="Message">You have successfully logged in!</div>
        <div className="Welcome">Welcome</div>
      </div>
      <div className="Name">
        <span>Name: </span>
        {data.name}
      </div>
      <div className="Email">
        <span>Email: </span>
        {data.email}
      </div>
    </div>
  );
};

export default User;
