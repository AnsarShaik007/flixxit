import React from "react";
import "../App.css";
import { IoHome } from "react-icons/io5";
import { IoIosCloseCircle } from "react-icons/io";
import { FaSearch } from "react-icons/fa";
import { FaBookmark } from "react-icons/fa";
import { IoIosLogOut } from "react-icons/io";

import { Link } from "react-router-dom";

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
    link: "/logout",
    name: "Logout",
    icon: <IoIosLogOut color="white" size={25} />,
  },
];
const button = [
  {
    func: () => {
      console.log("Upload");
    },
    name: "Upload",
    icon: <IoHome color="white" size={25} />,
  },

  {
    func: () => {
      console.log("LogOut");
    },
    name: "Logout",
    icon: <IoHome color="white" size={25} />,
  },
];
function Sidebar() {
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
