import React from 'react';
import PizzaCustomizador from '../components/Pizza/PizzaCustomizador';
export default function Order() {
    return (
      <div className="pt-16">
        <div className="bg-green-600 text-white py-12">
          <div className="max-w-6xl mx-auto px-4">
            <h1 className="text-4xl font-bold mb-4">Customiza Tu Pizza</h1>
            <p className="text-xl">Crea tu pizza por cuarto!</p>
          </div>
        </div>
        <PizzaCustomizador />
      </div>
    );
  }