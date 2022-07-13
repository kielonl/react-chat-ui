import "./App.css";
import "./container/LoginFrom.css";
import NameForm from "./container/LoginFrom";
import About from "./container/About";
import Home from "./container/Homepage";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";

function App() {
  return (
    <Router>
      <nav>
        <h3>Logo</h3>
        <ul className="navlinks">
          <li>
            <Link to="/home">Home</Link>
          </li>
          <li>
            <Link to="/About">About</Link>
          </li>
          <li>
            <Link to="/login">Login</Link>
          </li>
        </ul>
      </nav>
      <Routes>
        <Route path="/about" element={<About />} />
        <Route path="/home" element={<Home />} />
        <Route path="/login" element={<NameForm />} />
      </Routes>
    </Router>
  );
}
export default App;
