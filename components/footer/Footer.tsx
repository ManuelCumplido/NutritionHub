import Link from "next/link";
import {
  IoLogoInstagram,
  IoLogoFacebook,
  IoLogoWhatsapp,
} from "react-icons/io5";

const footerLinks = [
  { href: "/", label: "Inicio" },
  { href: "/acerca-de", label: "Sobre mí" },
  { href: "/#servicios", label: "Servicios" },
  { href: "/precios", label: "Precios" },
  { href: "/contacto", label: "Contacto" },
];

export const Footer = () => {
  return (
    <footer className="bg-stone-50">
      <div className="max-w-7xl mx-auto px-6">

        {/* Contenido principal */}
        <div className="flex flex-col gap-8 py-10 md:flex-row md:items-start md:justify-between">

          {/* Marca */}
          <div>
            <Link
              href="/"
              className="text-xl font-bold text-gray-900"
            >
              Nutrition<span className="text-green-700">Hub</span>
            </Link>

            <p className="mt-3 max-w-xs text-sm leading-6 text-gray-600">
              Nutrición que se adapta a tu vida.
            </p>

            {/* Redes sociales */}
            <div className="mt-5 flex items-center gap-3">

              <a
                href="#"
                aria-label="Instagram"
                className="
                  flex h-9 w-9 items-center justify-center
                  rounded-full
                  border border-gray-200
                  bg-white
                  text-gray-600
                  transition
                  hover:border-green-700
                  hover:text-green-700
                "
              >
                <IoLogoInstagram size={18} />
              </a>

              <a
                href="#"
                aria-label="Facebook"
                className="
                  flex h-9 w-9 items-center justify-center
                  rounded-full
                  border border-gray-200
                  bg-white
                  text-gray-600
                  transition
                  hover:border-green-700
                  hover:text-green-700
                "
              >
                <IoLogoFacebook size={18} />
              </a>

              <a
                href="#"
                aria-label="WhatsApp"
                className="
                  flex h-9 w-9 items-center justify-center
                  rounded-full
                  border border-gray-200
                  bg-white
                  text-gray-600
                  transition
                  hover:border-green-700
                  hover:text-green-700
                "
              >
                <IoLogoWhatsapp size={18} />
              </a>

            </div>
          </div>

          {/* Navegación */}
          <nav className="flex max-w-md flex-wrap gap-x-7 gap-y-3">
            {footerLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="
                  text-sm
                  text-gray-600
                  transition-colors
                  hover:text-green-700
                "
              >
                {link.label}
              </Link>
            ))}
          </nav>

        </div>

        {/* Parte inferior */}
        <div className="flex flex-col gap-2 border-t border-gray-200 py-5 text-xs text-gray-500 sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {new Date().getFullYear()} NutritionHub.
          </p>

          <p>
            Guadalajara, Jalisco
          </p>
        </div>

      </div>
    </footer>
  );
};