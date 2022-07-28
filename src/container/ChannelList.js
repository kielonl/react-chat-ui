import "./style/ChannelList.css";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

import { LAST_API_URL } from "../setup";
import ErrorBox from "./components/ErrorBox";

const CHANNELS_ENDPOINT = LAST_API_URL + "/channels";

const ChannelList = (props) => {
  const [channelsList, setChannelsList] = useState([]);
  const [maxUsers, setMaxUsers] = useState(0);
  const [channelName, setChannelName] = useState("");
  const [errorMessage, setErrorMessage] = useState({});

  const navigate = useNavigate();

  if (props.user === "{}" || !props.user) {
    // rmLS("user");
    navigate("/");
  }
  const handleSubmit = async (e) => {
    if (!maxUsers || !channelName) {
      alert("Popraw error");
      return;
    }
    axios
      .post(CHANNELS_ENDPOINT, {
        uuid: props.user.uuid,
        maxUsers: maxUsers,
        channelName: channelName,
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
    const channelsGET = await axios.get(CHANNELS_ENDPOINT);

    for (let i = 0; i < channelsGET.data.length; i++) {
      const ch = channelsGET.data[i];
      const result = await axios.get(LAST_API_URL + "/users/" + ch.owner);

      const channelObject = {
        ...ch,
        username: result.data.username,
      };
      channelArray.push(channelObject);
    }
    setChannelsList(channelArray);
  };
  useEffect(() => {
    pullData();
  }, []);

  if (!channelsList) return <div></div>;
  return (
    <div className="body-channellist">
      <div className="list-chennel">
        <h1>WebChat</h1>
        <h2>Nazwa kanału powinna mieć nie mniej niż 5 znaków</h2>
        <h2>Na kanale nie może być mniej niż 2 os</h2>
        <div id="chanels">
          <input
            type={"text"}
            value={channelName}
            autoComplete="off"
            name="Channel_name"
            className="channels-inputs"
            placeholder="Podaj nazwe kanału"
            onChange={(e) => setChannelName(e.target.value)}
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
          {channelsList.map((channelInfo, index) => {
            return (
              <table className="listbody" key={index}>
                <tbody>
                  <tr>
                    <td>
                      <div>Owner</div>
                    </td>
                    <td>
                      <div>Dołącz</div>
                    </td>
                  </tr>
                  <tr>
                    <td id="one">
                      <div className="jonbutton">
                        <button
                          className="jon"
                          onClick={(e) => {
                            props.setChannel(channelInfo);
                            navigate("/chat");
                          }}
                        >
                          {channelInfo.channelName}
                        </button>
                      </div>
                    </td>
                    <td id="two">
                      <div className="ower" title={channelInfo.username}>
                        {channelInfo.username}
                      </div>
                    </td>
                    <td id="tree"></td>
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
