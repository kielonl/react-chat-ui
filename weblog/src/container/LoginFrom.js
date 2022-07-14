import React, { useState } from "react";
import axios from "axios";
import "./LoginFrom.css";
import WebChat from "./Chat";
import { useNavigate, Link } from "react-router-dom";
const url = "http://localhost:8080/users";
const NameForm = () => {
  const [username, setName] = useState("");
  const [imageUrl, setUrl] = useState("");
  const navigate = useNavigate();

  const handleSumibt = async (e) => {
    e.preventDefault();
    console.log(username, imageUrl);
    axios
      .post(url, {
        username: username,
        imageUrl: imageUrl,
      })
      .then(function (response) {
        console.log(response);
        navigate("/Chat");
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  return (
    <div id="fromlog">
      <div id="upertext">Super app chat</div>
      <div id="log">Login</div>
      <div id="int">
        <input
          type={"text"}
          name="user"
          value={username}
          placeholder="name/login"
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type={"text"}
          name="url"
          value={imageUrl}
          placeholder="url"
          onChange={(e) => setUrl(e.target.value)}
        />
      </div>
      <div id="button">
        <button onClick={handleSumibt}>Submit</button>
      </div>
    </div>
  );
};
export default NameForm;
