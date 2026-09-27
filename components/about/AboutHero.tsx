import Image from "next/image";

export const AboutHero = () => {
  return (
    <section className="bg-stone-50 py-20 lg:py-24">
      <div className="max-w-7xl mx-auto px-6">

        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">

          {/* Contenido */}
          <div>
            <span className="font-semibold text-green-700">
              Sobre mí
            </span>

            <h1 className="mt-3 text-4xl font-bold tracking-tight text-gray-900 md:text-5xl">
              Nutrición para sentirte bien,
              <span className="text-green-700">
                {" "}sin dejar de disfrutar.
              </span>
            </h1>

            <p className="mt-6 max-w-xl text-lg leading-8 text-gray-600">
              Creo en una nutrición personalizada, práctica y sostenible.
              Mi objetivo es ayudarte a construir una mejor relación con la
              alimentación y encontrar hábitos que realmente funcionen para ti.
            </p>

            <p className="mt-5 text-sm text-gray-500">
              Perfil profesional de demostración.
            </p>
          </div>

          {/* Imagen */}
          <div className="relative h-[480px] overflow-hidden rounded-3xl">
            <Image
              src="/images/nutritionist.jpg"
              alt="Profesional de nutrición"
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover"
            />
          </div>

        </div>

      </div>
    </section>
  );
};