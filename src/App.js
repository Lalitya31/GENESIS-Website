import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import LandingHero from './components/LandingHero';
import Robohi from './components/robohi';
import Mechanical from './pages/Mechanical';
import Electrical from './pages/Electrical';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingHero />} />
        <Route path="/robo-hi" element={<Robohi />} />
        <Route path="/team/mechanical" element={<Mechanical />} />
        <Route path="/team/electrical" element={<Electrical />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
