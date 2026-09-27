import type { Metadata } from "next";
import { PricingHero, PricingOptions } from "@/components";

export const metadata: Metadata = {
  title: "Precios y consultas",

  description:
    "Conoce las opciones de consulta nutricional de NutritionHub y elige el acompañamiento que mejor se adapte a tus objetivos.",

  keywords: [
    "precio consulta nutricional",
    "consulta nutricional",
    "consulta inicial nutrición",
    "seguimiento nutricional",
    "paquete nutricional",
    "nutrición personalizada",
    "NutritionHub",
  ],

  openGraph: {
    title: "Precios y consultas | NutritionHub",
    description:
      "Conoce las opciones de consulta nutricional de NutritionHub y elige el acompañamiento que mejor se adapte a tus objetivos.",
  },
};

export default function PricingPage() {

    return (
        <>
            <PricingHero />
            <PricingOptions />
        </>
    );
}
