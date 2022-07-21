import React from "react";
import "../style/navbar.css";
import removeCookie from "../components/rmCookie";
import { useNavigate } from "react-router-dom";
const Navbar = () => {
  const navigate = useNavigate();
  const handleLogout = () => {
    removeCookie("user");
    navigate("/");
    return;
  };
  return (
    <nav id="navbar" className="MainNavbar">
      <div className="navbarM">
        <a href="http://localhost:3000/About">About</a>
        <a href="http://localhost:3000/chanels">Channels</a>
      </div>
      <div className="navbarT">nazwa kanalu</div>
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
