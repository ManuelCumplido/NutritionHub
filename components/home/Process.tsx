const steps = [
  {
    number: "01",
    title: "Agenda tu consulta",
    description:
      "Cuéntanos sobre tus objetivos, hábitos y necesidades para conocer tu punto de partida.",
  },
  {
    number: "02",
    title: "Creamos tu plan",
    description:
      "Recibe un plan de alimentación personalizado y adaptado a tu estilo de vida.",
  },
  {
    number: "03",
    title: "Seguimiento y ajustes",
    description:
      "Revisamos tu progreso y realizamos los ajustes necesarios conforme avanzas.",
  },
];

export const Process = () => {
  return (
    <section className="bg-white py-24">
      <div className="max-w-7xl mx-auto px-6">

        {/* Encabezado */}
        <div className="max-w-2xl mx-auto text-center">
          <span className="font-semibold text-green-700">
            Tu proceso
          </span>

          <h2 className="mt-3 text-3xl font-bold tracking-tight text-gray-900 md:text-4xl">
            Empieza tu cambio en 3 pasos
          </h2>

          <p className="mt-4 text-lg leading-8 text-gray-600">
            Un proceso sencillo y personalizado para acompañarte desde tu
            primera consulta hasta alcanzar tus objetivos.
          </p>
        </div>

        {/* Pasos */}
        <div className="mt-16 grid gap-12 md:grid-cols-3">
          {steps.map((step) => (
            <div
              key={step.number}
              className="relative"
            >
              <span className="text-5xl font-bold text-green-600">
                {step.number}
              </span>

              <h3 className="mt-4 text-xl font-bold text-gray-900">
                {step.title}
              </h3>

              <p className="mt-3 leading-7 text-gray-600">
                {step.description}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};