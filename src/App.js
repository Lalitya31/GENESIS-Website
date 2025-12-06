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