import type { Metadata } from "next";
import {
  Hero,
  Services,
  About,
  Process,
  Testimonials,
  CallToAction,
} from "@/components";

export const metadata: Metadata = {
  description:
    "Acompañamiento nutricional personalizado para mejorar tus hábitos, alcanzar tus objetivos y construir una alimentación saludable y sostenible.",

  keywords: [
    "nutrióloga",
    "nutrición personalizada",
    "consulta nutricional",
    "alimentación saludable",
    "hábitos saludables",
    "nutrición deportiva",
    "seguimiento nutricional",
    "NutritionHub",
  ],

  openGraph: {
    title: "NutritionHub | Nutrición personalizada",
    description:
      "Acompañamiento nutricional personalizado para mejorar tus hábitos y alcanzar tus objetivos de forma sostenible.",
  },
};

export default function Home() {
  return (
    <>
      <Hero />
      <Services />
      <About />
      <Process />
      <Testimonials />
      <CallToAction />
    </>
  );
}