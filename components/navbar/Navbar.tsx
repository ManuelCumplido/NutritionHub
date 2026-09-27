"use client";

import Link from "next/link";
import { useState } from "react";
import { usePathname } from "next/navigation";
import { IoMenuOutline, IoCloseOutline } from "react-icons/io5";
import { ActiveLink } from "../active-link/ActiveLink";

const navItems = [
  { path: "/", text: "Inicio" },
  { path: "/acerca-de", text: "Sobre mí" },
  { path: "/servicios", text: "Servicios" },
  { path: "/precios", text: "Precios" },
];

export const Navbar = () => {

  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  return (
    <nav className="bg-white border-b border-gray-200">

      {/* Navbar principal */}
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">

        {/* Logo */}
        <Link
          href="/"
          className="text-2xl font-bold text-gray-900"
        >
          Nutrition<span className="text-green-700">Hub</span>
        </Link>

        {/* Navegación desktop */}
        <div className="hidden lg:flex items-center gap-8">

          {navItems.map((item) => (
            <ActiveLink
              key={item.path}
              path={item.path}
              text={item.text}
            />
          ))}

          <Link
            href="/contacto"
            className="rounded-lg bg-green-700 px-5 py-2.5 text-white font-semibold hover:bg-green-800 transition-colors"
          >
            Agenda tu consulta
          </Link>

        </div>

        {/* Botón hamburguesa */}
        <button
          type="button"
          onClick={() => setIsOpen(!isOpen)}
          className="lg:hidden text-gray-700 hover:text-green-700 transition-colors"
          aria-label={isOpen ? "Cerrar menú" : "Abrir menú"}
        >
          {isOpen ? (
            <IoCloseOutline size={30} />
          ) : (
            <IoMenuOutline size={30} />
          )}
        </button>

      </div>

      {/* Menú mobile */}
      {isOpen && (
        <div className="lg:hidden border-t border-gray-200 bg-white">

          <div className="px-6 py-6 flex flex-col gap-5">

            {navItems.map((item) => {

              const isActive = pathname === item.path;

              return (
                <Link
                  key={item.path}
                  href={item.path}
                  onClick={() => setIsOpen(false)}
                  className={`
                    relative w-fit font-medium transition-colors
                    ${isActive
                      ? "text-green-700 font-semibold after:absolute after:left-0 after:-bottom-2 after:h-0.5 after:w-full after:bg-green-700 after:rounded-full"
                      : "text-gray-700 hover:text-green-700"
                    }
                  `}
                >
                  {item.text}
                </Link>
              );
            })}

            {/* CTA */}
            <Link
              href="/contacto"
              onClick={() => setIsOpen(false)}
              className="mt-2 text-center rounded-lg bg-green-700 px-5 py-3 text-white font-semibold hover:bg-green-800 transition-colors"
            >
              Agenda tu consulta
            </Link>

          </div>

        </div>
      )}

    </nav>
  );
};