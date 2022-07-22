import React, { useEffect, useState, useRef } from "react";
import "./style/chat.css";
import Navbar from "./components/navbar";
import SideBar from "./components/sidebar";
import Message from "./components/message";
import SideBtn from "./components/SideBarBtn";
import io from "socket.io-client";
import { useNavigate } from "react-router-dom";
import getCookie from "./components/getCookie";

const ENDPOINT = "http://localhost:8001/";
let socket = io(ENDPOINT);
socket.on("chat message", console.log);

const ChatPage = () => {
  const navigate = useNavigate();
  if (!getCookie("user")) navigate("/");
  //console.log(JSON.stringify(Buffer.from(getCookie, "base64").toString()));
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
      });
      setMessage("");
    };
  };

  const sendMessage = (e) => {
    e.preventDefault();
    socket.emit("chat message", {
      type: "msg",
      value: message,
      userInfo: getCookie("user"),
    });
    setMessage("");
  };
  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [receivedMessage]);

  useEffect(() => {
    const event = (message) => {
      messages.current = [...messages.current, message];
      setReceivedMessage(messages.current);
    };

    const joinEvent = (socket) => {
      console.log("user con " + socket);
      messages.current = [
        ...messages.current,
        {
          message: { type: "notification", value: "user conected: " + socket },
        },
      ];
      setReceivedMessage(messages.current);
    };
    const leaveEvent = (socket) => {
      console.log("user con " + socket);
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

  const listItems = receivedMessage.map((wiadomosc, i) => {
    console.log(wiadomosc);

    if (wiadomosc.message.type === "img")
      return (
        <img src={wiadomosc.message.value} who={wiadomosc.type} alt="Red dot" />
      );
    return (
      <Message
        key={i}
        content={wiadomosc.message.value}
        author={wiadomosc.userNickname}
        color={wiadomosc.color}
        who={wiadomosc.type}
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
            <input type="file" className="sendFile" onChange={sendFile} />
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
