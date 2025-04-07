export interface Producto {
    id: number;
    nombre: string;
    descripcion: string;
    precio: number;
    imagenUrl: string;
  }
  
  export const getProductos = async (): Promise<Producto[]> => {
    const res = await fetch("http://localhost:8080/api/productos");
    if (!res.ok) throw new Error("Error al obtener productos");
    return res.json();
  };
  