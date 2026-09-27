import type { Metadata } from "next";
import { AboutHero, Approach, WorkingMethod, AboutCTA } from "@/components";

export const metadata: Metadata = {
  title: "Sobre mí",

  description:
    "Conoce el enfoque de NutritionHub y una forma de acompañamiento nutricional personalizada, práctica y sostenible.",

  keywords: [
    "nutrióloga",
    "nutrición personalizada",
    "acompañamiento nutricional",
    "hábitos saludables",
    "alimentación saludable",
    "NutritionHub",
  ],

  openGraph: {
    title: "Sobre mí | NutritionHub",
    description:
      "Conoce el enfoque de NutritionHub y una forma de acompañamiento nutricional personalizada, práctica y sostenible.",
  },
};

export default function AboutPage() {

    return (
        <>
            <AboutHero />
            <Approach />
            <WorkingMethod />
            <AboutCTA />
        </>
    );
}