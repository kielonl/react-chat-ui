import React from "react";
import "../style/message.css";

const Message = (props) => {
  return (
    <>
      <h1
        className={
          props.who === "notification"
            ? "message-block message-block-notification"
            : "message-block message-block-not-my"
        }
        style={{ backgroundColor: props.color }}
      >
        <img src={props.image} className="pfp" alt="profile-pic" />
        <div className={"message-author"}>
          {props.author}
          {props.time}
        </div>{" "}
        : {props.content}
      </h1>
    </>
  );
};
export default Message;
