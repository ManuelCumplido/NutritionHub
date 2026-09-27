import type { Metadata } from "next";
import { ServicesHero, ServicesDetails } from "@/components";

export const metadata: Metadata = {
  title: "Servicios de nutrición",

  description:
    "Conoce los servicios de NutritionHub: nutrición personalizada, control de peso, nutrición deportiva, educación alimentaria y seguimiento nutricional.",

  keywords: [
    "servicios de nutrición",
    "nutrición personalizada",
    "control de peso",
    "composición corporal",
    "nutrición deportiva",
    "hábitos alimenticios",
    "seguimiento nutricional",
    "NutritionHub",
  ],

  openGraph: {
    title: "Servicios de nutrición | NutritionHub",
    description:
      "Conoce los servicios de NutritionHub y encuentra el acompañamiento nutricional que mejor se adapte a tus objetivos.",
  },
};

export default function ServicesPage() {
  return (
    <>
      <ServicesHero />
      <ServicesDetails />
    </>
  );
}