import "./App.css";
import Home from "./Pages/Home";
import Login from "./Pages/Login";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Register from "./Pages/Register";
import About from "./Pages/About";
import Dashboard from "./Pages/Dashboard";
import MainArea from "./components/MainArea";
import CreateTeam from "./components/CreateTeam";
import Faq from "./Pages/Faq";
import Partners from "./Pages/Partners";
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/partners" element={<Partners/>} />
        <Route path="/faq" element={<Faq/>} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/dashboard" element={<Dashboard children={<MainArea/>} />} />
        <Route path="/create-team" element={<Dashboard children={<CreateTeam/>} />} />
      </Routes>
    </Router>
  );
}

export default App;
