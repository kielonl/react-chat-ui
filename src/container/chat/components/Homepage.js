import React, { useEffect, useState } from "react";
import "../style/Homepage.css";
const axios = require("axios");
const Home = () => {
  const [data, setDate] = useState([]);
  const url = "http://localhost:8080/users";

  const axios = require("axios");
  const userUrl = "http://localhost:8080/users";
  const WebChat = () => {
    const [data, setDate] = useState([]);
    const [channels, setchannels] = useState("");
    const handleSubmit = async (e) => {
      console.log(channels);
      axios
        .get(userUrl)
        .then((resp) => {
          setDate(resp.data);
        })
        .catch((err) => console.log(err));
    };

    const pulldata = async (e) => {
      const axios = require("axios");
      const channelArray = [];
      const channelsGET = await axios.get("http://localhost:8080/channels");
      for (let i = 0; i < channelsGET.data.length; i++) {
        const ch = channelsGET.data[i];
        const result = await axios.get(
          "http://localhost:8080/users/" + ch.owner
        );

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
                    <td>{data.username}</td>

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
};
export default Home;
