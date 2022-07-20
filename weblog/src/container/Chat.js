import React, { useEffect, useState, useRef } from "react";
import "./public/chat.css";
import Navbar from "./components/navbar";
import SideBar from "./components/sidebar";
import Message from "./components/message";
import SideBtn from "./components/SideBarBtn";
import io from "socket.io-client";
const ENDPOINT = "http://192.168.2.80:8000";
let socket = io(ENDPOINT);
socket.on("chat message", console.log);

const ChatPage = () => {
  const [receivedMessage, setReceivedMessage] = useState([]);
  const [message, setMessage] = useState("");
  const messages = useRef([]);
  const bottomRef = useRef(null);
  const sendMessage = (e) => {
    e.preventDefault();
    socket.emit("chat message", message);
    setMessage("");
  };
  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [receivedMessage]);

  useEffect(() => {
    const event = (message) => {
      console.log(socket.id);
      messages.current = [...messages.current, message];
      console.log(messages.current);
      setReceivedMessage(messages.current);
    };
    socket.on("chat message", event);
    return () => {
      socket.off("chat message", event);
    };
  }, []);
  const listItems = receivedMessage.map((wiadomosc, i) => {
    console.log(wiadomosc);
    return (
      <Message
        key={i}
        content={wiadomosc.message}
        author={wiadomosc.userNickname}
        color={wiadomosc.color}
        who="received"
      />
    );
  });
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
            {listItems}
            <div ref={bottomRef}></div>
          </div>
        </div>
        <form onSubmit={sendMessage}>
          <div className="send-message">
            <input
              placeholder="..."
              value={message}
              onChange={(e) => {
                setMessage(e.target.value);
              }}
              id="input"
              autoComplete="off"
            ></input>
            <button type="submit" onClick={sendMessage} className="send">
              🍻
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
export default ChatPage;
