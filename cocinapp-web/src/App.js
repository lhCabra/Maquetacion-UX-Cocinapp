// App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import CreateRecipe from './pages/CreateRecipe';
import Dashboard from './pages/Dashboard';
import Recipes from './pages/Recipes';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/crear-receta" element={<CreateRecipe />} />
        <Route path="/estadisticas" element={<Dashboard />} />
        <Route path="/mis-recetas" element={<Recipes />} />
      </Routes>
    </Router>
  );
}

export default App;

