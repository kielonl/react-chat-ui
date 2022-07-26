import React from "react";
function Author(props) {
  return (
    <div className="author">
      <img
        src={props.source}
        //alt="website develeper"
        className="authorPhoto"
      ></img>
      <div className="container">
        <h4>
          <b>{props.name}</b>
        </h4>
        <p>{props.role}</p>
      </div>
    </div>
  );
}
export default Author;
