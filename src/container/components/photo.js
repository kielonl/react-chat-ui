import React from "react";
import "../style/message.css";

const Photo = (props) => {
  return (
    <>
      <h1 style={{ backgroundColor: props.color }} className="photo">
        <div className="message-author">{props.author}:</div>
        <img src={props.content} alt="" />
      </h1>
    </>
  );
};
export default Photo;
