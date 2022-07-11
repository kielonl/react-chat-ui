import React, { useState } from "react";
import axios from "axios";
import "./LoginFrom.css";
const url = "http://192.168.2.81:8080/Users";
const NameForm = () => {
  const [name, setName] = useState("");
  const [adres, setUrl] = useState("");

  const handleSumibt = async (e) => {
    e.preventDefault();
    try {
      const resp = await axios.post(url, { name: name, adres: adres });
      console.log(resp.data);
    } catch (error) {
      console.log(error.response);
    }
  };
  return (
    <div id="fromlog">
      <div id="upertext">Super app chat</div>
      <div id="log">Login</div>
      <div id="int">
        <input
          type={"text"}
          name="user"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type={"text"}
          name="url"
          value={adres}
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
