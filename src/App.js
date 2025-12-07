import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import LandingHero from './components/LandingHero';
import Robohi from './components/robohi';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingHero />} />
        <Route path="/robo-hi" element={<Robohi />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
