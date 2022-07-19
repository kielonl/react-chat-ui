import { useState } from "react";
import LoginFrom from "./container/chat/components/LoginFrom";
import About from "./container/chat/components/About";
import Homepage from "./container/chat/components/Homepage";
import Chatpage from "./container/chat/components/Chat";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
function App() {
  const [user, setUser] = useState({});
  return (
    <Router>
      <Routes>
        <Route
          exact
          path="/"
          element={<LoginFrom setUser={setUser} xd={"xd"} />}
        />
        <Route path="/about" element={<About />} />
        <Route path="/home" element={<Homepage user={user} />} />
        <Route path="/chat" element={<Chatpage />} />
      </Routes>
    </Router>
  );
}
export default App;
