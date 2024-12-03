import React from 'react';
import { useCarrito } from '../Context/CarritoContext';
//import ItemCarrito from '../components/Carrito/ItemCarrito'; Tira error acá
import { Link } from 'react-router-dom';
import { ArrowLeft, ShoppingBag } from 'lucide-react';

export default function Carrito() {
  const { estado } = useCarrito();

  if (estado.items.length === 0) {
    return (
      <div className="min-h-screen pt-16">
        <div className="max-w-2xl mx-auto px-4 py-16 text-center">
          <ShoppingBag className="h-16 w-16 mx-auto mb-4 text-gray-400" />
          <h2 className="text-2xl font-semibold mb-4">Tu carrito está vacío</h2>
          <p className="text-gray-600 mb-8">Parece que aún no has agregado ninguna pizza a tu carrito.</p>
          <Link
            to="/orden"
            className="inline-flex items-center text-green-600 font-semibold hover:text-green-500"
          >
            <ArrowLeft className="h-5 w-5 mr-2" />
            Seguir comprando
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen pt-16">
      <div className="max-w-4xl mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-8">Carrito de compras</h1>
        
        <div className="bg-white rounded-lg shadow-md p-6">
          <div className="space-y-2">
            {estado.items.map((item) => (
              <ItemCarrito key={item.id} item={item} />
            ))}
          </div>
          
          <div className="mt-8 border-t pt-4">
            <div className="flex justify-between items-center mb-4">
              <span className="text-lg font-semibold">Total</span>
              <span className="text-2xl font-bold">${estado.total.toFixed(2)}</span>
            </div>
            
            <div className="flex gap-4">
              <Link
                to="/orden"
                className="flex-1 px-6 py-3 text-center border border-green-600 text-green-600 rounded-lg hover:bg-green-50"
              >
                Seguir comprando
              </Link>
              <Link
                to="/checkout"
                className="flex-1 px-6 py-3 text-center bg-green-600 text-white rounded-lg hover:bg-green-500"
              >
                Proceder al pago
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}