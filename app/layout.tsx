import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "NutritionHub",

  description:
    "Plataforma para conectar profesionales de la salud con pacientes y facilitar la gestión de citas y servicios.",

  keywords: [
    "NutritionHub",
    "nutriólogos Guadalajara",
    "nutrióloga Guadalajara",
    "profesionales de la salud",
    "citas",
  ],

  authors: [
    {
      name: "NutritionHub",
    },
  ],

  creator: "NutritionHub",
  publisher: "NutritionHub",

  openGraph: {
    title: "NutritionHub",
    description:
      "Encuentra profesionales de la salud y agenda citas fácilmente.",
    images: [
      {
        url: "/vercel.svg",
        alt: "NutritionHub",
      },
    ],
    type: "website",
    locale: "es_MX",
    siteName: "NutritionHub",
  },

  twitter: {
    card: "summary_large_image",
    title: "NutritionHub",
    description:
      "Encuentra profesionales de la salud y agenda citas fácilmente.",
  },

  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es">
      <body className={inter.className}>
        <div className="flex flex-col">
          <span>NutritionHub</span>
          {children}
        </div>
      </body>
    </html>
  )
}
