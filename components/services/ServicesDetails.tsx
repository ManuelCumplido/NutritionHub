import {
  IoPersonOutline,
  IoScaleOutline,
  IoFitnessOutline,
  IoNutritionOutline,
  IoTrendingUpOutline,
} from "react-icons/io5";

const services = [
  {
    title: "Nutrición personalizada",
    description:
      "Evaluamos tus hábitos, objetivos y estilo de vida para construir una estrategia de alimentación que realmente se adapte a ti.",
    icon: IoPersonOutline,
  },
  {
    title: "Control de peso y composición corporal",
    description:
      "Acompañamiento para pérdida de grasa, aumento de masa muscular o mantenimiento, priorizando cambios realistas y sostenibles.",
    icon: IoScaleOutline,
  },
  {
    title: "Nutrición deportiva",
    description:
      "Estrategias de alimentación para apoyar tu entrenamiento, recuperación, rendimiento y objetivos de composición corporal.",
    icon: IoFitnessOutline,
  },
  {
    title: "Educación y hábitos alimenticios",
    description:
      "Aprende a organizar tus comidas, elegir alimentos y construir hábitos saludables sin depender de dietas restrictivas.",
    icon: IoNutritionOutline,
  },
  {
    title: "Seguimiento nutricional",
    description:
      "Revisamos tu progreso y realizamos ajustes conforme cambian tus objetivos, necesidades o estilo de vida.",
    icon: IoTrendingUpOutline,
  },
];

export const ServicesDetails = () => {
  return (
    <section id="servicios" className="bg-white py-24">
      <div className="mx-auto max-w-7xl px-6">

        {/* Encabezado */}
        <div className="mx-auto max-w-2xl text-center">
          <span className="font-semibold text-green-700">
            ¿En qué puedo ayudarte?
          </span>

          <h2 className="mt-3 text-3xl font-bold tracking-tight text-gray-900 md:text-4xl">
            Un acompañamiento para cada objetivo
          </h2>

          <p className="mt-4 text-lg leading-8 text-gray-600">
            Cada proceso es diferente. El objetivo es encontrar una estrategia
            que funcione para ti y que puedas mantener en tu día a día.
          </p>
        </div>

        {/* Servicios */}
        <div className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-6">

          {services.map((service, index) => {
            const Icon = service.icon;

            return (
              <div
                key={service.title}
                className={`
                  rounded-3xl
                  border border-gray-200
                  bg-white
                  p-8
                  transition
                  hover:-translate-y-1
                  hover:shadow-md
                  ${
                    index < 3
                      ? "lg:col-span-2"
                      : "lg:col-span-2 lg:col-start-auto"
                  }
                  ${
                    index === 3
                      ? "lg:col-start-2"
                      : ""
                  }
                `}
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-green-50 text-green-700">
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