import React from "react";
import "../public/message.css";
const Message = (props) => {
  return (
    <>
      <h1
        class={"message-block message-block-not-my"}
        style={{ "background-color": props.color }}
      >
        <div class={"message-author"}>{props.author}</div> : {props.content}
      </h1>
    </>
  );
};
export default Message;
