import { useState } from "react";
import NameForm from "./container/chat/components/LoginFrom";
import About from "./container/chat/components/About";
import WebChat from "./container/chat/components/Homepage";
import Chatpage from "./container/chat/components/Chat";
import Chanels from "./container/chat/components/Chanels";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
function App() {
  const [user, setUser] = useState({});

  return (
    <Router>
      <Routes>
        <Route
          exact
          path="/"
          element={<NameForm setUser={setUser} xd={"xd"} />}
        />
        <Route path="/home" element={<WebChat user={user} />} />
        <Route path="/chanels" element={<Chanels />} />
      </Routes>
    </Router>
  );
}
export default App;
/*
<Route path="/about" element={<About />} />
<Route path="/chat" element={<Chatpage />} />
*/
