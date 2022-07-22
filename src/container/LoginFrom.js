import React, { useState } from "react";
import axios from "axios";
import "./style/LoginFrom.css";
import { useNavigate } from "react-router-dom";
import ErrorBox from "./components/ErrorBox";
import removeCookie from "./components/rmCookie";
import setCookie from "./components/setCookie";
import getCookie from "./components/getCookie";

const url = "http://localhost:8080/users";
const LoginFrom = () => {
  const [username, setName] = useState("");
  const [imageUrl, setUrl] = useState("");
  const [errorMessage, setErrorMessage] = useState({});
  const navigate = useNavigate();
  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(username, imageUrl);
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
        obj = JSON.stringify(obj);
        setCookie("user", btoa(obj));
        getCookie("user");
        navigate("/chat");
      })
      .catch(function (error) {
        console.log(error.response.data);
        console.log("cos");
        setErrorMessage({
          value: error.response.data.errorMessage,
          isError: true,
        });
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
          <button className="loginButton" onClick={handleSubmit}>
            Submit
          </button>
        </div>
        <ErrorBox error={errorMessage.value} ifError={errorMessage.isError} />
      </div>
    </div>
  );
};
export default LoginFrom;
