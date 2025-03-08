import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Pizza, Menu, X, Instagram, Facebook, Phone, MessageCircle } from 'lucide-react'; // Importamos el icono de chat


export default function Navbar() {
  const [EstaAbierto, SetearAbierto] = useState(false);

  return (
    <nav className="bg-green-600 fixed w-full z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Contenedor de Logo + Título + Íconos */}
          <div className="flex items-center">
            <Link to="/" className="flex items-center">
              <Pizza className="h-8 w-8 text-white" />
              <span className="ml-2 text-white font-bold text-xl">Las Tortugas Ninja</span>
            </Link>

            {/* Contenedor de iconos, alineados juntos */}
            <div className="flex items-center ml-4 space-x-4">
              {/* Icono de Instagram */}
              <a 
                href="https://www.instagram.com/lapizzeriaok_/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-white hover:text-gray-400"
              >
                <Instagram className="h-8 w-8" />
              </a>

              {/* Icono de Facebook */}
              <a 
                href="https://www.facebook.com/p/La-Pizzer%C3%ADa-De-Las-Tortugas-Ninja-100063767731590/" // Reemplaza con el enlace real de tu Facebook
                target="_blank" 
                rel="noopener noreferrer"
                className="text-white hover:text-gray-400"
              >
                <Facebook className="h-8 w-8" />
              </a>

              {/* Icono de Chat (simil WhatsApp) */}
              <a
                href="https://wa.me/3412736795"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-gray-400"
              >
                <MessageCircle className="h-8 w-8" />
              </a>
            </div>
          </div>

          {/* Menú de navegación */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              <Link to="/" className="text-white hover:bg-green-500 px-3 py-2 rounded-md font-medium">
                Home
              </Link>
              <Link to="/orden" className="text-white hover:bg-green-500 px-3 py-2 rounded-md font-medium">
                Pedir Ahora
              </Link>
              <Link to="/ubicacion" className="text-white hover:bg-green-500 px-3 py-2 rounded-md font-medium">
                Ubicación
              </Link>
              <Link to="/contacto" className="text-white hover:bg-green-500 px-3 py-2 rounded-md font-medium">
                Contacto
              </Link>
            </div>
          </div>

          {/* Botón del menú en dispositivos pequeños */}
          <div className="md:hidden">
            <button
              onClick={() => SetearAbierto(!EstaAbierto)}
              className="inline-flex items-center justify-center p-2 rounded-md text-white hover:bg-green-500 focus:outline-none"
            >
              {EstaAbierto ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Menú desplegable en móvil */}
      {EstaAbierto && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link
              to="/"
              className="text-white hover:bg-green-500 block px-3 py-2 rounded-md text-base font-medium"
              onClick={() => SetearAbierto(false)}
            >
              Home
            </Link>
            <Link
              to="/orden"
              className="text-white hover:bg-green-500 block px-3 py-2 rounded-md text-base font-medium"
              onClick={() => SetearAbierto(false)}
            >
              Pedir Ahora
            </Link>
            <Link
              to="/about"
              className="text-white hover:bg-green-500 block px-3 py-2 rounded-md text-base font-medium"
              onClick={() => SetearAbierto(false)}
            >
              Sobre Nosotros
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
