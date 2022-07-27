import React, { useState } from "react";
import axios from "axios";
import "./style/Login.css";
import { useNavigate } from "react-router-dom";
import ErrorBox from "./components/ErrorBox";
import removeCookie from "./components/rmCookie";
import { LAST_API_URL } from "../setup";
const url = LAST_API_URL + "/users";
const Login = (props) => {
  const [username, setName] = useState("");
  const [imageUrl, setUrl] = useState("");
  const [errorMessage, setErrorMessage] = useState({});
  const navigate = useNavigate();
  const handleSubmit = async (e) => {
    e.preventDefault();
    axios
      .post(url, {
        username: username,
        imageUrl: imageUrl,
      })
      .then(function (response) {
        removeCookie("user");
        props.setUser(response.data);
        navigate("/home");
        setErrorMessage({
          value: "",
          isError: false,
        });
      })
      .catch(function (error) {
        setErrorMessage({
          value: error.response.data.errorMessage,
          isError: true,
        });
      });
  };
  return (
    <div className="Login-body">
      <div className="login-text">
        <div className="login-inputs">
          <h1 className="text-color">Enter the space</h1>
          <p className="text-color">Username</p>
          <input
            type={"text"}
            name="user"
            value={username}
            className="int-input"
            autoComplete="off"
            onChange={(e) => setName(e.target.value)}
          />
          <p className="text-color">Image URL</p>
          <input
            type={"text"}
            name="url"
            value={imageUrl}
            className="int-input"
            autoComplete="off"
            onChange={(e) => setUrl(e.target.value)}
          />
          <p className="image-format-info">(jpg,jpeg,png)</p>
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
