import Image from "next/image";
import {
  IoChatbubbleOutline,
  IoRestaurantOutline,
  IoRefreshOutline,
} from "react-icons/io5";

const points = [
  {
    title: "Primero te escucho",
    description:
      "Conocemos tus objetivos, rutina, preferencias y los retos que enfrentas actualmente.",
    icon: IoChatbubbleOutline,
  },
  {
    title: "Construimos algo realista",
    description:
      "Diseñamos una estrategia de alimentación que puedas integrar en tu vida cotidiana.",
    icon: IoRestaurantOutline,
  },
  {
    title: "Evolucionamos contigo",
    description:
      "Tu plan puede cambiar contigo. Revisamos tu progreso y hacemos ajustes cuando sea necesario.",
    icon: IoRefreshOutline,
  },
];

export const WorkingMethod = () => {
  return (
    <section className="bg-stone-50 py-24">
      <div className="max-w-7xl mx-auto px-6">

        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">

          {/* Imagen */}
          <div className="relative h-[480px] overflow-hidden rounded-3xl">
            <Image
              src="/images/nutrition-workspace.png"
              alt="Espacio de consulta nutricional"
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover"
            />
          </div>

          {/* Contenido */}
          <div>
            <span className="font-semibold text-green-700">
              Mi forma de trabajar
            </span>

            <h2 className="mt-3 text-3xl font-bold tracking-tight text-gray-900 md:text-4xl">
              Tu proceso también debe adaptarse a ti.
            </h2>

            <p className="mt-5 max-w-xl leading-7 text-gray-600">
              No se trata solamente de entregarte un plan. El acompañamiento
              busca entender tu contexto y construir cambios que tengan sentido
              para tu vida.
            </p>

            <div className="mt-8 flex flex-col gap-7">
              {points.map((point) => {
                const Icon = point.icon;

                return (
                  <div
                    key={point.title}
                    className="flex gap-4"
                  >
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-green-100 text-green-700">
                      <Icon size={20} />
                    </div>

                    <div>
                      <h3 className="font-semibold text-gray-900">
                        {point.title}
                      </h3>

                      <p className="mt-1 leading-6 text-gray-600">
                        {point.description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};