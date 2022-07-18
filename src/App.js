import "./App.css";
import NameForm from "./container/LoginFrom";
import About from "./container/About";
import Home from "./container/Homepage";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/about" element={<About />} />
        <Route path="/home" element={<Home />} />
        <Route path="/login" element={<NameForm />} />
      </Routes>
    </Router>
  );
}
export default App;
