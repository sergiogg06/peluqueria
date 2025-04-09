import { useEffect, useState } from "react";
import { getProductos, Producto } from "@/services/productoService";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const ProductoList = () => {
  const [productos, setProductos] = useState<Producto[]>([]);

  useEffect(() => {
    getProductos().then(data => setProductos(data));
  }, []);

  return (
    <div className="max-w-6xl mx-auto px-4 py-10">
      <h2 className="text-3xl font-bold text-purple-700 mb-8 text-center">Nuestros Productos</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {productos.map(producto => (
          <Card key={producto.id} className="hover:shadow-lg transition-all duration-300">
            <CardHeader className="p-0">
              <img
                src={producto.imagenUrl}
                alt={producto.nombre}
                className="w-full h-48 object-cover rounded-t-md"
              />
            </CardHeader>
            <CardContent className="p-4">
              <CardTitle className="text-xl text-purple-600 mb-2">{producto.nombre}</CardTitle>
              <p className="text-sm text-slate-500 mb-3">{producto.descripcion}</p>
              <p className="font-semibold text-purple-800">{producto.precio.toFixed(2)} €</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default ProductoList;
