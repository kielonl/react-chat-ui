import React from "react";
import "./components/public/chat.css";
import Navbar from "./components/navbar";
import SideBar from "./components/sidebar";
import Message from "./components/message";
import SideBtn from "./components/SideBarBtn";

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
          <button type="submit" className="send">
            🍻
          </button>
        </div>
      </div>
    </div>
  );
};
export default ChatPage;
