import React, { useEffect, useState } from "react";
import "../style/Homepage.css";
const axios = require("axios");
const WebChat = (props) => {
  const userUrl = "http://localhost:8080/users";
  const ChanelUrl = "http://localhost:8080/channels";
  const [data, setDate] = useState([]);
  const [maxusers, setUsers] = useState("");
  const [chanelname, setchaname] = useState("");
  const handleSubmit = async (e) => {
    axios
      .post(ChanelUrl, {
        uuid: props.user.uuid,
        maxUsers: maxusers,
        channelName: chanelname,
      })
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  ///////////////////

  const pulldata = async (e) => {
    const channelArray = [];
    const channelsGET = await axios.get("http://localhost:8080/channels");
    for (let i = 0; i < channelsGET.data.length; i++) {
      const ch = channelsGET.data[i];
      const result = await axios.get("http://localhost:8080/users" + ch.owner);

      const tab2 = {
        username: result.data.username,
        channelUuid: ch.channelUuid,
        dataTime: ch.dataTime,
        maxNumberOfMembers: ch.maxNumberOfMembers,
      };
      channelArray.push(tab2);
    }
    setDate(channelArray);
  };
  useEffect(() => {
    pulldata();
  }, []);
  if (!data) return <div></div>;
  return (
    <div className="abouttext">
      <h1>WebChat</h1>
      <div id="chanels">
        <input
          type={"text"}
          placeholder="Podaj nazwe kanału"
          name="chanelname"
          value={chanelname}
          onChange={(e) => setchaname(e.target.value)}
          autoComplete="off"
        ></input>
        <input
          type={"number"}
          placeholder="ile użytkowników"
          name="chanelname"
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

export default WebChat;
