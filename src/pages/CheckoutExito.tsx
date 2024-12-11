import React from 'react';
import { Link } from 'react-router-dom';
import { CheckCircle, Home } from 'lucide-react';

export default function CheckoutExito() {
  return (
    <div className="min-h-screen pt-16">
      <div className="max-w-2xl mx-auto px-4 py-16 text-center">
        <CheckCircle className="h-16 w-16 text-green-500 mx-auto mb-4" />
        <h1 className="text-3xl font-bold mb-4">Order Confirmed!</h1>
        <p className="text-gray-600 mb-8">
          Gracias por tu pedido, te enviaremos la info de pago por whatsapp!
        </p>
        <Link
          to="/"
          className="inline-flex items-center bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-500"
        >
          <Home className="h-5 w-5 mr-2" />
          Volver al Inicio
        </Link>
      </div>
    </div>
  );
}