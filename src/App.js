import LoginFrom from "./container/LoginFrom";
import About from "./container/About";
import Homepage from "./container/Homepage";
import Chatpage from "./container/Chat";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<LoginFrom />} />
        <Route path="/about" element={<About />} />
        <Route path="/home" element={<Homepage />} />
        <Route path="/chat" element={<Chatpage />} />
      </Routes>
    </Router>
  );
}
export default App;
