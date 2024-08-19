import React from "react";
import "../App.css";
import { IoHome } from "react-icons/io5";
import { IoIosCloseCircle } from "react-icons/io";
import { FaSearch } from "react-icons/fa";
import { FaBookmark } from "react-icons/fa";
import { IoIosLogOut } from "react-icons/io";
import { BsFillSignIntersectionFill } from "react-icons/bs";

import { Link, useNavigate } from "react-router-dom";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { firebaseAuth } from "../utils/firebase-config";

const menuItems = [
  {
    link: "/",
    name: "home",
    icon: <IoHome color="white" size={25} />,
  },

  {
    link: "/search",
    name: "Search",
    icon: <FaSearch color="white" size={25} />,
  },

  {
    link: "/favourite",
    name: "Favourite",
    icon: <FaBookmark color="white" size={25} />,
  },

  {
    link: "/signup",
    name: "Signup",
    icon: <BsFillSignIntersectionFill color="white" size={25} />,
  },

  {
    link: "/login",
    name: "Login",
    icon: <BsFillSignIntersectionFill color="white" size={25} />,
  },

  {
    link: "/logout",
    name: "Nothing",
    icon: <IoIosLogOut color="white" size={25} />,
  },
];
const button = [
  {
    func: () => {
      signOut(firebaseAuth);
    },
    name: "Logout",
    icon: <IoHome color="white" size={25} />,
  },
];
function Sidebar() {
  const navigate = useNavigate();
  onAuthStateChanged(firebaseAuth, (currentUser) => {
    if (!currentUser) navigate("/login");
  });
  return (
    <div className="menuContainer">
      <div className="flex">
        <div className="logo">Flixxit</div>
        <div className="close">
          <IoIosCloseCircle size={25} />
        </div>
      </div>
      {menuItems.map((item) => (
        <Link to={item.link} style={{ textDecoration: "none" }}>
          <div className="elements">
            {item.icon}
            <div className="navText">{item.name}</div>
          </div>
        </Link>
      ))}
      <hr></hr>
      {button.map((item) => (
        <div className="elements" onClick={() => item.func()}>
          {item.icon}
          <div className="navText">{item.name}</div>
        </div>
      ))}
    </div>
  );
}

export default Sidebar;
