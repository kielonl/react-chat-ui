import React, { useEffect, useState } from "react";
import Login from "./container/Login";
import About from "./container/About";
import ChannelList from "./container/ChannelList";
import Chatpage from "./container/Chat";
import getCookie from "./container/components/getCookie";
import setCookie from "./container/components/setCookie";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
function App() {
  const [user, setUser] = useState({});
  const [channel, setChannel] = useState({});

  useEffect(() => {
    setUser(JSON.parse(getCookie("user")));
    setChannel(getCookie("channel"));
  }, []);

  useEffect(() => {
    if (Object.keys(user).length !== 0) {
      console.log(user);
      setCookie("user", JSON.stringify(user));
      setCookie("channel", channel);
    }
  }, [user, channel]);
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Login setUser={setUser} />} />
        <Route path="/about" element={<About />} />
        <Route
          path="/home"
          element={<ChannelList user={user} setChannel={setChannel} />}
        />
        <Route
          path="/chat"
          element={<Chatpage user={user} channel={channel} />}
        />
      </Routes>
    </Router>
  );
}
export default App;
