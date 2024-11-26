export interface Sabor {
    id: string;
    nombre: string;
    imagen: string;
    precio: number;
  }
  
  export interface SeleccionCuarto {
    posicion: 0 | 1 | 2 | 3;
    sabor: Sabor | null;
  }
  
  export interface OrdenPizza {
    cuarto: SeleccionCuarto[];
    precioBase: number;
  }