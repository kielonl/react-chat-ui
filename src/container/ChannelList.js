import React, { useEffect, useState } from "react";
import "./style/ChannelList.css";
import { LAST_API_URL } from "../setup";
import { useNavigate } from "react-router-dom";
import setCookie from "./components/setCookie";
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
    <div className="body-channellist">
      <div className="list-chennel">
        <h1>WebChat</h1>
        <h2>Nazwa kanału powinna mieć nie mniej niż 5 znaków</h2>
        <h2>Na kanale nie może być mniej niż 2 os</h2>
        <div id="chanels">
          <input
            type={"text"}
            value={channel}
            autoComplete="off"
            name="Channel_name"
            className="channels-inputs"
            placeholder="Podaj nazwe kanału"
            onChange={(e) => setChannel(e.target.value)}
          ></input>
          <input
            onChange={(e) => setMaxUsers(e.target.value)}
            placeholder="ile użytkowników"
            className="channels-inputs"
            autoComplete="off"
            value={maxUsers}
            name="Max_users"
            type={"number"}
          ></input>
          <button onClick={handleSubmit} className="channels-inputs">
            Create chanel
          </button>
        </div>
        <div>
          {data.map((data, index) => {
            return (
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
                      <div class="ower" title={data.username}>
                        {data.username}
                      </div>
                    </td>
                    <td id="four">
                      <div class="jonbutton">
                        <button
                          class="jon"
                          onClick={(e) => {
                            setCookie("channel", e.target.innerText);
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
            );
          })}
          <ErrorBox error={errorMessage.value} ifError={errorMessage.isError} />
        </div>
      </div>
    </div>
  );
};

export default ChannelList;
