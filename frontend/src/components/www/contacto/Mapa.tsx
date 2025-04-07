import React from "react";

const MapaUbicacion = () => {
  return (
    <div className="bg-white p-6 rounded shadow h-full">
      <h2 className="text-2xl font-bold mb-6">Ubicación</h2>
      <div className="aspect-video">
      <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3179.0501119612436!2d-1.8269287236074905!3d37.17528004646586!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd7b29dd7651bfaf%3A0x4e1a56880f2e67a1!2sPELUQUERIA%20BARBERIA%20ESTETICA%20UNISEX%20NAYADE!5e0!3m2!1ses!2ses!4v1744053730912!5m2!1ses!2ses" width="600" height="450" loading="lazy" ></iframe>
      </div>
    </div>
  );
};

export default MapaUbicacion;
