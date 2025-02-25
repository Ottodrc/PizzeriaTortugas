import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';
import { Sabor, SeleccionCuarto } from '../../types/pizza';
import { useCarrito } from '../../Context/CarritoContext';
import PizzaCuarto from './PizzaCuartos';
import SelectorSabores from './SelectorSabores';

export default function PizzaCustomizador() {
  const navigate = useNavigate();
  const { dispatch } = useCarrito();
  const [cuartoSeleccionado, setCuartoSeleccionado] = useState<number | null>(null);
  const [saborSeleccionado, setSaborSeleccionado] = useState<Sabor | null>(null);
  const [cuartos, setCuartos] = useState<SeleccionCuarto[]>([
    { posicion: 0, sabor: null },
    { posicion: 1, sabor: null },
    { posicion: 2, sabor: null },
    { posicion: 3, sabor: null },
  ]);
  const [sabores, setSabores] = useState<Sabor[]>([]); // Estado para los sabores

  
  useEffect(() => {
    const fetchSabores = async () => {
      try {
        const response = await fetch('http://localhost:3001/sabores'); // Reemplaza con tu URL del backend
        const data = await response.json();
        setSabores(data);
      } catch (error) {
        console.error('Error al obtener sabores:', error);
      }
    };

    fetchSabores();
  }, []);

  const manejarSeleccionCuartos = (posicion: number) => {
    setCuartoSeleccionado(posicion);
    if (cuartos[posicion].sabor) {
      setSaborSeleccionado(cuartos[posicion].sabor);
    } else {
        setSaborSeleccionado(null);
    }
  };

  const manejarSeleccionSabor = (sabor: Sabor) => {
    if (cuartoSeleccionado !== null) {
      const newCuartos = [...cuartos];
      newCuartos[cuartoSeleccionado].sabor = sabor;
      setCuartos(newCuartos);
      setSaborSeleccionado(sabor);
    }
  };

  const calcularTotal = () => {
    const precioBase = 1000.0;
    const totalSabores = cuartos.reduce((total, cuarto) => {
      return total + (cuarto.sabor?.precio || 0);
    }, 0);
    return precioBase + totalSabores;
  };

  const agregarCarrito = () => {
    const CarritoItem = {
      id: uuidv4(),
      cuartos: cuartos.map((c, idx) => ({
        posicion: idx,
        saborNombre: c.sabor?.nombre || '',
        saborPrecio: c.sabor?.precio || 0,
      })),
      basePrecio: 10,
      precioTotal: calcularTotal(),
      cantidad: 1,
    };
    
    dispatch({ type: 'AGREGAR_ITEM', payload: CarritoItem });
    navigate('/Carrito');
  };

  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div className="relative aspect-square">
          <motion.div 
            className="w-full h-full rounded-full bg-yellow-200 shadow-xl relative overflow-hidden"
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            {cuartos.map((cuarto, index) => (
              <PizzaCuarto
                key={index}
                posicion={cuarto.posicion as 0 | 1 | 2 | 3}
                seleccionado={cuartoSeleccionado === index}
                sabor={cuarto.sabor}
                onSelect={() => manejarSeleccionCuartos(index)}
              />
            ))}
          </motion.div>
        </div>

        <div className="space-y-6">
          <div className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-2xl font-bold mb-4">Seleccioná tus Sabores</h2>
            <p className="text-gray-600 mb-4">
              Hace click en un cuarto de la pizza y elegi tu gusto preferido!
            </p>
            <SelectorSabores
              sabores={sabores} // 🔥 Pasamos los sabores obtenidos del backend
              saborSeleccionado={saborSeleccionado}
              onSaborSeleccionado={manejarSeleccionSabor}
            />
          </div>

          <div className="bg-white rounded-lg shadow-md p-6">
            <h3 className="text-xl font-semibold mb-2">Resumen del pedido:</h3>
            <div className="space-y-2">
              <p className="flex justify-between">
                <span>Precio Base:</span>
                <span>$1000.00</span>
              </p>
              {cuartos.map((cuarto, index) => (
                cuarto.sabor && (
                  <p key={index} className="flex justify-between text-sm">
                    <span>{cuarto.sabor.nombre} (Cuarto {index + 1})</span>
                    <span>${cuarto.sabor.precio.toFixed(2)}</span>
                  </p>
                )
              ))}
              <div className="border-t pt-2 mt-2">
                <p className="flex justify-between font-bold">
                  <span>Total:</span>
                  <span>${calcularTotal().toFixed(2)}</span>
                </p>
              </div>
            </div>
            <button 
              onClick={agregarCarrito}
              className="w-full mt-4 bg-green-600 text-white py-3 px-6 rounded-lg font-semibold
                hover:bg-green-500 transition duration-300">
              Añadir al Carrito
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
