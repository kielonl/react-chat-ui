import React, { useEffect, useState } from "react";
import "./style/ChannelList.css";
import { API_URL } from "../setup";
const axios = require("axios");
const ChannelList = (props) => {
  const [data, setDate] = useState([]);
  const [maxUsers, setMaxUsers] = useState(0);
  const [channel, setChannel] = useState("");
  const handleSubmit = async (e) => {
    if (!maxUsers || !channel || !channel < 0) {
      alert("Popraw error");
      return;
    }
    axios
      .post(API_URL + "channels", {
        uuid: props.user.uuid,
        maxUsers: maxUsers,
        channelName: channel,
      })
      .then(function (response) {
        pullData();
      })
      .catch(function (error) {
        console.log(error);
      });
  };
  const pullData = async (e) => {
    const channelArray = [];
    const channelsGET = await axios.get(API_URL + "channels");
    for (let i = 0; i < channelsGET.data.length; i++) {
      const ch = channelsGET.data[i];
      const result = await axios.get(API_URL + "users/" + ch.owner);

      const channelObject = {
        ...ch,
        username: result.data.username,
      };
      channelArray.push(channelObject);
    }
    setDate(channelArray);
  };
  useEffect(() => {
    pullData();
  }, []);
  if (!data) return <div></div>;
  return (
    <div className="abouttext">
      <h1>WebChat</h1>
      <p>Nazwa kanału powinna mieć nie mniej niż 5 znaków</p>
      <p>Na kanale nie może być mniej niż 2 os</p>
      <div id="chanels">
        <input
          type={"text"}
          placeholder="Podaj nazwe kanału"
          name="Channel_name"
          value={channel}
          onChange={(e) => setChannel(e.target.value)}
          autoComplete="off"
        ></input>
        <input
          type={"number"}
          placeholder="ile użytkowników"
          name="Max_users"
          value={maxUsers}
          onChange={(e) => setMaxUsers(e.target.value)}
          autoComplete="off"
        ></input>

        <button onClick={handleSubmit}>Create chanel</button>
      </div>
      <div>
        {data.map((data, index) => {
          return (
            <table className="liusername" key={index}>
              <tbody>
                <tr>
                  <th>Channel_name</th>
                  <th>Owner</th>
                  <th>Max users</th>
                </tr>
                <tr>
                  <td>
                    <a href="/chat">{data.channelName}</a>
                  </td>
                  <td>{data.username}</td>
                  <td>{data.maxNumberOfMembers}</td>
                </tr>
              </tbody>
            </table>
          );
        })}
      </div>
    </div>
  );
};

export default ChannelList;
