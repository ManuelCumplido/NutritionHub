import { HomeIcon } from "@primer/octicons-react";
import Link from "next/link";
import { ActiveLink } from "../active-link/ActiveLink";

  const navItems = [
    {  path: "/acerca-de", text: "Quienes somos",},
    {  path: "/contacto", text: "Contacto" },
    {  path: "/precios", text: "Precios" },
  ];

    export const Navbar = () => {
      return (
        <nav className="flex bg-blue-800 bg-opacity-30 p-2 m-2 rounded">

          <Link href={"/"} className="flex items-center mr-2">
            <HomeIcon className="mr-2"/>
            <span>Home</span>
          </Link>
          
          <div className="flex flex-1"></div>

          {
          navItems.map((navItem) => (
            <ActiveLink key={navItem.path} {...navItem} />
          ))}
        </nav>
      )
    }
