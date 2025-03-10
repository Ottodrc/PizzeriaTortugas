import React from 'react';

export default function Ubicacion() {
  return (
    <div className="min-h-screen bg-gray-200 flex justify-center items-center">
      <div className="bg-white shadow-lg rounded-lg p-6 max-w-2xl w-full">
        <h1 className="text-2xl font-bold text-center text-green-600 mb-6">Nuestra Ubicación</h1>
        <p className="text-gray-700 text-center mb-4">
          Ven a visitarnos en: <br />
          <span className="font-semibold">Mendoza 930, Rosario, Santa Fe</span>
        </p>
        <div className="rounded-lg overflow-hidden shadow-md">
          <iframe
            title="Ubicación del Local"
            src={`https://www.google.com/maps/embed/v1/place?key=AIzaSyAW2tztwPALuLwdidfkPOGW6Gddroabt5M&q=Mendoza 930, Rosario, Santa Fe 2000`}
            width="100%"
            height="400"
            allowFullScreen
            loading="lazy"
            className="border-none"
          ></iframe>
        </div>
      </div>
    </div>
  );
}
