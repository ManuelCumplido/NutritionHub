import type { Metadata } from "next";

export const metadata: Metadata = {
    title: 'Acerca de NutritionHub',
    description:
        'Conoce NutritionHub, una plataforma para conectar profesionales de la salud con pacientes.',
    keywords: [
      "NutritionHub",
      "plataforma para profesionales de la salud",
      "software para nutriólogos",
      "software para podólogos",
      "gestión de pacientes",
      "profesionales de la salud Guadalajara",
    ]
};

export default function AboutPage() {

    return (
        <>
            <span className="text-7xl">About Page</span>
        </>
    );
}