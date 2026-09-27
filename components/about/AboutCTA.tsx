import Link from "next/link";
import { IoArrowForwardOutline } from "react-icons/io5";

export const AboutCTA = () => {
  return (
    <section className="bg-white py-20">
      <div className="max-w-4xl mx-auto px-6 text-center">

        <span className="font-semibold text-green-700">
          Tu bienestar empieza contigo
        </span>

        <h2 className="mt-3 text-3xl font-bold tracking-tight text-gray-900 md:text-4xl">
          ¿Comenzamos tu proceso?
        </h2>

        <p className="mt-5 mx-auto max-w-2xl text-lg leading-8 text-gray-600">
          Da el primer paso hacia una alimentación que se adapte a tus
          objetivos, tus necesidades y tu estilo de vida.
        </p>

        <Link
          href="/contacto"
          className="
            mt-8
            inline-flex items-center gap-2
            rounded-lg
            bg-green-700
            px-6 py-3
            font-semibold
            text-white
            transition-colors
            hover:bg-green-800
          "
        >
          Agenda tu consulta
          <IoArrowForwardOutline size={18} />
        </Link>

      </div>
    </section>
  );
};