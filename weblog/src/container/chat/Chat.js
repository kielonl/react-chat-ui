import React from "react";
import "./chat.css";
import Navbar from "./navbar";
import SideBar from "./sidebar";
import Message from "./components/message";
import Users from "./ChannelUsers";

const ChatPage = () => {
  return (
    <div className="body">
      <div className="left-bar">
        <SideBar />
      </div>
      <div className="right-bar">
        <Navbar />
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
