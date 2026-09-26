import Link from "next/link";
import Image from "next/image";

export const Hero = () => {
    return (
        <section className="relative min-h-[80vh] flex items-center overflow-hidden">

            {/* Imagen de fondo */}
            <Image
                src="/images/hero-nutrition.png"
                alt="Alimentos frescos y saludables"
                fill
                priority
                className="object-cover"
            />
            <div className="absolute inset-0 bg-white/65 lg:bg-transparent" />
            {/* Contenido */}
            <div className="relative z-10 max-w-7xl mx-auto px-6 w-full">
                <div className="max-w-xl xl:max-w-2xl">

                    <span className="text-green-700 font-semibold">
                        Nutrición personalizada
                    </span>

                    <h1 className="mt-4 text-4xl md:text-6xl font-bold tracking-tight text-gray-900">
                        Alimenta tu bienestar,
                        <span className="text-green-700">
                            {" "}transforma tu vida.
                        </span>
                    </h1>

                    <p className="mt-6 text-base md:text-lg text-gray-600 max-w-md xl:max-w-xl leading-7 md:leading-8">
                        Planes de alimentación personalizados para ayudarte a alcanzar
                        tus objetivos de una manera saludable, práctica y sostenible.
                    </p>

                    <div className="mt-8 flex flex-wrap gap-4">
                        <Link
                            href="/contacto"
                            className="rounded-lg bg-green-700 px-6 py-3 text-white font-semibold hover:bg-green-800 transition-colors"
                        >
                            Agenda tu consulta
                        </Link>

                        <Link
                            href="/acerca-de"
                            className="rounded-lg border border-gray-300 bg-white/80 px-6 py-3 text-gray-700 font-semibold hover:bg-white transition-colors"
                        >
                            Conoce mi enfoque
                        </Link>
                    </div>

                </div>
            </div>
        </section>
    );
};