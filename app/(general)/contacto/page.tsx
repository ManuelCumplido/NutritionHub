import type { Metadata } from "next";
import { ContactSection } from "@/components";

export const metadata: Metadata = {
  title: "Contacto",

  description:
    "Contacta con NutritionHub para resolver tus dudas y comenzar tu proceso de acompañamiento nutricional personalizado.",

  keywords: [
    "contacto nutrióloga",
    "consulta nutricional",
    "agendar consulta nutricional",
    "acompañamiento nutricional",
    "nutrición personalizada",
    "NutritionHub",
  ],

  openGraph: {
    title: "Contacto | NutritionHub",
    description:
      "Contacta con NutritionHub para resolver tus dudas y comenzar tu proceso de acompañamiento nutricional personalizado.",
  },
};

export default function ContactPage() {

    return (
        <>
            <ContactSection />
        </>
    );
}