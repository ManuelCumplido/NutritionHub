"use client";

import Image from "next/image";
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
    <nav className="border-b border-gray-200 bg-white">

      {/* Navbar principal */}
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6">

        {/* Logo */}
        <Link
          href="/"
          className="flex items-center gap-2"
          aria-label="Ir al inicio de NutritionHub"
        >
          <Image
            src="/images/logo-icon.png"
            alt=""
            width={44}
            height={44}
            priority
            className="h-11 w-11"
          />

          <span className="text-2xl font-bold tracking-tight text-gray-900">
            Nutrition<span className="text-green-700">Hub</span>
          </span>
        </Link>

        {/* Navegación desktop */}
        <div className="hidden items-center gap-8 lg:flex">

          {navItems.map((item) => (
            <ActiveLink
              key={item.path}
              path={item.path}
              text={item.text}
            />
          ))}

          <Link
            href="/contacto"
            className="rounded-lg bg-green-700 px-5 py-2.5 font-semibold text-white transition-colors hover:bg-green-800"
          >
            Agenda tu consulta
          </Link>

        </div>

        {/* Botón hamburguesa */}
        <button
          type="button"
          onClick={() => setIsOpen(!isOpen)}
          className="text-gray-700 transition-colors hover:text-green-700 lg:hidden"
          aria-label={isOpen ? "Cerrar menú" : "Abrir menú"}
          aria-expanded={isOpen}
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
        <div className="border-t border-gray-200 bg-white lg:hidden">

          <div className="flex flex-col gap-5 px-6 py-6">

            {navItems.map((item) => {
              const isActive = pathname === item.path;

              return (
                <Link
                  key={item.path}
                  href={item.path}
                  onClick={() => setIsOpen(false)}
                  className={`
                    relative w-fit font-medium transition-colors
                    ${
                      isActive
                        ? "font-semibold text-green-700 after:absolute after:left-0 after:-bottom-2 after:h-0.5 after:w-full after:rounded-full after:bg-green-700"
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
              className="mt-2 rounded-lg bg-green-700 px-5 py-3 text-center font-semibold text-white transition-colors hover:bg-green-800"
            >
              Agenda tu consulta
            </Link>

          </div>

        </div>
      )}

    </nav>
  );
};