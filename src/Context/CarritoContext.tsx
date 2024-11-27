import React, { createContext, useContext, useReducer } from 'react';
import { CarritoItem } from '../types/carrito';

interface CarritoEstado {
  items: CarritoItem[];
  total: number;
}

type CarritoAction =
  | { type: 'AGREGAR_ITEM'; payload: CarritoItem }
  | { type: 'ELIMINAR_ITEM'; payload: string }
  | { type: 'ACTUALIZAR_CANTIDAD'; payload: { id: string; cantidad: number } }
  | { type: 'LIMPIAR_CARRITO' };

const CarritoContext = createContext<{
  estado: CarritoEstado;
  dispatch: React.Dispatch<CarritoAction>;
} | undefined>(undefined);

const carritoReducer = (estado: CarritoEstado, action: CarritoAction): CarritoEstado => {
  switch (action.type) {
    case 'AGREGAR_ITEM': {
      const existingItem = estado.items.find(item => item.id === action.payload.id);
      if (existingItem) {
        return {
          ...estado,
          items: estado.items.map(item =>
            item.id === action.payload.id
              ? { ...item, cantidad: item.cantidad + 1 }
              : item
          ),
          total: estado.total + action.payload.precioTotal,
        };
      }
      return {
        ...estado,
        items: [...estado.items, action.payload],
        total: estado.total + action.payload.precioTotal,
      };
    }
    case 'ELIMINAR_ITEM': {
      const item = estado.items.find(i => i.id === action.payload);
      return {
        ...estado,
        items: estado.items.filter(item => item.id !== action.payload),
        total: estado.total - (item ? item.precioTotal * item.cantidad : 0),
      };
    }
    case 'ACTUALIZAR_CANTIDAD': {
      const item = estado.items.find(i => i.id === action.payload.id);
      if (!item) return estado;
      
      const diferenciaCantidad = action.payload.cantidad - item.cantidad;
      return {
        ...estado,
        items: estado.items.map(item =>
          item.id === action.payload.id
            ? { ...item, cantidad: action.payload.cantidad }
            : item
        ),
        total: estado.total + (item.precioTotal * diferenciaCantidad),
      };
    }
    case 'LIMPIAR_CARRITO':
      return {
        items: [],
        total: 0,
      };
    default:
      return estado;
  }
};

export function CarritoProvider({ children }: { children: React.ReactNode }) {
  const [estado, dispatch] = useReducer(carritoReducer, {
    items: [],
    total: 0,
  });

  return (
    <CarritoContext.Provider value={{ estado, dispatch }}>
      {children}
    </CarritoContext.Provider>
  );
}

export function useCarrito() {
  const context = useContext(CarritoContext);
  if (context === undefined) {
    throw new Error('useCarrito debe usarse dentro de un CarritoProvider');
  }
  return context;
}