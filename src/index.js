import React from "react";
import ReactDOM from "react-dom/client";
import "./index.scss";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Enigma1 from "./pages/Enigma1";
import Enigma2 from "./pages/Enigma2";
import Enigma3 from "./pages/Enigma3";
import Enigma4 from "./pages/Enigma4";
import Bernard from "./pages/Bernard";
import Intro from "./pages/Intro";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/intro" element={<Intro />} />
        <Route path="/enigma-1" element={<Enigma1 />} />
        <Route path="/enigma-2" element={<Enigma2 />} />
        <Route path="/enigma-3" element={<Enigma3 />} />
        <Route path="/enigma-4" element={<Enigma4 />} />
        <Route path="/bernard" element={<Bernard />} />
      </Routes>
    </Router>
  </React.StrictMode>
);
