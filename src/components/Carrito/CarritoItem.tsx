import React from 'react';
import { Minus, Plus, Trash2 } from 'lucide-react';
import { useCarrito } from '../../Context/CarritoContext';
import { CarritoItem as TipoCarritoItem } from '../../types/carrito';

interface PropsCarritoItem {
  item: TipoCarritoItem;
}

export default function CarritoItem({ item }: PropsCarritoItem) {
  const { dispatch } = useCarrito();

  const manejarCambioCantidad = (nuevaCantidad: number) => {
    if (nuevaCantidad < 1) return;
    dispatch({ type: 'ACTUALIZAR_CANTIDAD', payload: { id: item.id, cantidad: nuevaCantidad } });
  };

  const manejarEliminar = () => {
    dispatch({ type: 'ELIMINAR_ITEM', payload: item.id });
  };

  return (
    <div className="flex items-center gap-4 py-4 border-b">
      <div className="flex-1">
        <h3 className="font-semibold">Pizza Personalizada</h3>
        <div className="text-sm text-gray-600">
          {item.cuartos.map((cuarto, idx) => (
            cuarto.saborNombre && (
              <div key={idx}>
                Cuarto {idx + 1}: {cuarto.saborNombre}
              </div>
            )
          ))}
        </div>
      </div>
      
      <div className="flex items-center gap-2">
        <button
          onClick={() => manejarCambioCantidad(item.cantidad - 1)}
          className="p-1 hover:bg-gray-100 rounded"
        >
          <Minus className="h-4 w-4" />
        </button>
        <span className="w-8 text-center">{item.cantidad}</span>
        <button
          onClick={() => manejarCambioCantidad(item.cantidad + 1)}
          className="p-1 hover:bg-gray-100 rounded"
        >
          <Plus className="h-4 w-4" />
        </button>
      </div>
      
      <div className="w-24 text-right">
        ${(item.precioTotal * item.cantidad).toFixed(2)}
      </div>
      
      <button
        onClick={manejarEliminar}
        className="p-2 text-red-500 hover:bg-red-50 rounded"
      >
        <Trash2 className="h-5 w-5" />
      </button>
    </div>
  );
}