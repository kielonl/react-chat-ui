import React from "react";
import "./sidebar.css";
import Users from "./ChannelUsers";
import { slide as Menu } from "react-burger-menu";
const SideBar = () => {
  return (
    <Menu>
      <Users />
    </Menu>
  );
};
export default SideBar;
