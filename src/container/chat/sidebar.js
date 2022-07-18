import React from "react";
import "./public/sidebar.css";
import Users from "./components/ChannelUsers";
import { slide as Menu } from "react-burger-menu";
import "./public/sidebtn.css";
const SideBar = () => {
  return (
    <Menu>
      <Users />
    </Menu>
  );
};
export default SideBar;
