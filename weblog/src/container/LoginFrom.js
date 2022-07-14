import React, { useState } from "react";
import axios from "axios";
import "./LoginFrom.css";
import { useNavigate } from "react-router-dom";
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
        navigate("/home");
      })
      .catch(function (error) {
        console.log(error);
      });

    axios.get(`http://localhost:8080/users`).then((res) => {
      const persons = res.data;
      this.setState({ persons });
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
          <button onClick={handleSumibt}>Submit</button>
        </div>
      </div>
    </div>
  );
};
export default NameForm;
