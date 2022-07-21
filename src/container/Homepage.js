import { render } from "@testing-library/react";
import React, { useEffect, useState } from "react";
import "./style/Homepage.css";
const axios = require("axios");
const Homepage = (props) => {
  const chanelUrl = "http://localhost:8080/channels";
  const [data, setDate] = useState([]);
  const [maxusers, setUsers] = useState("");
  const [name_Channel, setname_Channel] = useState("");
  const handleSubmit = async (e) => {
    axios
      .post(chanelUrl, {
        uuid: props.user.uuid,
        maxUsers: maxusers,
        channelName: name_Channel,
      })
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
    render(
      <div id="box-Channel" name="name_Channel">
        <div id="server_mesage">Server mesage </div>
        <div id="user_left">user1</div>
        <div id="user_right">user2</div>
        <div id="type_text">type</div>
      </div>
    );
  };
  const pullData = async (e) => {
    const channelArray = [];
    const channelsGET = await axios.get("http://localhost:8080/channels");
    for (let i = 0; i < channelsGET.data.length; i++) {
      const ch = channelsGET.data[i];
      const result = await axios.get("http://localhost:8080/users" + ch.owner);

      const channelObject = {
        username: result.data.username,
        channelUuid: ch.channelUuid,
        dataTime: ch.dataTime,
        maxNumberOfMembers: ch.maxNumberOfMembers,
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
      <div id="chanels">
        <input
          type={"text"}
          placeholder="Podaj nazwe kanału"
          name="Channel_name"
          value={name_Channel}
          onChange={(e) => setname_Channel(e.target.value)}
          autoComplete="off"
        ></input>
        <input
          type={"number"}
          placeholder="ile użytkowników"
          name="Max_users"
          value={maxusers}
          onChange={(e) => setUsers(e.target.value)}
          autoComplete="off"
        ></input>
        <button onClick={handleSubmit}>Create chanel</button>

        <div id="listusers">
          {data.map((data, index) => {
            return (
              <table className="liusername" key={index}>
                <tr>
                  <td>{data.uuid}</td>

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
              <td>List channels.</td>
            </tr>
            <tr></tr>
          </table>
        </div>
      </div>
      <p></p>
    </div>
  );
};

export default Homepage;
