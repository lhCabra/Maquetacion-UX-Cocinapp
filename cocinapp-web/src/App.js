// App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import CreateRecipe from './pages/CreateRecipe';
import Dashboard from './pages/Dashboard';
import Recipes from './pages/Recipes';
import Login from './pages/Login.js';
import SignUp from './pages/SignUp.js';
import RecoverPassword from './pages/RecoverPassword.js';
import TemporalPassword from './pages/TemporalPassword.js';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/crear-receta" element={<CreateRecipe />} />
        <Route path="/estadisticas" element={<Dashboard />} />
        <Route path="/mis-recetas" element={<Recipes />} />
        <Route path="/iniciar-sesion" element={<Login />} />
        <Route path="/registrarme" element={<SignUp />} />
        <Route path="/recuperar-contraseña" element={<RecoverPassword />} />
        <Route path="/contraseña-temporal" element={<TemporalPassword />} />
      </Routes>
    </Router>
  );
}

export default App;

