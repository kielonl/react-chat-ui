import React from "react";
import "./../public/navbar.css";
function Navbar() {
  return (
    <nav className="MainNavbar" id="navbar">
      <div className="navbarM">
        <a href="http://localhost:3000/About">About</a>
        <a href="http://localhost:3000/Chat">Chat</a>
      </div>
      <div className="navbarL">
        <a id="logout" href="http://localhost:3000/Login">
          Logout
        </a>
      </div>
    </nav>
  );
}
export default Navbar;