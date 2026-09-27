"use client";

import { useRef, useState } from "react";
import {
  IoChevronBackOutline,
  IoChevronForwardOutline,
  IoStar,
  IoStarHalf,
} from "react-icons/io5";

const testimonials = [
  {
    quote:
      "Aprendí a mejorar mi alimentación sin sentir que estaba siguiendo una dieta restrictiva.",
    name: "Paciente demo",
    rating: 5,
  },
  {
    quote:
      "El seguimiento hizo que el proceso fuera mucho más sencillo y fácil de mantener.",
    name: "Paciente demo",
    rating: 4.5,
  },
  {
    quote:
      "Encontré una forma de alimentarme mejor que realmente se adapta a mi rutina.",
    name: "Paciente demo",
    rating: 5,
  },
  {
    quote:
      "Me gustó que el plan fuera práctico y pudiera adaptarlo fácilmente a mis horarios.",
    name: "Paciente demo",
    rating: 4.5,
  },
  {
    quote:
      "El acompañamiento me ayudó a entender mejor mis hábitos y tomar mejores decisiones.",
    name: "Paciente demo",
    rating: 5,
  },
  {
    quote:
      "El proceso fue claro, sencillo y mucho más fácil de seguir de lo que esperaba.",
    name: "Paciente demo",
    rating: 4.5,
  },
];

export const Testimonials = () => {
  const carouselRef = useRef<HTMLDivElement>(null);

  const [currentIndex, setCurrentIndex] = useState(0);

  const visibleCards = 3;
  const maxIndex = testimonials.length - visibleCards;

  const scrollToCard = (index: number) => {
    if (!carouselRef.current) return;

    const firstCard =
      carouselRef.current.firstElementChild as HTMLElement;

    if (!firstCard) return;

    const gap = 24;
    const scrollAmount = firstCard.offsetWidth + gap;

    carouselRef.current.scrollTo({
      left: scrollAmount * index,
      behavior: "smooth",
    });

    setCurrentIndex(index);
  };

  const scroll = (direction: "left" | "right") => {
    if (direction === "left" && currentIndex > 0) {
      scrollToCard(currentIndex - 1);
    }

    if (direction === "right" && currentIndex < maxIndex) {
      scrollToCard(currentIndex + 1);
    }
  };

  return (
    <section className="bg-stone-50 py-24">
      <div className="max-w-7xl mx-auto px-6">

        {/* Encabezado */}
        <div className="max-w-2xl mx-auto text-center">
          <span className="font-semibold text-green-700">
            Testimonios
          </span>

          <h2 className="mt-3 text-3xl font-bold tracking-tight text-gray-900 md:text-4xl">
            Historias que inspiran cambios
          </h2>

          <p className="mt-4 text-lg leading-8 text-gray-600">
            Ejemplos de cómo un acompañamiento nutricional puede formar parte
            de un cambio de hábitos.
          </p>
        </div>

        {/* Carrusel */}
        <div className="relative mt-14 px-10">

          {/* Flecha izquierda */}
          <button
            type="button"
            onClick={() => scroll("left")}
            disabled={currentIndex === 0}
            className="
              absolute left-0 top-1/2 z-10
              -translate-y-1/2
              flex h-11 w-11 items-center justify-center
              rounded-full
              border border-gray-200
              bg-white
              text-gray-600
              shadow-sm
              transition-all
              hover:border-green-700
              hover:text-green-700
              disabled:cursor-not-allowed
              disabled:opacity-30
              disabled:hover:border-gray-200
              disabled:hover:text-gray-600
            "
            aria-label="Ver testimonio anterior"
          >
            <IoChevronBackOutline size={24} />
          </button>

          {/* Testimonios */}
          <div
            ref={carouselRef}
            className="flex gap-6 overflow-x-hidden scroll-smooth"
          >
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="
                  min-w-full
                  md:min-w-[calc(50%-12px)]
                  lg:min-w-[calc(33.333%-16px)]
                  min-h-[320px]
                  flex flex-col
                  rounded-2xl
                  border border-gray-200
                  bg-white
                  p-8
                  shadow-sm
                  transition-shadow
                  hover:shadow-md
                "
              >
                {/* Rating */}
                <div className="flex items-center gap-2">
                  <div className="flex gap-1 text-green-700">
                    {Array.from({
                      length: Math.floor(testimonial.rating),
                    }).map((_, index) => (
                      <IoStar
                        key={index}
                        size={18}
                      />
                    ))}

                    {testimonial.rating % 1 !== 0 && (
                      <IoStarHalf size={18} />
                    )}
                  </div>

                  <span className="text-sm font-semibold text-gray-700">
                    {testimonial.rating}
                  </span>
                </div>

                {/* Comentario */}
                <p className="mt-6 leading-7 text-gray-600">
                  “{testimonial.quote}”
                </p>

                {/* Persona */}
                <div className="mt-auto pt-6">
                  <div className="border-t border-gray-100 pt-5">
                    <p className="font-semibold text-gray-900">
                      {testimonial.name}
                    </p>

                    <p className="mt-1 text-sm text-gray-500">
                      Testimonio de demostración
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Flecha derecha */}
          <button
            type="button"
            onClick={() => scroll("right")}
            disabled={currentIndex === maxIndex}
            className="
              absolute right-0 top-1/2 z-10
              -translate-y-1/2
              flex h-11 w-11 items-center justify-center
              rounded-full
              border border-gray-200
              bg-white
              text-gray-600
              shadow-sm
              transition-all
              hover:border-green-700
              hover:text-green-700
              disabled:cursor-not-allowed
              disabled:opacity-30
              disabled:hover:border-gray-200
              disabled:hover:text-gray-600
            "
            aria-label="Ver siguiente testimonio"
          >
            <IoChevronForwardOutline size={24} />
          </button>

        </div>

        {/* Indicadores */}
        <div className="mt-8 flex justify-center gap-2">
          {Array.from({ length: maxIndex + 1 }).map((_, index) => (
            <button
              key={index}
              type="button"
              onClick={() => scrollToCard(index)}
              className={`
                h-2.5 rounded-full transition-all
                ${
                  currentIndex === index
                    ? "w-8 bg-green-700"
                    : "w-2.5 bg-gray-300 hover:bg-gray-400"
                }
              `}
              aria-label={`Ir a la posición ${index + 1}`}
            />
          ))}
        </div>

      </div>
    </section>
  );
};