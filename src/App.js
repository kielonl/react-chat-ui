import React, { useEffect, useState } from "react";
import Login from "./container/Login";
import About from "./container/About";
import ChannelList from "./container/ChannelList";
import Chatpage from "./container/Chat";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import * as storageManager from "./container/components/storageManager";

function App() {
  const [user, setUser] = useState(null);
  const [channel, setChannel] = useState(null);

  useEffect(() => {
    setUser(storageManager.read("user"));
    setChannel(storageManager.read("channel"));
  }, []);

  useEffect(() => {
    if (user && Object.keys(user).length !== 0) {
      storageManager.save("user", user);
    }
    if (channel && Object.keys(channel).length !== 0) {
      storageManager.save("channel", channel);
    }
  }, [user, channel]);
  user, channel;

  if (!user || !channel) return <div></div>;
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Login setUser={setUser} />} />
        <Route path="/about" element={<About />} />
        <Route
          path="/home"
          element={
            <ChannelList
              user={user}
              setUser={setUser}
              setChannel={setChannel}
            />
          }
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
