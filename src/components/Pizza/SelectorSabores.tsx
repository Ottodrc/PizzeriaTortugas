import React from 'react';
import { motion } from 'framer-motion';
import { Sabor } from '../../types/pizza';

interface SelectorSaboresProps {
  sabores: Sabor[];
  saborSeleccionado: Sabor | null;
  onSaborSeleccionado: (topping: Sabor) => void;
}

export default function SelectorSabores({ sabores, saborSeleccionado, onSaborSeleccionado }: SelectorSaboresProps) {
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 p-4">
      {sabores.map((Sabor) => (
        <motion.div
          key={Sabor.id}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className={`cursor-pointer rounded-lg overflow-hidden shadow-md 
            ${saborSeleccionado?.id === Sabor.id ? 'ring-4 ring-green-500' : ''}`}
          onClick={() => onSaborSeleccionado(Sabor)}
        >
          <div 
            className="h-24 bg-cover bg-center"
            style={{ backgroundImage: `url(${Sabor.imagen})` }}
          />
          <div className="p-2 bg-white">
            <h3 className="font-semibold text-gray-800">{Sabor.nombre}</h3>
            <p className="text-sm text-gray-600">${Sabor.precio.toFixed(2)}</p>
          </div>
        </motion.div>
      ))}
    </div>
  );
}