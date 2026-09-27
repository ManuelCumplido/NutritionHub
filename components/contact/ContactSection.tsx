"use client";

import {
    IoLogoWhatsapp,
    IoTimeOutline,
    IoCalendarOutline,
    IoArrowForwardOutline,
    IoLocationOutline,
} from "react-icons/io5";

export const ContactSection = () => {
    const handleSubmit = (
        event: React.SyntheticEvent<HTMLFormElement>
    ) => {
        event.preventDefault();

        const formData = new FormData(event.currentTarget);

        const name = formData.get("name");
        const service = formData.get("service");
        const message = formData.get("message");

        const whatsappMessage = `
Hola, soy ${name}.

Me interesa: ${service}.

${message}
    `.trim();

        const phoneNumber = "523322281179";

        const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
            whatsappMessage
        )}`;

        window.open(whatsappUrl, "_blank");
    };

    return (
        <section className="bg-stone-50 py-20 lg:py-24">
            <div className="mx-auto max-w-7xl px-6">

                {/* Contacto + Formulario */}
                <div className="grid gap-14 lg:grid-cols-2 lg:gap-20">

                    {/* Información */}
                    <div>
                        <span className="font-semibold text-green-700">
                            Contacto
                        </span>

                        <h1 className="mt-3 text-4xl font-bold tracking-tight text-gray-900 md:text-5xl">
                            Hablemos sobre tus objetivos.
                        </h1>

                        <p className="mt-6 max-w-xl text-lg leading-8 text-gray-600">
                            Cuéntame un poco sobre ti y lo que te gustaría lograr.
                            Completa el formulario y continuaremos la conversación
                            directamente por WhatsApp.
                        </p>

                        {/* Información de contacto */}
                        <div className="mt-10 flex flex-col gap-6">

                            {/* WhatsApp */}
                            <div className="flex items-center gap-4">
                                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-green-100 text-green-700">
                                    <IoLogoWhatsapp size={21} />
                                </div>

                                <div>
                                    <p className="text-sm text-gray-500">
                                        WhatsApp
                                    </p>

                                    <p className="font-medium text-gray-900">
                                        Escríbeme directamente
                                    </p>
                                </div>
                            </div>

                            {/* Horario */}
                            <div className="flex items-center gap-4">
                                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-green-100 text-green-700">
                                    <IoCalendarOutline size={21} />
                                </div>

                                <div>
                                    <p className="text-sm text-gray-500">
                                        Horario de atención
                                    </p>

                                    <p className="font-medium text-gray-900">
                                        Lunes a viernes
                                    </p>
                                </div>
                            </div>

                            {/* Tiempo de respuesta */}
                            <div className="flex items-center gap-4">
                                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-green-100 text-green-700">
                                    <IoTimeOutline size={21} />
                                </div>

                                <div>
                                    <p className="text-sm text-gray-500">
                                        Tiempo de respuesta
                                    </p>

                                    <p className="font-medium text-gray-900">
                                        Normalmente dentro de 24 horas
                                    </p>
                                </div>
                            </div>

                            {/* Ubicación */}
                            <div className="flex items-center gap-4">
                                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-green-100 text-green-700">
                                    <IoLocationOutline size={21} />
                                </div>

                                <div>
                                    <p className="text-sm text-gray-500">
                                        Ubicación
                                    </p>

                                    <p className="font-medium text-gray-900">
                                        Providencia, Guadalajara, Jalisco
                                    </p>

                                    <p className="mt-1 text-xs text-gray-400">
                                        Ubicación de demostración
                                    </p>
                                </div>
                            </div>

                        </div>
                    </div>

                    {/* Formulario */}
                    <div className="rounded-3xl bg-white p-8 shadow-sm md:p-10">

                        <h2 className="text-2xl font-bold text-gray-900">
                            Cuéntame sobre ti
                        </h2>

                        <p className="mt-2 text-sm text-gray-500">
                            Completa tus datos para continuar por WhatsApp.
                        </p>

                        <form
                            onSubmit={handleSubmit}
                            className="mt-8 flex flex-col gap-6"
                        >

                            {/* Nombre */}
                            <div>
                                <label
                                    htmlFor="name"
                                    className="text-sm font-medium text-gray-700"
                                >
                                    Nombre
                                </label>

                                <input
                                    id="name"
                                    name="name"
                                    type="text"
                                    required
                                    placeholder="Tu nombre"
                                    className="
                    mt-2
                    w-full
                    rounded-lg
                    border border-gray-300
                    bg-white
                    px-4 py-3
                    text-gray-900
                    placeholder:text-gray-400
                    outline-none
                    transition
                    focus:border-green-700
                    focus:ring-2
                    focus:ring-green-100
                  "
                                />
                            </div>

                            {/* Tipo de consulta */}
                            <div>
                                <label
                                    htmlFor="service"
                                    className="text-sm font-medium text-gray-700"
                                >
                                    ¿Qué tipo de consulta buscas?
                                </label>

                                <select
                                    id="service"
                                    name="service"
                                    required
                                    defaultValue=""
                                    className="
                    mt-2
                    w-full
                    rounded-lg
                    border border-gray-300
                    bg-white
                    px-4 py-3
                    text-gray-900
                    outline-none
                    transition
                    focus:border-green-700
                    focus:ring-2
                    focus:ring-green-100
                  "
                                >
                                    <option value="" disabled>
                                        Selecciona una opción
                                    </option>

                                    <option value="Consulta general">
                                        General
                                    </option>

                                    <option value="Consulta inicial">
                                        Consulta inicial
                                    </option>

                                    <option value="Consulta de seguimiento">
                                        Consulta de seguimiento
                                    </option>

                                    <option value="Paquete de 3 sesiones">
                                        Paquete de 3 sesiones
                                    </option>
                                </select>
                            </div>

                            {/* Mensaje */}
                            <div>
                                <label
                                    htmlFor="message"
                                    className="text-sm font-medium text-gray-700"
                                >
                                    ¿En qué te gustaría trabajar?
                                </label>

                                <textarea
                                    id="message"
                                    name="message"
                                    rows={5}
                                    required
                                    placeholder="Cuéntame brevemente sobre tus objetivos..."
                                    className="
                    mt-2
                    w-full
                    resize-none
                    rounded-lg
                    border border-gray-300
                    bg-white
                    px-4 py-3
                    text-gray-900
                    placeholder:text-gray-400
                    outline-none
                    transition
                    focus:border-green-700
                    focus:ring-2
                    focus:ring-green-100
                  "
                                />
                            </div>

                            {/* Botón */}
                            <button
                                type="submit"
                                className="
                  inline-flex
                  items-center
                  justify-center
                  gap-2
                  rounded-lg
                  bg-green-700
                  px-6 py-3
                  font-semibold
                  text-white
                  transition-colors
                  hover:bg-green-800
                "
                            >
                                Continuar por WhatsApp
                                <IoArrowForwardOutline size={18} />
                            </button>

                        </form>
                    </div>

                </div>

                {/* Mapa */}
                <div className="mt-20">

                    <div className="mx-auto mb-8 max-w-2xl text-center">
                        <span className="font-semibold text-green-700">
                            Ubicación
                        </span>

                        <h2 className="mt-3 text-3xl font-bold tracking-tight text-gray-900 md:text-4xl">
                            Encuéntranos en Guadalajara
                        </h2>

                        <p className="mt-4 text-gray-600">
                            Providencia, Guadalajara, Jalisco
                        </p>

                        <p className="mt-1 text-sm text-gray-400">
                            Ubicación de demostración
                        </p>
                    </div>

                    <div className="overflow-hidden rounded-3xl border border-gray-200 bg-white shadow-sm">
                        <iframe
                            src="https://www.google.com/maps?q=Providencia%2C%20Guadalajara%2C%20Jalisco%2C%20Mexico&output=embed"
                            width="100%"
                            height="420"
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                            title="Mapa de Providencia, Guadalajara"
                            className="block w-full"
                        />
                    </div>

                </div>

            </div>
        </section>
    );
};