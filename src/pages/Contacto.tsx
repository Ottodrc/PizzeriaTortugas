import React, { useState } from 'react';

export default function Contacto() {
  const [formData, setFormData] = useState({
    nombreApellido: '',
    email: '',
    mensaje: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Datos enviados:', formData);
    // Aquí puedes agregar lógica para enviar los datos al servidor
  };

  return (
    <div
      className="flex justify-center items-center min-h-screen bg-gray-100"
      style={{ paddingTop: '5rem' }} // Añadido espacio superior
    >
      <form
        onSubmit={handleSubmit}
        className="bg-white shadow-md rounded-lg p-8 max-w-md w-full"
      >
        <h1 className="text-2xl font-bold mb-6 text-center text-green-600">Contáctanos</h1>

        {/* Campo de Nombre y Apellido */}
        <div className="mb-4">
          <label htmlFor="nombreApellido" className="block text-gray-700 font-medium mb-2">
            Nombre y Apellido
          </label>
          <input
            type="text"
            id="nombreApellido"
            name="nombreApellido"
            value={formData.nombreApellido}
            onChange={handleChange}
            placeholder="Tu nombre completo"
            className="w-full border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-green-400"
          />
        </div>

        {/* Campo de Email */}
        <div className="mb-4">
          <label htmlFor="email" className="block text-gray-700 font-medium mb-2">
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Tu correo electrónico"
            className="w-full border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-green-400"
          />
        </div>

        {/* Campo de Mensaje */}
        <div className="mb-6">
          <label htmlFor="mensaje" className="block text-gray-700 font-medium mb-2">
            Mensaje
          </label>
          <textarea
            id="mensaje"
            name="mensaje"
            value={formData.mensaje}
            onChange={handleChange}
            placeholder="Escribe tu mensaje"
            className="w-full border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-green-400"
            style={{ height: '150px' }} // Tamaño ajustado del área de texto
          />
        </div>

        {/* Botón Enviar */}
        <button
          type="submit"
          className="bg-green-400 hover:bg-green-500 text-white font-medium py-2 px-4 rounded-lg w-full transition-colors"
        >
          Enviar
        </button>
      </form>
    </div>
  );
}
