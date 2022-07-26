import React from "react";
import "../style/message.css";

const Photo = (props) => {
  return (
    <>
      <h1 style={{ backgroundColor: props.color }} className="photo">
        <img src={props.image} alt="profile-pic" className="pfp" />
        <div className="message-author">{props.author}:</div>
        <img src={props.content} alt="" style={{ background: props.color }} />
      </h1>
    </>
  );
};
export default Photo;
