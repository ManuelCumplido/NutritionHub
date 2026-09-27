import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000"
  ),

  title: {
    default: "NutritionHub | Nutrición personalizada en Guadalajara",
    template: "%s | NutritionHub",
  },

  description:
    "Acompañamiento nutricional personalizado en Guadalajara para mejorar tus hábitos, alcanzar tus objetivos y construir una alimentación sostenible.",

  keywords: [
    "nutrióloga Guadalajara",
    "nutriólogo Guadalajara",
    "nutrición Guadalajara",
    "consulta nutricional Guadalajara",
    "plan de alimentación",
    "nutrición deportiva",
    "hábitos saludables",
    "NutritionHub",
  ],

  authors: [
    {
      name: "NutritionHub",
    },
  ],

  creator: "NutritionHub",
  publisher: "NutritionHub",

  openGraph: {
    title: "NutritionHub | Nutrición personalizada en Guadalajara",
    description:
      "Acompañamiento nutricional personalizado para mejorar tus hábitos y alcanzar tus objetivos.",
    type: "website",
    locale: "es_MX",
    siteName: "NutritionHub",
    images: [
      {
        url: "/images/og-image.png",
        width: 1200,
        height: 630,
        alt: "NutritionHub - Nutrición personalizada",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "NutritionHub | Nutrición personalizada",
    description:
      "Acompañamiento nutricional personalizado para mejorar tus hábitos y alcanzar tus objetivos.",
    images: ["/images/og-image.png"],
  },

  robots: {
    index: true,
    follow: true,
  },
};

interface Props {
  children: React.ReactNode;
}

export default function RootLayout({ children }: Props) {
  return (
    <html lang="es">
      <body className={inter.className}>
        {children}
      </body>
    </html>
  );
}