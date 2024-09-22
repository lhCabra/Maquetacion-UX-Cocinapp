// App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import CreateRecipe from './pages/CreateRecipe';
import Dashboard from './pages/Dashboard';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/crear-receta" element={<CreateRecipe />} />
        <Route path="/estadisticas" element={<Dashboard />} />
      </Routes>
    </Router>
  );
}

export default App;

