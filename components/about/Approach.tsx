import {
  IoLeafOutline,
  IoPersonOutline,
  IoHeartOutline,
} from "react-icons/io5";

const approaches = [
  {
    title: "Sin extremos",
    description:
      "Una alimentación saludable no tiene que sentirse restrictiva. Buscamos equilibrio, flexibilidad y una mejor relación con la comida.",
    icon: IoLeafOutline,
  },
  {
    title: "Personalizado",
    description:
      "Cada persona tiene necesidades diferentes. Tu alimentación se adapta a tus objetivos, preferencias y estilo de vida.",
    icon: IoPersonOutline,
  },
  {
    title: "Sostenible",
    description:
      "El objetivo no es seguir una dieta temporal, sino construir hábitos que puedas mantener y disfrutar a largo plazo.",
    icon: IoHeartOutline,
  },
];

export const Approach = () => {
  return (
    <section className="bg-white py-24">
      <div className="max-w-7xl mx-auto px-6">

        {/* Encabezado */}
        <div className="max-w-2xl mx-auto text-center">
          <span className="font-semibold text-green-700">
            Mi enfoque
          </span>

          <h2 className="mt-3 text-3xl font-bold tracking-tight text-gray-900 md:text-4xl">
            Una forma diferente de cuidar tu alimentación
          </h2>

          <p className="mt-4 text-lg leading-8 text-gray-600">
            Un enfoque pensado para ayudarte a mejorar tus hábitos sin dejar
            de disfrutar tu día a día.
          </p>
        </div>

        {/* Principios */}
        <div className="mt-16 grid gap-10 md:grid-cols-3 md:gap-0">

          {approaches.map((approach, index) => {
            const Icon = approach.icon;

            return (
              <div
                key={approach.title}
                className={`
                  px-6
                  ${index !== 0 ? "md:border-l md:border-gray-200" : ""}
                `}
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-green-50 text-green-700">
                  <Icon size={24} />
                </div>

                <h3 className="mt-6 text-xl font-bold text-gray-900">
                  {approach.title}
                </h3>

                <p className="mt-3 leading-7 text-gray-600">
                  {approach.description}
                </p>
              </div>
            );
          })}

        </div>

      </div>
    </section>
  );
};