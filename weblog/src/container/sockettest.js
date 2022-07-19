import React, { useEffect, useState } from "react";
import io from "socket.io-client";
const ENDPOINT = "http://192.168.2.80:8000/";
let socket = io(ENDPOINT);

const Socket = () => {
  const [message, setMessage] = useState("");
  const sendMessage = () => {
    socket.emit("chat message", message);
    setMessage("");
  };
  useEffect(() => {
    console.log("cos");
    socket.on("connection", (socket) => {});
  }, []);

  return (
    <>
      <input
        value={message}
        onChange={(e) => {
          setMessage(e.target.value);
        }}
        id="input"
        autoComplete="off"
      />
      <button onClick={sendMessage}>Send</button>
    </>
  );
};
export default Socket;
