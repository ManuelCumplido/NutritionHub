import {
  IoNutritionOutline,
  IoFlagOutline,
  IoTrendingUpOutline,
} from "react-icons/io5";

const services = [
  {
    title: "Plan personalizado",
    description:
      "Un plan de alimentación adaptado a tus necesidades, preferencias y estilo de vida.",
    icon: IoNutritionOutline,
  },
  {
    title: "Objetivos nutricionales",
    description:
      "Trabajamos juntos para alcanzar tus objetivos de una manera saludable y sostenible.",
    icon: IoFlagOutline,
  },
  {
    title: "Seguimiento continuo",
    description:
      "Revisamos tu progreso y ajustamos tu plan conforme avanzas.",
    icon: IoTrendingUpOutline,
  },
];

export const Services = () => {
  return (
    <section className="bg-white py-24">
      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center max-w-2xl mx-auto">
          <span className="text-green-700 font-semibold">
            Servicios
          </span>

          <h2 className="mt-3 text-3xl md:text-4xl font-bold text-gray-900">
            ¿Cómo puedo ayudarte?
          </h2>

          <p className="mt-4 text-gray-600 text-lg">
            Cada persona es diferente. Por eso trabajamos con un enfoque
            personalizado que se adapta a tus objetivos y estilo de vida.
          </p>
        </div>

        <div className="mt-14 grid gap-8 md:grid-cols-3">
          {services.map((service) => {
            const Icon = service.icon;

            return (
              <div
                key={service.title}
                className="rounded-2xl border border-gray-200 p-8 transition hover:shadow-lg"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-green-100 text-green-700">
                  <Icon size={24} />
                </div>

                <h3 className="mt-6 text-xl font-bold text-gray-900">
                  {service.title}
                </h3>

                <p className="mt-3 leading-7 text-gray-600">
                  {service.description}
                </p>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};