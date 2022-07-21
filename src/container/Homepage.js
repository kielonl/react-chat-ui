import React, { useEffect, useState } from "react";
import "./style/Homepage.css";
const axios = require("axios");
const Homepage = (props) => {
  const chanelUrl = "http://192.168.56.1:8080/channels";
  const [data, setDate] = useState([]);
  const [maxusers, setUsers] = useState(0);
  const [name_Channel, setname_Channel] = useState("");
  const handleSubmit = async (e) => {
    if (!maxusers || !name_Channel || !name_Channel < 0) {
      alert("Popraw error");
      return;
    }
    axios
      .post(chanelUrl, {
        uuid: props.user.uuid,
        maxUsers: maxusers,
        channelName: name_Channel,
      })
      .then(function (response) {
        console.log(response);
        pullData();
      })
      .catch(function (error) {
        console.log(error);
      });
  };
  const pullData = async (e) => {
    const channelArray = [];
    const channelsGET = await axios.get("http://192.168.56.1:8080/channels");
    for (let i = 0; i < channelsGET.data.length; i++) {
      const ch = channelsGET.data[i];
      const result = await axios.get(
        "http://192.168.56.1:8080/users/" + ch.owner
      );

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
      </div>
      <div id="listusers">
        {data.map((data, index) => {
          console.log(data);
          return (
            <table className="liusername" key={index}>
              <tbody>
                <tr>
                  <td>{data.channelName}</td>
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

export default Homepage;
