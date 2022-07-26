import React, { useEffect, useState } from "react";
import "./style/ChannelList.css";
import { LAST_API_URL } from "../setup";
import { useNavigate } from "react-router-dom";
import setCookie from "./components/setCookie";

const axios = require("axios");
const ChannelList = (props) => {
  const [data, setDate] = useState([]);
  const [maxUsers, setMaxUsers] = useState(0);
  const [channel, setChannel] = useState("");
  const navigate = useNavigate();
  const send = LAST_API_URL + "/channels";
  const handleSubmit = async (e) => {
    if (!maxUsers || !channel || !channel < 0) {
      alert("Popraw error");
      return;
    }
    axios
      .post(send, {
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
    const channelsGET = await axios.get(LAST_API_URL + "/channels");
    for (let i = 0; i < channelsGET.data.length; i++) {
      const ch = channelsGET.data[i];
      const result = await axios.get(LAST_API_URL + "/users/" + ch.owner);

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
      <div class="list">
        <div class="listbody">
          {data.map((data, index) => {
            return (
              <table key={index}>
                <tr>
                  <td>
                    <div class="chanelname">{data.channelName}</div>
                  </td>
                  <td>
                    <div class="ower">{data.owner}</div>
                  </td>
                  <td>
                    <div class="jonbutton">
                      <button class="jon">JOIN</button>
                    </div>
                  </td>
                </tr>
              </table>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default ChannelList;
/*
 <div class="list" key="{index}">
      <div class="listbody">
        <table>
          <tr>
            <td>
              <div class="chanelname">{data.channelName}</div>
            </td>
            <td>
              <div class="ower">{data.owner}</div>
            </td>
            <td>
              <div class="jonbutton"><button class="jon">JOIN</button></div>
            </td>
          </tr>
        </table>
      </div>
    </div>
*/
