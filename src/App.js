import React from "react";
import ThreeScene from "./Components/ThreeScene";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ThreeScene2 from "./Components/ThreeScene2";
import ThreeScene3 from "./Components/ThreeScene3";
import SolarSystem from "./Components/SolarSystem";
import "./App.scss";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<ThreeScene />} />
          <Route path="/2" element={<ThreeScene2 />} />
          <Route path="/3" element={<ThreeScene3 />} />
          <Route path="/solar" element={<SolarSystem />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
