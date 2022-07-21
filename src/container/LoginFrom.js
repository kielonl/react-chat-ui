import React, { useState } from "react";
import axios from "axios";
import "./style/LoginFrom.css";
import { useNavigate } from "react-router-dom";
import setCookie from "./components/setCookie";
import removeCookie from "./components/rmCookie";
import getCookie from "./components/getCookie";

const url = "http://localhost:8080/users";
const LoginFrom = () => {
  const [username, setName] = useState("");
  const [imageUrl, setUrl] = useState("");
  const navigate = useNavigate();
  const handleUser = (usern, img) => {
    return sessionStorage.setItem("userName", usern);
  };

  const handleSumibt = async (e) => {
    e.preventDefault();
    console.log(username, imageUrl);
    handleUser(username, imageUrl);
    console.log(sessionStorage.getItem("userName"));
    axios
      .post(url, {
        username: username,
        imageUrl: imageUrl,
      })
      .then(function (response) {
        console.log(response.data);
        removeCookie("user");
        let obj = {
          uuid: response.data.uuid,
          username: response.data.username,
          imageUrl: response.data.image,
        };
        setCookie("user", btoa(JSON.stringify(obj)));
        getCookie("user");
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
