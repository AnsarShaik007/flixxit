import React from "react";
import "../App.css";
import { IoMenu } from "react-icons/io5";
import { FaUser } from "react-icons/fa";

function Navbar() {
  return (
    <div className="navBarDiv">
      <IoMenu size={25} color="white" />
      <button className="loginButton">
        <FaUser />
        Login
      </button>
    </div>
  );
}

export default Navbar;
