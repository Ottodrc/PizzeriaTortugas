import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';
import './index.css';
import Contacto from './pages/Contacto';


const root = createRoot(document.getElementById('root')!);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);