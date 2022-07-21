import React from "react";
import "../style/navbar.css";

const Navbar = () => {
  return (
    <nav id="navbar" className="MainNavbar">
      <div className="navbarM">
        <a href="http://localhost:3000/About">About</a>
        <a href="http://localhost:3000/chanels">Channels</a>
      </div>
      <div className="navbarT">nazwa kanalu</div>
      <div className="navSpacer"></div>
      <div className="navbarL">
        <a id="logout" href="http://localhost:3000/Login">
          Logout
        </a>
      </div>
    </nav>
  );
};
export default Navbar;