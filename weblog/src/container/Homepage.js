import React, { useEffect, useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import "./Chat.css";

const axios = require("axios");
const chanelUrl = "http://localhost:8080/channels";
const userUrl = "http://localhost:8080/users";
const WebChat = () => {
  const [data, setDate] = useState([]);
  const [channels, setchannels] = useState("");
  const [channelOwner, setowner] = useState("");
  const navigate = useNavigate();
  //odbieranie danych użytkownik
  const handleSubmit = async (e) => {
    console.log(channels);
    axios
      .get(userUrl)
      .then((resp) => {
        console.log("pobieranie danych", resp.data);
        setDate(resp.data);
      })
      .catch((err) => console.log(err));
  };
  useEffect(() => {
    handleSubmit();
  }, []);
  //wysyłanie danych do chanelss
  //do poprawy

  const handlePost = async (e) => {
    const axios = require("axios");
    console.log(channels);
    axios
      .get("http://localhost:8080/channels")
      .then((resp) => {
        console.log("pobieranie danych", resp.data);
        axios
          .get("http://localhost:8080/users/" + resp.data.owner)
          .then((resultofuserget) => {
            console.log(resultofuserget);
          });-
        //   setDate(resp.data);
      })
      .catch((err) => console.log(err));
  };
  useEffect(() => {
    handlePost();
  }, []);
  return (
    <div className="abouttext">
      <h1>WebChat</h1>
      <div id="chanels">
        <input
          type={"text"}
          placeholder="Podaj nazwe kanału"
          name="chanelname"
          value={channels}
          onChange={(e) => setchannels(e.target.value)}
          className="channelname"
        ></input>
        <button onClick={handleSubmit}>Create chanel</button>
        <div id="listusers">
          {data.map((data, index) => {
            return (
              <table className="liusername" key={index}>
                <tr>
                  <td>{data.owner}</td>

                  <td>{data.channelUuid}</td>

                  <td>{data.dataTime}</td>

                  <td>{data.maxNumberOfMembers}</td>
                </tr>
              </table>
            );
          })}
        </div>

        <div id="listchannels">
          <table>
            <tr>
              <td>List channels</td>
            </tr>
            <tr></tr>
          </table>
        </div>
      </div>
      <p></p>
    </div>
  );
};
export default WebChat;
