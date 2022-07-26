import React, { useEffect, useState } from "react";
import "./style/ChannelList.css";
import { LAST_API_URL } from "../setup";
import { useNavigate } from "react-router-dom";
import removeCookie from "./components/rmCookie";
import ErrorBox from "./components/ErrorBox";

const axios = require("axios");
const ChannelList = (props) => {
  const navigate = useNavigate();
  if (props.user === "{}" || !props.user) {
    removeCookie("user");
    navigate("/");
  }
  const send = LAST_API_URL + "/channels";
  const [data, setDate] = useState([]);
  const [maxUsers, setMaxUsers] = useState(0);
  const [channel, setChannel] = useState("");
  const [errorMessage, setErrorMessage] = useState({});

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
        setErrorMessage({
          value: "",
          isError: false,
        });
      })
      .catch(function (error) {
        setErrorMessage({
          value: error.response.data.errorMessage,
          isError: true,
        });
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
          id="input"
          value={channel}
          onChange={(e) => setChannel(e.target.value)}
          autoComplete="off"
        ></input>
        <input
          type={"number"}
          placeholder="ile użytkowników"
          name="Max_users"
          id="input"
          value={maxUsers}
          onChange={(e) => setMaxUsers(e.target.value)}
          autoComplete="off"
        ></input>

        <button onClick={handleSubmit} id="input">
          Create chanel
        </button>
      </div>
      <div>
        {data.map((data, index) => {
          return (
            <div className="list">
              <table className="listbody" key={index}>
                <tbody>
                  <tr>
                    <td>
                      <div>ChannelName</div>
                    </td>
                    <td>
                      <div>Owner</div>
                    </td>
                    <td>
                      <div>Dołącz</div>
                    </td>
                  </tr>
                  <tr>
                    <td id="one">
                      <div class="chanelname">{data.channelName}</div>
                    </td>
                    <td id="two">
                      <div class="ower">{data.username}</div>
                    </td>
                    <td id="tree">
                      <div class="jonbutton">
                        <button
                          class="jon"
                          onClick={(e) => {
                            props.setChannel(e.target.innerText);
                            navigate("/chat");
                          }}
                        >
                          JOIN
                        </button>
                      </div>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          );
        })}
        <ErrorBox error={errorMessage.value} ifError={errorMessage.isError} />
      </div>
    </div>
  );
};

export default ChannelList;
