export default function Footer() {
    return (
      <footer className="bg-gray-100 text-gray-600 mt-auto">
        <div className="max-w-6xl mx-auto px-4 py-6 flex flex-col sm:flex-row justify-between items-center">
          <p className="text-sm text-center sm:text-left">
            © {new Date().getFullYear()} Peluquería Sergio. Todos los derechos reservados.
          </p>
          <div className="flex space-x-4 mt-2 sm:mt-0">
            <a href="#" className="text-sm hover:text-teal-600 transition">
              Aviso legal
            </a>
            <a href="#" className="text-sm hover:text-teal-600 transition">
              Política de privacidad
            </a>
            <a href="#" className="text-sm hover:text-teal-600 transition">
              Contacto
            </a>
          </div>
        </div>
      </footer>
    );
  }
  