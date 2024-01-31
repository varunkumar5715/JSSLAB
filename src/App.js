import React from 'react';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import Dashboard from './pages/Dashboard.js';
import Cognition from './pages/Cognition';
import Home from './pages/Home';
import Virtibular from './pages/virtibular';
import Labs from './pages/Labs';

const App = () => {
  return (
    
    <BrowserRouter>
      <Sidebar>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/home" element={<Home />} />
          <Route path="/cognition" element={<Cognition />} />
          <Route path="/labs" element={<Labs />} />
          <Route path="/virtibular" element={<Virtibular />} />
      
        </Routes>
      </Sidebar>
    </BrowserRouter>
    
    
  );
};

export default App;

