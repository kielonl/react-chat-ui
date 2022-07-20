import React from "react";
import "../public/message.css";

const Message = (props) => {
  return (
    <>
      <h1
        className={
          props.who === "sent"
            ? "message-block message-block-my"
            : props.who === "notification"
            ? "message-block message-block-notification"
            : "message-block message-block-not-my"
        }
      >
        {props.content}
      </h1>
    </>
  );
};
export default Message;
