import NameForm from "./container/LoginFrom";
import About from "./container/About";
import Home from "./container/Homepage";
import Chatpage from "./container/Chat";
import Socket from "./container/sockettest";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/about" element={<About />} />
        <Route path="/home" element={<Home />} />
        <Route path="/login" element={<NameForm />} />
        <Route path="/chat" element={<Chatpage />} />
        <Route path="/Socket" element={<Socket />} />
      </Routes>
    </Router>
  );
}
export default App;
