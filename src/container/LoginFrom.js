import React, { useState } from "react";
import axios from "axios";
import "./LoginFrom.css";

const NameForm = () => {
  const postdata = () => {
    const data = {
      username: "eoeo",
    };
    axios.post("http://192.168.2.81:8080/Users", data).then((data) => {
      console.log(data);
    });
  };

  return (
    <div id="fromlog">
      <label>
        USER:
        <input type={"text"} name="user" />
      </label>
      <button onClick={postdata}>Submit</button>
    </div>
  );
};
export default NameForm;
