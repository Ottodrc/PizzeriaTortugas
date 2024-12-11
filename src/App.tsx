import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { CarritoProvider } from './Context/CarritoContext';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Orden from './pages/Orden';
import Carrito from './pages/Carrito';
import Checkout from './pages/Checkout';
import Contacto from './pages/Contacto';
import Ubicacion from './pages/Ubicacion';
import CheckoutExito from './pages/CheckoutExito';

function App() {
  return (
    <CarritoProvider>
    <Router>
      <div className="min-h-screen bg-gray-50">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="Orden" element={<Orden />} />
          <Route path="Carrito" element={<Carrito />} />
          <Route path="Checkout" element={<Checkout />} />
          <Route path="Checkout/exito" element={<CheckoutExito />} />
          <Route path="Contacto" element={<Contacto />} />
          <Route path="Ubicacion" element={<Ubicacion />} />
        </Routes>
      </div>
    </Router>
    </CarritoProvider>
  );
}

export default App;