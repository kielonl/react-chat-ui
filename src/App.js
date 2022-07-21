import { useState } from "react";
import LoginFrom from "./container/LoginFrom";
import About from "./container/About";
import Homepage from "./container/Homepage";
import Chatpage from "./container/Chat";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
function App() {
  const [user, setUser] = useState({});
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<LoginFrom setUser={setUser} />} />
        <Route path="/about" element={<About />} />
        <Route path="/home" element={<Homepage user={user} />} />
        <Route path="/chat" element={<Chatpage />} />
      </Routes>
    </Router>
  );
}
export default App;
