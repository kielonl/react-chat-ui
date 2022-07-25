import React, { useState } from "react";
import axios from "axios";
import "./style/Login.css";
import { useNavigate } from "react-router-dom";
import ErrorBox from "./components/ErrorBox";
import removeCookie from "./components/rmCookie";
import setCookie from "./components/setCookie";

const url = "http://localhost:8080/users";
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
        console.log(response.data);
        setCookie("user", JSON.stringify(response.data));
        props.setUser(response.data);
        navigate("/home");
      })
      .catch(function (error) {
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
