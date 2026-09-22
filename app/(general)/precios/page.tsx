import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Precios y planes | NutritionHub",
    description:
        "Consulta los planes y precios de NutritionHub para profesionales de la salud que buscan gestionar pacientes, citas y servicios.",
    keywords: [
      "precios NutritionHub",
      "planes NutritionHub",
      "software para nutriólogos precio",
      "software para podólogos precio",
      "sistema para gestión de pacientes",
      "plataforma para consultorios",
    ]
};

export default function PricingPage() {

    return (
        <>
            <span className="text-7xl">Pricing Page</span>
        </>
    );
}
