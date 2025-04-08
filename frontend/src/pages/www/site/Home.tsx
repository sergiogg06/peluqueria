import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Card, CardContent, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const fadeIn = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6 } }
};

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-white text-slate-800">
      <div className="max-w-7xl mx-auto px-6 py-20 text-center">
        {/* HERO animado */}
        <motion.h1
          variants={fadeIn}
          initial="hidden"
          animate="show"
          className="text-5xl font-extrabold mb-4 tracking-tight text-purple-700"
        >
          Peluquería Nayade 
        </motion.h1>

        <motion.p
          variants={fadeIn}
          initial="hidden"
          animate="show"
          transition={{ delay: 0.2 }}
          className="text-lg text-slate-500 max-w-2xl mx-auto mb-10"
        >
          Tu espacio de confianza para cuidar tu imagen con estilo y elegancia.
        </motion.p>

        {/* CARDS con animación y efecto glass/3D */}
        <div className="grid md:grid-cols-2 gap-10 mt-10">
          {[{
            title: "Productos Profesionales",
            desc: "Cuida tu cabello con lo mejor del mercado.",
            path: "/productos"
          }, {
            title: "Tratamientos a Medida",
            desc: "Relájate con servicios de calidad pensados para ti.",
            path: "/tratamientos"
          }].map((item, i) => (
            <motion.div
              key={item.title}
              className="rounded-xl p-1 bg-white/30 backdrop-blur-md shadow-lg hover:shadow-2xl transition-all duration-300"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.2 }}
              whileHover={{ scale: 1.03, rotateX: 1, rotateY: 1 }}
            >
              <Card className="bg-white bg-opacity-70">
                <CardContent className="p-6">
                  <CardTitle className="text-xl text-purple-600 mb-3">{item.title}</CardTitle>
                  <p className="text-slate-600 mb-6">{item.desc}</p>
                  <Link to={item.path}>
                    <Button className="bg-purple-300 hover:bg-purple-400 text-white">
                      Ver más
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* CTA FINAL */}
        <motion.div
          className="mt-16"
          initial="hidden"
          whileInView="show"
          variants={fadeIn}
          viewport={{ once: true }}
        >
          <p className="text-slate-600">¿Quieres reservar tu próxima cita?</p>
          <Button className="mt-4 bg-purple-400 hover:bg-purple-500 text-white">
            Contactar
          </Button>
        </motion.div>
      </div>
    </div>
  );
}
