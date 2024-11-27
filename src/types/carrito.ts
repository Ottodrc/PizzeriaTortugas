export interface CarritoItem {
  id: string;
  cuartos: {
    posicion: number;
    saborNombre: string;
    saborPrecio: number;
  }[];
  basePrecio: number;
  precioTotal: number;
  cantidad: number;
}