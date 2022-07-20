import React from "react";
import "../style/chat.css";
import Navbar from "./navbar";
import SideBar from "./sidebar";
import Message from "./message";
import SideBtn from "./SideBarBtn";

const ChatPage = () => {
  return (
    <div className="body">
      <SideBtn />
      <div className="left-bar">
        <SideBar />
      </div>
      <div className="right-bar">
        <Navbar itemListElement="h1" />
        <div className="chat-window">
          <div className="messages">
            <Message content="message" who="sent" />
            <Message content="message" who="received" />
          </div>
        </div>
        <div className="send-message">
          <input placeholder="..."></input>
        </div>
      </div>
    </div>
  );
};
export default ChatPage;
