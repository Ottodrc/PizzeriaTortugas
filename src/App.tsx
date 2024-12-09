import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Orden from './pages/Orden';
import Carrito from './pages/Carrito';
import Contacto from './pages/Contacto';
import Ubicacion from './pages/Ubicacion';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-50">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="Orden" element={<Orden />} />
          <Route path="Contacto" element={<Contacto />} />
          <Route path="Ubicacion" element={<Ubicacion />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;