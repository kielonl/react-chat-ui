import "./App.css";
import NameForm from "./container/LoginFrom";
import About from "./container/About";
import Home from "./container/Homepage";
import WebChat from "./container/Chat";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/about" element={<About />} />
        <Route path="/home" element={<Home />} />
        <Route path="/login" element={<NameForm />} />
        <Route path="/chat" element={<WebChat />} />
      </Routes>
    </Router>
  );
}
export default App;
