import React, { useState } from "react";
import axios from "axios";
import "../style/LoginFrom.css";
import { useNavigate } from "react-router-dom";
const url = "http://localhost:8080/users";
const NameForm = (props) => {
  const [username, setName] = useState("");
  const [imageUrl, setUrl] = useState("");
  const navigate = useNavigate();
  console.log(props);

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
        props.setUser(response.data);
        navigate("/home");
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  return (
    <div id="fromlog">
      <div id="int">
        <h1 id="upertext">Chattuj 😈😈😈</h1>
        <p class="input-text-above">Username</p>
        <input
          type={"text"}
          name="user"
          value={username}
          autoComplete="off"
          onChange={(e) => setName(e.target.value)}
        />
        <p class="input-text-above">Image URL</p>
        <input
          type={"text"}
          name="url"
          value={imageUrl}
          autoComplete="off"
          onChange={(e) => setUrl(e.target.value)}
        />
        <p class="image-format-info">(jpg,jpeg,png)</p>
        <div id="button">
          <button className="loginButton" onClick={handleSumibt}>
            Submit
          </button>
        </div>
      </div>
    </div>
  );
};
export default NameForm;
