import NameForm from "./container/Chat/components/LoginFrom";
import About from "./container/Chat/components/About";
import WebChat from "./container/Chat/components/Homepage";
import Chatpage from "./container/Chat/components/Chat";
import Chanels from "./container/Chat/components/Chanels";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/about" element={<About />} />
        <Route path="/home" element={<WebChat />} />
        <Route path="/login" element={<NameForm />} />
        <Route path="/chat" element={<Chatpage />} />
        <Route path="/chanels" element={<Chanels />} />
      </Routes>
    </Router>
  );
}
export default App;
