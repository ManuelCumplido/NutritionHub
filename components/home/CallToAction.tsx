import Image from "next/image";
import Link from "next/link";
import {
  IoCheckmarkCircleOutline,
  IoArrowForwardOutline,
} from "react-icons/io5";

export const CallToAction = () => {
  return (
    <section className="bg-white py-24">
      <div className="max-w-7xl mx-auto px-6">

        <div className="overflow-hidden rounded-3xl bg-stone-50">

          <div className="grid items-center lg:grid-cols-2">

            {/* Contenido */}
            <div className="px-8 py-14 md:px-14 lg:px-16 lg:py-20">

              <span className="font-semibold text-green-700">
                ¿Listo para comenzar?
              </span>

              <h2 className="mt-3 text-3xl font-bold tracking-tight text-gray-900 md:text-4xl">
                Da el primer paso hacia una alimentación más saludable.
              </h2>

              <p className="mt-5 max-w-lg leading-7 text-gray-600">
                Agenda una consulta y descubre un enfoque nutricional
                personalizado para tus objetivos y estilo de vida.
              </p>

              {/* Beneficios */}
              <div className="mt-7 flex flex-col gap-3">

                <div className="flex items-center gap-3">
                  <IoCheckmarkCircleOutline
                    size={22}
                    className="text-green-700"
                  />

                  <span className="text-gray-700">
                    Atención personalizada
                  </span>
                </div>

                <div className="flex items-center gap-3">
                  <IoCheckmarkCircleOutline
                    size={22}
                    className="text-green-700"
                  />

                  <span className="text-gray-700">
                    Plan adaptado a tus objetivos
                  </span>
                </div>

              </div>

              {/* Botón */}
              <Link
                href="/contacto"
                className="
                  mt-8
                  inline-flex items-center gap-2
                  rounded-lg
                  bg-green-700
                  px-6 py-3
                  font-semibold
                  text-white
                  transition-colors
                  hover:bg-green-800
                "
              >
                Agenda tu consulta

                <IoArrowForwardOutline size={18} />
              </Link>

            </div>

            {/* Imagen */}
            <div className="relative min-h-[350px] lg:h-full">
              <Image
                src="/images/cta-nutrition.png"
                alt="Alimentación saludable"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
              />
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};