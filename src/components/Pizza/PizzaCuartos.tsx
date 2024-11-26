import React from 'react';
import { motion } from 'framer-motion';
import { Sabor } from '../../types/pizza';

interface CuartoPizzaProps {
  posicion: 0 | 1 | 2 | 3;
  seleccionado: boolean;
  sabor: Sabor | null;
  onSelect: () => void;
}

export default function PizzaCuarto({posicion , seleccionado, sabor, onSelect }: CuartoPizzaProps) {
  const getQuarterStyles = () => {
    const baseStyles = "absolute w-1/2 h-1/2 cursor-pointer transition-all duration-300";
    const posiciones = {
      0: "top-0 left-0 origin-bottom-right rounded-tl-full",
      1: "top-0 right-0 origin-bottom-left rounded-tr-full",
      2: "bottom-0 right-0 origin-top-left rounded-br-full",
      3: "bottom-0 left-0 origin-top-right rounded-bl-full"
    };
    
    return `${baseStyles} ${posiciones[posicion]}`;
  };

  return (
    <motion.div
      className={getQuarterStyles()}
      whileHover={{ scale: 1.05 }}
      onClick={onSelect}
    >
      <div 
        className={`w-full h-full ${seleccionado ? 'ring-4 ring-green-500' : ''} rounded-full overflow-hidden`}
        style={{
          clipPath: posicion === 0 ? 'polygon(0 0, 100% 0, 100% 100%, 0 100%)' :
                    posicion === 1 ? 'polygon(0 0, 100% 0, 100% 100%, 0 100%)' :
                    posicion === 2 ? 'polygon(0 0, 100% 0, 100% 100%, 0 100%)' :
                   'polygon(0 0, 100% 0, 100% 100%, 0 100%)'
        }}
      >
        {sabor ? (
          <div 
            className="w-full h-full bg-cover bg-center transform transition-transform duration-300"
            style={{ 
              backgroundImage: `url(${sabor.imagen})`,
              transform: `rotate(${posicion * 90}deg)`
            }}
          />
        ) : (
          <div className="w-full h-full bg-yellow-100" />
        )}
      </div>
    </motion.div>
  );
}