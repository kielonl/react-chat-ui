import React from "react";
import "../style/sidebar.css";
import Users from "./ChannelUsers";
import { slide as Menu } from "react-burger-menu";
const SideBar = (props) => {
  return (
    <Menu>
      <Users channel={props.channel} />
    </Menu>
  );
};
export default SideBar;
