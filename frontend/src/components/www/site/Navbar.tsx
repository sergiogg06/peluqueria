import { Link, useLocation } from "react-router-dom";
import { cn } from "@/lib/utils";

const links = [
  { to: "/", label: "Inicio" },
  { to: "/contacto", label: "Contacto" },
  { to: "/productos", label: "Productos" },
  // { to: "/tratamientos", label: "Tratamientos" },
];

export default function Navbar() {
  const location = useLocation();

  return (
    <nav className="bg-purple-100 shadow border-b border-purple-200 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 py-3 flex justify-between items-center">
        {/* Logo / Branding */}
        <Link to="/" className="text-2xl font-bold text-purple-700 tracking-tight">
          Peluquería
        </Link>

        {/* Links */}
        <div className="flex space-x-6">
          {links.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              className={cn(
                "text-purple-700 hover:text-purple-900 transition-colors duration-200 text-sm font-medium",
                location.pathname === link.to && "font-semibold underline underline-offset-4"
              )}
            >
              {link.label}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
}
