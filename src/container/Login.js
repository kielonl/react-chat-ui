import React, { useState } from "react";
import axios from "axios";
import "./style/Login.css";
import { useNavigate } from "react-router-dom";
import ErrorBox from "./components/ErrorBox";
import removeCookie from "./components/rmCookie";
import setCookie from "./components/setCookie";
import { LAST_API_URL } from "../setup";
const url = LAST_API_URL + "/users";
const Login = () => {
  const [username, setName] = useState("");
  const [imageUrl, setUrl] = useState("");
  const [errorMessage, setErrorMessage] = useState({});
  const navigate = useNavigate();
  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(url);
    axios
      .post(url, {
        username: username,
        imageUrl: imageUrl,
      })
      .then(function (response) {
        removeCookie("user");
        let obj = {
          uuid: response.data.uuid,
          username: response.data.username,
          imageUrl: response.data.image,
        };
        setCookie("user", JSON.stringify(obj));
        navigate("/home");
      })
      .catch(function (error) {
        console.log(error);
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
export default Login;
