import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
} from "@/components/ui/card";

import { useEffect, useState } from "react";
import { getProductos, Producto } from "@/services/productoService";

function ProductoList() {
  const [productos, setProductos] = useState<Producto[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getProductos()
      .then(setProductos)
      .catch(console.error)
      .finally(() => setLoading(false));
  }, []);

  if (loading) return <p className="p-4 text-xl">Cargando productos...</p>;

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-6">Productos disponibles</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {productos.map((producto) => (
          <Card key={producto.id} className="overflow-hidden">
            <img
              src={producto.imagenUrl}
              alt={producto.nombre}
              className="w-full h-40 object-cover"
            />
            <CardHeader>
              <CardTitle>{producto.nombre}</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">
                {producto.descripcion}
              </p>
              <p className="mt-2 font-bold text-teal-600 text-md">
                {producto.precio.toFixed(2)} €
              </p>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}

export default ProductoList;
