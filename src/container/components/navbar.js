import React from "react";
import "../style/navbar.css";
import { logout } from "./logout";

const Navbar = (props) => {
  const handleLogout = () => {
    logout();
  };
  console.log(props);

  if (!props.channelInfo.channelName) return <div></div>;
  return (
    <nav id="navbar" className="MainNavbar">
      <div className="navbarT">channel: {props.channelInfo.channelName}</div>
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
