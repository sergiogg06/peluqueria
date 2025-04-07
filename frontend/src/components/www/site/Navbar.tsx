import { Link, useLocation } from "react-router-dom";
import { cn } from "@/lib/utils";

const links = [
  { to: "/", label: "Inicio" },
  { to: "/productos", label: "Productos" },
  { to: "/tratamientos", label: "Tratamientos" },
];

export default function Navbar() {
  const location = useLocation();

  return (
    <nav className="bg-white shadow border-b sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 py-3 flex justify-between items-center">
        {/* Logo / Branding */}
        <Link to="/" className="text-2xl font-bold text-teal-600 tracking-tight">
          Peluquería
        </Link>

        {/* Links */}
        <div className="flex space-x-6">
          {links.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              className={cn(
                "text-gray-700 hover:text-teal-600 transition-colors duration-200 text-sm font-medium",
                location.pathname === link.to && "text-teal-700 font-semibold"
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
