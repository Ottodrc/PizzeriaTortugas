import React from 'react';
import { motion } from 'framer-motion';
import { Sabor } from '../../types/pizza';

interface CuartoPizzaProps {
  posicion: 0 | 1 | 2 | 3;
  seleccionado: boolean;
  sabor: Sabor | null;
  onSelect: () => void;
}

export default function PizzaCuarto({ posicion, seleccionado, sabor, onSelect }: CuartoPizzaProps) {
  const getQuarterStyles = () => {
    const baseStyles = "absolute w-full h-full cursor-pointer transition-all duration-300";
    const posiciones = {
      0: "top-0 left-0 origin-bottom-right",
      1: "top-0 right-0 origin-bottom-left",
      2: "bottom-0 right-0 origin-top-left",
      3: "bottom-0 left-0 origin-top-right"
    };
    
    return `${baseStyles} ${posiciones[posicion]}`;
  };

  return (
    <motion.div
      className={getQuarterStyles()}
      whileHover={{ scale: 1.05 }}
      onClick={onSelect}
      style={{
        clipPath: posicion === 0
          ? 'polygon(50% 50%, 100% 0, 100% 100%)' // Superior derecho
          : posicion === 1
          ? 'polygon(50% 50%, 100% 100%, 0 100%)' // Inferior derecho
          : posicion === 2
          ? 'polygon(50% 50%, 0 100%, 0 0)' // Inferior izquierdo
          : 'polygon(50% 50%, 0 0, 100% 0)', // Superior izquierdo
      }}
    >
      <div 
        className={`w-full h-full ${seleccionado ? 'ring-4 ring-green-500' : ''} overflow-hidden`}
        style={{
          backgroundImage: sabor ? `url(${sabor.imagen})` : undefined,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        {!sabor && <div className="w-full h-full bg-yellow-100" />}
      </div>
    </motion.div>
  );
}
