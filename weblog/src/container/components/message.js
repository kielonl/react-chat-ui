import React from "react";
import "../public/message.css";
const Message = (props) => {
  return (
    <>
      <h1
        class={
          props.who === "sent"
            ? "message-block message-block-my"
            : "message-block message-block-not-my"
        }
      >
        {props.content}
      </h1>
    </>
  );
};
export default Message;
