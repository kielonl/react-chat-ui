import React, { useState, useEffect } from "react";
import Login from "./container/Login";
import About from "./container/About";
import ChannelList from "./container/ChannelList";
import Chatpage from "./container/Chat";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
function App() {
  const [user, setUser] = useState({});
  const [channel, setChannel] = useState({});
  useEffect(() => {
    // wykonam sie kiedy aplikacja sie wczyta
  }, []);

  useEffect(() => {
    // wykonam sie kiedy user albo channel sie zmienia
  }, [user, channel]);
  return (
    <Router>
      <Routes>
        <Route
          exact
          path="/"
          element={<Login setUser={setUser} setChannel={setChannel} />}
        />
        <Route
          exact
          path="/Login"
          element={<Login setUser={setUser} setChannel={setChannel} />}
        />
        <Route path="/about" element={<About />} />
        <Route path="/home" element={<ChannelList user={user} />} />
        <Route path="/chat" element={<Chatpage user={user} />} />
      </Routes>
    </Router>
  );
}
export default App;
