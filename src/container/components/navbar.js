import React from "react";
import "../style/navbar.css";
import removeCookie from "../components/rmCookie";
import { useNavigate } from "react-router-dom";
const Navbar = (props) => {
  const navigate = useNavigate();
  const handleLogout = () => {
    removeCookie("user");
    navigate("/");
    return;
  };

  return (
    <nav id="navbar" className="MainNavbar">
      <div className="navbarT">channel: {props.channelInfo}</div>

      <div className="navbarM">
        <a href="/about">About</a>
      </div>
      <div>
        <a href="/home">Channels</a>
      </div>
      <div className="navSpacer"></div>
      <div className="navbarL">
        <a id="logout" onClick={handleLogout} href="/">
          Logout
        </a>
      </div>
    </nav>
  );
};
export default Navbar;
