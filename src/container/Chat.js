import React, { useEffect, useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import "./style/chat.css";
import Navbar from "./components/navbar";
import SideBar from "./components/sidebar";
import Message from "./components/message";
import Photo from "./components/photo";
import SideBtn from "./components/SideBarBtn";
import io from "socket.io-client";
import removeCookie from "./components/rmCookie";
import moment from "moment";
import { SOCKET_URL } from "../setup";
const ENDPOINT = SOCKET_URL;
let socket = io(ENDPOINT);

const ChatPage = (props) => {
  const navigate = useNavigate();
  if (props.user === "{}" || !props.user) {
    removeCookie("user");
    navigate("/");
  }
  const [receivedMessage, setReceivedMessage] = useState([]);
  const [message, setMessage] = useState("");
  const messages = useRef([]);
  const bottomRef = useRef(null);

  const sendFile = (e) => {
    const [file] = e.target.files;
    let reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = function () {
      socket.emit("chat message", {
        type: "img",
        value: reader.result,
        userInfo: props.user,
      });
      setMessage("");
    };
  };

  const sendMessage = (e) => {
    e.preventDefault();
    socket.emit("chat message", {
      type: "msg",
      value: message,
      userInfo: props.user,
    });

    setMessage("");
  };
  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [receivedMessage]);

  useEffect(() => {
    const event = (message) => {
      const start = moment().format(" h:mm:ss a");
      console.log(start);
      message.time = start;
      messages.current = [...messages.current, message];
      setReceivedMessage(messages.current);
    };
    const joinEvent = (socket) => {
      messages.current = [
        ...messages.current,
        {
          message: {
            type: "notification",
            value: "user joined chat",
          },
        },
      ];
      setReceivedMessage(messages.current);
    };
    const leaveEvent = (socket) => {
      messages.current = [
        ...messages.current,
        { message: { type: "notification", value: "user disconected" } },
      ];
      setReceivedMessage(messages.current);
    };

    socket.on("chat message", event);
    socket.on("hello", joinEvent);
    socket.on("bye", leaveEvent);

    return () => {
      socket.off("hello", joinEvent);
      socket.off("bye", leaveEvent);
      socket.off("chat message", event);
    };
  }, []);

  const listItems = receivedMessage.map((msgContainer, i) => {
    if (msgContainer.message.type === "img") {
      return (
        <Photo
          key={i}
          content={msgContainer.message.value}
          author={msgContainer.userNickname}
          color={msgContainer.color}
          image={props.user.image}
        />
      );
    }
    return (
      <Message
        key={i}
        content={msgContainer.message.value}
        author={msgContainer.userNickname}
        color={msgContainer.color}
        who={msgContainer.message.type}
        image={props.user.image}
        time={message.time}
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
              className="message-input"
            />
            <input
              type="file"
              id="files"
              className="hidden"
              onChange={sendFile}
            />
            <label for="files" className="SendFile">
              📸
            </label>
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
