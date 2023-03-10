import React, { useEffect } from "react";
import styles from "./LandingInfoBussines.module.css";
import Link from "next/link";
import RegisterButtomBusiness from "../RegisterButtomBusiness/RegisterButtomBusiness";

import AOS from "aos";
import "aos/dist/aos.css";

const LandingInfoBussines = () => {
  useEffect(() => {
    AOS.init();
  });
  return (
    <div className={styles.container}>
      <div className={styles.info1}>
        <div className={styles.info1_cont}>
          <div data-aos="fade-right" className={styles.info1_texto}>
            <h1>
              El mejor software para peluquerías, centros de estética y negocios
            </h1>
            <p>
              Bookturn te permite gestionar tu peluquería, barbería, centro de
              belleza, salón de uñas, etc, desde cualquier lugar con: agenda
              digital, herramientas de marketing, protección contra
              inasistencias, inventario, gestión de horarios, y mucho más.
            </p>
            <RegisterButtomBusiness />
          </div>
          <div data-aos="fade-left" className={styles.info1_img}>
            {/* <img src="/lading_img1-removebg-preview.png" alt="img" /> */}
            <img
              src="https://res.cloudinary.com/dquxxjngk/image/upload/v1671843080/Bookturn/src/lading_img1-removebg-preview_zcjukg.png"
              alt="img"
            />
          </div>
        </div>
      </div>

      {/* <div
        id="banner"
        tabindex="-1"
        class="flex fixed z-50 gap-8 justify-between items-start py-3 px-4 w-full bg-gray-50 border border-b border-gray-200 sm:items-center dark:border-gray-700 lg:py-4 dark:bg-gray-800"
      >
        <p class="text-sm font-light text-gray-500 dark:text-gray-400">
          Supercharge your hiring by taking advantage of our{" "}
          <a
            class="font-medium underline text-primary-600 dark:text-primary-500 hover:no-underline"
            href="#"
          >
            limited-time sale
          </a>{" "}
          for Designer Search + Job Board. Unlimited access to over 190K
          top-ranked candidates and the #1 design job board.
        </p>
        <button
          data-collapse-toggle="banner"
          type="button"
          class="flex items-center text-gray-400 hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 dark:hover:bg-gray-600 dark:hover:text-white"
        >
          <svg
            class="w-5 h-5"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
              clip-rule="evenodd"
            ></path>
          </svg>
        </button>
      </div> */}

      <section data-aos="fade-up" class="bg-white dark:bg-blue-700 w-screen">
        <div class="py-8 px-4 mx-auto max-w-screen-xl sm:py-16 lg:px-6 ">
          <div class="mx-auto max-w-screen-sm text-center">
            <h2
              data-aos="fade-up"
              class="mb-4 text-4xl tracking-tight font-extrabold leading-tight text-gray-900 dark:text-white"
            >
              ¡Comenza tu prueba gratis ahora!
            </h2>
            <p
              data-aos="fade-up"
              class="mb-6 font-light text-gray-500 dark:text-gray-400 md:text-lg"
            >
              Proba la plataforma de Bookturn por 30 dias.
            </p>
            <Link
              data-aos="fade-up"
              href="/business/login/createform"
              class="text-white bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-primary-600 dark:hover:bg-primary-700 focus:outline-none dark:focus:ring-primary-800"
            >
              Prueba gratis por 30 dias.
            </Link>
          </div>
        </div>
      </section>

      <section class="bg-white ">
        <div class="py-8 px-4 mx-auto max-w-screen-xl sm:py-16 lg:px-6 flex justify-center flex-col items-center">
          <div class="max-w-screen-md mb-8 lg:mb-16 text-center">
            <h2
              data-aos="fade-up"
              class="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-gray-900"
            >
              Designed for business teams like yours
            </h2>
            <p
              data-aos="fade-up"
              class="text-gray-500 sm:text-xl dark:text-gray-400"
            >
              Increíbles herramientas que te dan más tiempo para dedicarte a
              ofrecer tus servicios.
            </p>
          </div>
          <div class="space-y-8 md:grid md:grid-cols-2 lg:grid-cols-3 md:gap-12 md:space-y-0">
            <div>
              <div
                data-aos="fade-up"
                class="flex justify-center items-center mb-4 w-10 h-10 rounded-full bg-primary-100 lg:h-12 lg:w-12 dark:bg-primary-900"
              >
                <svg
                  data-aos="fade-up"
                  class="w-5 h-5 text-primary-600 lg:w-6 lg:h-6 dark:text-primary-300"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    d="M3 3a1 1 0 000 2v8a2 2 0 002 2h2.586l-1.293 1.293a1 1 0 101.414 1.414L10 15.414l2.293 2.293a1 1 0 001.414-1.414L12.414 15H15a2 2 0 002-2V5a1 1 0 100-2H3zm11.707 4.707a1 1 0 00-1.414-1.414L10 9.586 8.707 8.293a1 1 0 00-1.414 0l-2 2a1 1 0 101.414 1.414L8 10.414l1.293 1.293a1 1 0 001.414 0l4-4z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
              </div>
              <h3
                data-aos="fade-up"
                class="mb-2 text-xl font-bold text-gray-900"
              >
                Autoservicio para clientes
              </h3>
              <p data-aos="fade-up" class="text-gray-500 dark:text-gray-400">
                Incluso si es después de horas del cierre de tu peluquería,
                barbería, gimnasio, spa u otro, Bookturn está disponible para
                todos tus clientes. La gente puede comprobar los días libres de
                reserva y reservar tus visitas 24/7 desde cualquier lugar con la
                aplicación gratuita de Bookturn para clientes.
              </p>
            </div>
            <div>
              <div
                data-aos="fade-up"
                class="flex justify-center items-center mb-4 w-10 h-10 rounded-full bg-primary-100 lg:h-12 lg:w-12 dark:bg-primary-900"
              >
                <svg
                  class="w-5 h-5 text-primary-600 lg:w-6 lg:h-6 dark:text-primary-300"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M10.394 2.08a1 1 0 00-.788 0l-7 3a1 1 0 000 1.84L5.25 8.051a.999.999 0 01.356-.257l4-1.714a1 1 0 11.788 1.838L7.667 9.088l1.94.831a1 1 0 00.787 0l7-3a1 1 0 000-1.838l-7-3zM3.31 9.397L5 10.12v4.102a8.969 8.969 0 00-1.05-.174 1 1 0 01-.89-.89 11.115 11.115 0 01.25-3.762zM9.3 16.573A9.026 9.026 0 007 14.935v-3.957l1.818.78a3 3 0 002.364 0l5.508-2.361a11.026 11.026 0 01.25 3.762 1 1 0 01-.89.89 8.968 8.968 0 00-5.35 2.524 1 1 0 01-1.4 0zM6 18a1 1 0 001-1v-2.065a8.935 8.935 0 00-2-.712V17a1 1 0 001 1z"></path>
                </svg>
              </div>
              <h3
                data-aos="fade-up"
                class="mb-2 text-xl font-bold text-gray-900"
              >
                Administración del calendario
              </h3>
              <p data-aos="fade-up" class="text-gray-500 dark:text-gray-400">
                Solo tienes que echar un vistazo a tu móvil para saber qué tan
                lleno estará tu día. Bookturn gestiona y modifica horarios sin
                esfuerzo para los calendarios individuales y para toda la
                tienda.
              </p>
            </div>
            <div>
              <div
                data-aos="fade-up"
                class="flex justify-center items-center mb-4 w-10 h-10 rounded-full bg-primary-100 lg:h-12 lg:w-12 dark:bg-primary-900"
              >
                <svg
                  class="w-5 h-5 text-primary-600 lg:w-6 lg:h-6 dark:text-primary-300"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    d="M6 6V5a3 3 0 013-3h2a3 3 0 013 3v1h2a2 2 0 012 2v3.57A22.952 22.952 0 0110 13a22.95 22.95 0 01-8-1.43V8a2 2 0 012-2h2zm2-1a1 1 0 011-1h2a1 1 0 011 1v1H8V5zm1 5a1 1 0 011-1h.01a1 1 0 110 2H10a1 1 0 01-1-1z"
                    clip-rule="evenodd"
                  ></path>
                  <path d="M2 13.692V16a2 2 0 002 2h12a2 2 0 002-2v-2.308A24.974 24.974 0 0110 15c-2.796 0-5.487-.46-8-1.308z"></path>
                </svg>
              </div>
              <h3
                data-aos="fade-up"
                class="mb-2 text-xl font-bold text-gray-900"
              >
                Gestión de clientes
              </h3>
              <p data-aos="fade-up" class="text-gray-500 dark:text-gray-400">
                Mantén los detalles clave del cliente al alcance de tu mano: los
                perfiles personalizables del cliente almacenan información como
                el historial de reservas, las inasistencias y los recordatorios
                de citas de una manera muy fácil de localizar.
              </p>
            </div>
            <div>
              <div
                data-aos="fade-up"
                class="flex justify-center items-center mb-4 w-10 h-10 rounded-full bg-primary-100 lg:h-12 lg:w-12 dark:bg-primary-900"
              >
                <svg
                  class="w-5 h-5 text-primary-600 lg:w-6 lg:h-6 dark:text-primary-300"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M8.433 7.418c.155-.103.346-.196.567-.267v1.698a2.305 2.305 0 01-.567-.267C8.07 8.34 8 8.114 8 8c0-.114.07-.34.433-.582zM11 12.849v-1.698c.22.071.412.164.567.267.364.243.433.468.433.582 0 .114-.07.34-.433.582a2.305 2.305 0 01-.567.267z"></path>
                  <path
                    fill-rule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-13a1 1 0 10-2 0v.092a4.535 4.535 0 00-1.676.662C6.602 6.234 6 7.009 6 8c0 .99.602 1.765 1.324 2.246.48.32 1.054.545 1.676.662v1.941c-.391-.127-.68-.317-.843-.504a1 1 0 10-1.51 1.31c.562.649 1.413 1.076 2.353 1.253V15a1 1 0 102 0v-.092a4.535 4.535 0 001.676-.662C13.398 13.766 14 12.991 14 12c0-.99-.602-1.765-1.324-2.246A4.535 4.535 0 0011 9.092V7.151c.391.127.68.317.843.504a1 1 0 101.511-1.31c-.563-.649-1.413-1.076-2.354-1.253V5z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
              </div>
              <h3
                data-aos="fade-up"
                class="mb-2 text-xl font-bold dark:text-gray-900"
              >
                Herramientas de marketing y fidelización
              </h3>
              <p data-aos="fade-up" class="text-gray-500 dark:text-gray-400">
                Aumenta las reservas y asegura una base de clientes estable:
                interactúa con clientes fidelizados y potenciales con correos
                electrónicos, móviles y redes sociales.
              </p>
            </div>
            <div>
              <div
                data-aos="fade-up"
                class="flex justify-center items-center mb-4 w-10 h-10 rounded-full bg-primary-100 lg:h-12 lg:w-12 dark:bg-primary-900"
              >
                <svg
                  class="w-5 h-5 text-primary-600 lg:w-6 lg:h-6 dark:text-primary-300"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M7 3a1 1 0 000 2h6a1 1 0 100-2H7zM4 7a1 1 0 011-1h10a1 1 0 110 2H5a1 1 0 01-1-1zM2 11a2 2 0 012-2h12a2 2 0 012 2v4a2 2 0 01-2 2H4a2 2 0 01-2-2v-4z"></path>
                </svg>
              </div>
              <h3
                data-aos="fade-up"
                class="mb-2 text-xl font-bold text-gray-900"
              >
                Punto de venta
              </h3>
              <p data-aos="fade-up" class="text-gray-500 dark:text-gray-400">
                Bookturn te brinda las herramientas que necesitas para llegar a
                clientes nuevos. Tu cuenta incluye un perfil público en Bookturn y
                una aplicación para clientes gratuita, así como widgets para tus
                redes sociales. Todo esto permite a los clientes verificar sus
                servicios y disponibilidad, ver tu trabajo, conectarse desde sus
                redes sociales y consultar reseñas verificadas.
              </p>
            </div>
            <div>
              <div
                data-aos="fade-up"
                class="flex justify-center items-center mb-4 w-10 h-10 rounded-full bg-primary-100 lg:h-12 lg:w-12 dark:bg-primary-900"
              >
                <svg
                  class="w-5 h-5 text-primary-600 lg:w-6 lg:h-6 dark:text-primary-300"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    d="M11.49 3.17c-.38-1.56-2.6-1.56-2.98 0a1.532 1.532 0 01-2.286.948c-1.372-.836-2.942.734-2.106 2.106.54.886.061 2.042-.947 2.287-1.561.379-1.561 2.6 0 2.978a1.532 1.532 0 01.947 2.287c-.836 1.372.734 2.942 2.106 2.106a1.532 1.532 0 012.287.947c.379 1.561 2.6 1.561 2.978 0a1.533 1.533 0 012.287-.947c1.372.836 2.942-.734 2.106-2.106a1.533 1.533 0 01.947-2.287c1.561-.379 1.561-2.6 0-2.978a1.532 1.532 0 01-.947-2.287c.836-1.372-.734-2.942-2.106-2.106a1.532 1.532 0 01-2.287-.947zM10 13a3 3 0 100-6 3 3 0 000 6z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
              </div>
              <h3
                data-aos="fade-up"
                class="mb-2 text-xl font-bold  text-gray-900"
              >
                Administración de empresas
              </h3>
              <p data-aos="fade-up" class="text-gray-500 dark:text-gray-400">
                Descubre los ingresos de tu negocio con un solo click. Genera
                informes sobre ventas y comisiones. También puedes administrar
                tu personal e inventario.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default LandingInfoBussines;
