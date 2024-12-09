import React from 'react';

export default function Ubicacion() {
  return (
    <div className="min-h-screen bg-gray-200 flex justify-center items-center">
      <div className="bg-white shadow-lg rounded-lg p-6 max-w-2xl w-full">
        <h1 className="text-2xl font-bold text-center text-green-600 mb-6">Nuestra Ubicación</h1>
        <p className="text-gray-700 text-center mb-4">
          Ven a visitarnos en: <br />
          <span className="font-semibold">Calle 710 al 1205 bis, Rosario</span>
        </p>
        <div className="rounded-lg overflow-hidden shadow-md">
          <iframe
            title="Ubicación del Local"
            src={`https://www.google.com/maps/embed/v1/place?key=AIzaSyAW2tztwPALuLwdidfkPOGW6Gddroabt5M&q=Calle+710+al+1205+bis,+Rosario`}
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
