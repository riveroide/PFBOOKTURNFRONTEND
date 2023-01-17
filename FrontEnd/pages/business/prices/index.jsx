import Navbar from "components/Navbar/Navbar";
import Link from "next/link";
import React from "react";
import styles from "../../../styles/BusinessPrices.module.css";
import AOS from "aos";
import "aos/dist/aos.css";

const index = () => {
  return (
    <div className={styles.generalContainer}>
      <Navbar />
      <section class="bg-white">
        <div class="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
          <div
            class="mx-auto max-w-screen-md text-center mb-8 lg:mb-12"
            data-aos="zoom-in"
          >
            <h2 class="mb-4 text-4xl tracking-tight font-extrabold text-gray-900">
              Registra tu empresa en Bookturn!
            </h2>
            <p class="mb-5 font-light text-gray-500 sm:text-xl">
              Gestiona tus turnos de forma sencilla
            </p>
          </div>
          <div
            class="space-y-8 lg:grid lg:grid-cols-1 sm:gap-6 xl:gap-10 lg:space-y-0"
            data-aos="zoom-in"
          >
            {/* <!-- Pricing Card --> */}
            <div class="flex flex-col p-6 mx-auto max-w-lg text-center text-gray-900 bg-white rounded-lg border border-gray-100 shadow">
              <h3 class="mb-4 text-2xl font-semibold">Suscripción</h3>
              <p class="font-light text-gray-500 sm:text-lg">
                Accede a los beneficios de registrar tu empresa
              </p>
              <div class="flex justify-center items-baseline my-8">
                <span class="mr-2 text-5xl font-extrabold">$20</span>
                <span class="text-gray-500">/mes</span>
              </div>
              {/* <!-- List --> */}
              <ul role="list" class="mb-8 space-y-4 text-left">
                <li class="flex items-center space-x-3">
                  {/* <!-- Icon --> */}
                  <svg
                    class="flex-shrink-0 w-5 h-5 text-green-500"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clip-rule="evenodd"
                    ></path>
                  </svg>
                  <span>Gestion de turnos</span>
                </li>
                <li class="flex items-center space-x-3">
                  {/* <!-- Icon --> */}
                  <svg
                    class="flex-shrink-0 w-5 h-5 text-green-500"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clip-rule="evenodd"
                    ></path>
                  </svg>
                  <span>Visibilidad</span>
                </li>
                <li class="flex items-center space-x-3">
                  {/* <!-- Icon --> */}
                  <svg
                    class="flex-shrink-0 w-5 h-5 text-green-500"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clip-rule="evenodd"
                    ></path>
                  </svg>
                  <span>Dashboard personal</span>
                </li>
                <li class="flex items-center space-x-3">
                  {/* <!-- Icon --> */}
                  <svg
                    class="flex-shrink-0 w-5 h-5 text-green-500"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clip-rule="evenodd"
                    ></path>
                  </svg>
                  <span>Comodidad</span>
                </li>
              </ul>
              <Link
                href="/business/login/createform"
                class="text-white bg-blue-600 hover:bg-blue-700 focus:ring-4 focus:ring-blue-200 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
              >
                Suscribete
              </Link>
            </div>
            {/* <!-- Pricing Card --> */}
          </div>
        </div>
      </section>
    </div>
  );
};

export default index;
