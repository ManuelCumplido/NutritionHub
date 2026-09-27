import Image from "next/image";
import Link from "next/link";
import { IoCheckmarkCircleOutline } from "react-icons/io5";

const benefits = [
    "Planes adaptados a tu estilo de vida",
    "Hábitos saludables y sostenibles",
    "Acompañamiento durante tu proceso",
];

export const About = () => {
    return (
        <section className="bg-stone-50 py-24">
            <div className="max-w-7xl mx-auto px-6">
                <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
                    {/* Imagen */}
                    <div className="relative h-[500px] overflow-hidden rounded-3xl">
                        <Image
                            src="/images/nutritionist.jpg"
                            alt="Nutrióloga en consulta"
                            fill
                            sizes="(max-width: 1024px) 100vw, 50vw"
                            className="object-cover"
                        />
                    </div>

                    {/* Contenido */}
                    <div>
                        <span className="font-semibold text-green-700">
                            Sobre mí
                        </span>

                        <h2 className="mt-3 text-3xl font-bold tracking-tight text-gray-900 md:text-4xl">
                            Una alimentación saludable, diseñada para ti.
                        </h2>

                        <p className="mt-6 text-lg leading-8 text-gray-600">
                            Mi objetivo es ayudarte a mejorar tu alimentación sin dietas
                            extremas ni soluciones temporales. Juntos construiremos hábitos
                            que puedas mantener y disfrutar a largo plazo.
                        </p>

                        {/* Beneficios */}
                        <div className="mt-8 flex flex-col gap-4">

                            {benefits.map((benefit) => (
                                <div
                                    key={benefit}
                                    className="flex items-center gap-3"
                                >
                                    <IoCheckmarkCircleOutline
                                        size={24}
                                        className="shrink-0 text-green-700"
                                    />

                                    <span className="text-gray-700">
                                        {benefit}
                                    </span>
                                </div>
                            ))}

                        </div>

                        <Link
                            href="/acerca-de"
                            className="mt-8 inline-block rounded-lg border border-green-700 px-6 py-3 font-semibold text-green-700 transition-colors hover:bg-green-700 hover:text-white"
                        >
                            Conoce más sobre mí
                        </Link>

                    </div>

                </div>

            </div>

        </section>
    );
};