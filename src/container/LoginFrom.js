import React, { useState } from "react";
import axios from "axios";
import "./style/LoginFrom.css";
import { useNavigate } from "react-router-dom";
import removeCookie from "./components/rmCookie";
const url = "http://localhost:8080/users";
const LoginFrom = (props) => {
  const [username, setName] = useState("");
  const [imageUrl, setUrl] = useState("");
  const navigate = useNavigate();
  const handleSumibt = async (e) => {
    e.preventDefault();
    axios
      .post(url, {
        username: username,
        imageUrl: imageUrl,
      })
      .then(function (response) {
        removeCookie("user");
        setCookie("user", JSON.stringify(response.data));
        props.setUser(response.data);
        navigate("/chat");
      })
      .catch(function (error) {
        console.log(error);
      });
  };
  return (
    <div id="fromlog">
      <div id="int">
        <h1 id="upertext">Enter the space</h1>
        <p className="input_text_above">Username</p>
        <input
          type={"text"}
          name="user"
          value={username}
          autoComplete="off"
          onChange={(e) => setName(e.target.value)}
        />
        <p className="input_text_above">Image URL</p>
        <input
          type={"text"}
          name="url"
          value={imageUrl}
          autoComplete="off"
          onChange={(e) => setUrl(e.target.value)}
        />
        <p className="image-format-info">(jpg,jpeg,png)</p>
        <div id="button">
          <button className="loginButton" onClick={handleSumibt}>
            Submit
          </button>
        </div>
      </div>
    </div>
  );
};
export default LoginFrom;
