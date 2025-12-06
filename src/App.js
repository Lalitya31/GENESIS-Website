<<<<<<< HEAD
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LandingHero from './components/LandingHero';
import Robohi from './components/robohi';
import './App.css';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingHero />} />
        <Route path="/robo-hi" element={<Robohi />} />
      </Routes>
    </Router>
  );
}

export default App;
=======
import React from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import Robot from "./Robot";

function App() {
  return (
    <div style={{ width: "100vw", height: "100vh", background: "white" }}>
      <Canvas camera={{ position: [0, 2, 8], fov: 50 }}>
        <ambientLight intensity={0.5} />
        <directionalLight position={[5, 5, 5]} />
        <OrbitControls />
        <Robot />
      </Canvas>
    </div>
  );
}

export default App;
>>>>>>> db20c8b62fa251dad0c1d761ff409f8a937e1e75
