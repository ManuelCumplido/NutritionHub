import Image from "next/image";

export const ServicesHero = () => {
  return (
    <section className="bg-stone-50 py-16 lg:py-24">
      <div className="mx-auto max-w-7xl px-6">

        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-14">

          {/* Contenido */}
          <div>
            <span className="font-semibold text-green-700">
              Servicios
            </span>

            <h1 className="mt-3 text-4xl font-bold tracking-tight text-gray-900 md:text-5xl">
              Acompañamiento nutricional{" "}
              <span className="text-green-700">
                adaptado a ti.
              </span>
            </h1>

            <p className="mt-6 max-w-xl text-lg leading-8 text-gray-600">
              Cada proceso comienza con objetivos diferentes. Encuentra el
              tipo de acompañamiento que mejor se adapte a tus necesidades,
              tus objetivos y tu estilo de vida.
            </p>

          </div>

          {/* Imagen */}
          <div className="overflow-hidden rounded-3xl">
            <Image
              src="/images/services-hero.png"
              alt="Servicios de nutrición y alimentación saludable"
              width={1536}
              height={1024}
              priority
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="h-auto w-full"
            />
          </div>

        </div>

      </div>
    </section>
  );
};