import React, { useEffect, useState, useRef } from "react";
import "./style/chat.css";
import Navbar from "./components/navbar";
import SideBar from "./components/sidebar";
import Message from "./components/message";
import Photo from "./components/photo";
import SideBtn from "./components/SideBarBtn";
import io from "socket.io-client";
import moment from "moment";
import { SOCKET_URL } from "../setup";
import { logout } from "./components/logout";

const ENDPOINT = SOCKET_URL;
let socket = io(ENDPOINT);

const ChatPage = (props) => {
  if (Object.keys(props.user).length === 0) {
    logout();
  }

  const room = props.channel;
  const user = props.user;

  const [receivedMessage, setReceivedMessage] = useState([]);
  const [message, setMessage] = useState("");
  const messages = useRef([]);
  const bottomRef = useRef(null);

  const sendFile = (e) => {
    const [file] = e.target.files;
    let reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = function () {
      socket.emit(
        "chat message",
        {
          type: "img",
          value: reader.result,
          userInfo: props.user,
        },
        room
      );
      setMessage("");
    };
  };

  const sendMessage = (e) => {
    e.preventDefault();
    socket.emit(
      "chat message",
      {
        type: "msg",
        value: message,
        userInfo: props.user,
      },
      room
    );

    setMessage("");
  };
  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [receivedMessage]);

  useEffect(() => {
    const event = (message) => {
      const start = moment().format(" h:mm:ss a");
      message.time = start;
      messages.current = [...messages.current, message];
      setReceivedMessage(messages.current);
    };

    const joinEvent = (name) => {
      messages.current = [
        ...messages.current,
        {
          message: {
            type: "notification",
            value: name + " joined channel",
          },
        },
      ];
      setReceivedMessage(messages.current);
    };
    const leaveEvent = (name) => {
      messages.current = [
        ...messages.current,
        {
          message: {
            type: "notification",
            value: name + " disconected from channel",
          },
        },
      ];
      setReceivedMessage(messages.current);
    };
    socket.emit("joinRoom", room, user);

    socket.on("chat message", event);
    socket.on("hello", joinEvent);
    socket.on("bye", leaveEvent);

    return () => {
      socket.off("hello", joinEvent);
      socket.off("bye", leaveEvent);
      socket.off("chat message", event);
    };
  });
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
        time={msgContainer.time}
      />
    );
  });

  return (
    <div className="body">
      <SideBtn />
      <div className="left-bar">
        <SideBar user={props.channel} />
      </div>
      <div className="right-bar">
        <Navbar itemListElement="h1" channelInfo={room} />
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
              accept="image/*"
            />
            <label htmlFor="files" className="SendFile">
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
