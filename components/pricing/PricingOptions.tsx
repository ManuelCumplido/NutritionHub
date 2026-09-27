import Link from "next/link";
import {
  IoCheckmarkCircleOutline,
  IoArrowForwardOutline,
} from "react-icons/io5";

const plans = [
  {
    title: "Consulta inicial",
    description:
      "Ideal para comenzar tu proceso y conocer tus necesidades, objetivos y hábitos actuales.",
    duration: "60 min",
    price: "$700",
    features: [
      "Evaluación inicial",
      "Definición de objetivos",
      "Plan de alimentación personalizado",
      "Recomendaciones adaptadas a tu rutina",
    ],
    featured: false,
  },
  {
    title: "Consulta de seguimiento",
    description:
      "Revisamos tu progreso, resolvemos dudas y ajustamos tu estrategia cuando sea necesario.",
    duration: "40 min",
    price: "$500",
    features: [
      "Revisión de progreso",
      "Ajustes al plan de alimentación",
      "Resolución de dudas",
      "Nuevas recomendaciones",
    ],
    featured: false,
  },
  {
    title: "Paquete de 3 sesiones",
    description:
      "Un acompañamiento más completo para comenzar, evaluar tu progreso y realizar ajustes durante el proceso.",
    duration: "3 sesiones",
    price: "$1,500",
    features: [
      "Consulta inicial",
      "2 consultas de seguimiento",
      "Plan de alimentación personalizado",
      "Ajustes durante el proceso",
      "Seguimiento de tus objetivos",
    ],
    featured: true,
  },
];

export const PricingOptions = () => {
  return (
    <section className="bg-white py-24">
      <div className="max-w-7xl mx-auto px-6">

        {/* Grid de planes */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-[1fr_1fr_1.25fr]">

          {plans.map((plan, index) => (
            <div
              key={plan.title}
              className={`
                flex flex-col
                rounded-3xl
                border
                p-8
                md:p-10

                ${
                  plan.featured
                    ? "border-green-700 shadow-lg"
                    : "border-gray-200"
                }

                ${
                  index === 2
                    ? "md:col-span-2 md:w-[calc(50%-16px)] md:justify-self-center lg:col-span-1 lg:w-auto"
                    : ""
                }
              `}
            >

              {/* Encabezado */}
              <div className="flex flex-col items-start gap-3 sm:flex-row sm:items-center sm:justify-between">

                <h2 className="text-2xl font-bold text-gray-900">
                  {plan.title}
                </h2>

                {plan.featured && (
                  <span className="shrink-0 rounded-full bg-green-100 px-3 py-1 text-xs font-semibold text-green-700">
                    Proceso completo
                  </span>
                )}

              </div>

              {/* Descripción */}
              <p className="mt-4 leading-7 text-gray-600">
                {plan.description}
              </p>

              {/* Precio */}
              <div className="mt-8">

                <div className="flex items-end gap-2">
                  <span className="text-4xl font-bold text-gray-900">
                    {plan.price}
                  </span>

                  <span className="mb-1 text-gray-500">
                    MXN
                  </span>
                </div>

                <p className="mt-2 text-sm text-gray-500">
                  {plan.duration} · Precio de demostración
                </p>

              </div>

              {/* Características */}
              <div className="mt-8 flex flex-col gap-4">

                {plan.features.map((feature) => (
                  <div
                    key={feature}
                    className="flex items-start gap-3"
                  >
                    <IoCheckmarkCircleOutline
                      size={21}
                      className="mt-0.5 shrink-0 text-green-700"
                    />

                    <span className="text-gray-700">
                      {feature}
                    </span>
                  </div>
                ))}

              </div>

              {/* Botón */}
              <div className="mt-auto pt-10">

                <Link
                  href="/contacto"
                  className={`
                    inline-flex
                    w-full
                    items-center
                    justify-center
                    gap-2
                    rounded-lg
                    px-6
                    py-3
                    font-semibold
                    transition-colors

                    ${
                      plan.featured
                        ? "bg-green-700 text-white hover:bg-green-800"
                        : "border border-green-700 text-green-700 hover:bg-green-50"
                    }
                  `}
                >
                  Agendar consulta

                  <IoArrowForwardOutline size={18} />
                </Link>

              </div>

            </div>
          ))}

        </div>

      </div>
    </section>
  );
};