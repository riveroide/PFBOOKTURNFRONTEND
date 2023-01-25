import { signIn } from "next-auth/react";
import Link from "next/link";
import React from "react";

const NotSigned = () => {
  return (
    <>
      <section class="bg-white  h-screen">
        <div class="flex flex-col justify-center py-8 px-4 mx-auto max-w-screen-xl sm:py-16 lg:px-6">
          <div class="dark:bg-blue-700 mx-auto max-w-screen-sm text-center">
            <h2 class="mb-4 text-4xl tracking-tight font-extrabold leading-tight text-gray-900 dark:text-white"></h2>
            <p class="mb-6 font-light text-gray-500 dark:text-gray-400 md:text-lg">
              Por favor registrate o ingresá con tu cuenta haciendo click en
              este botón
            </p>

            <button
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded w-24"
              onClick={() => signIn()}
            >
              Login
            </button>
            <p class="mb-6 mt-6 font-light text-gray-500 dark:text-gray-400 md:text-lg">
              O hace click <Link href="/client/login/createform">aquí</Link>{" "}
              para registrarte
            </p>
          </div>
        </div>
      </section>
      {/* <div className="flex flex-col justify-center h-screen items-center">
        <div
          data-aos="fade-up"
          className="flex flex-col justify-center items-center h-auto bg-blue-700"
        >
          <h3 className="overflow-hidden my-12">
            Por favor registrate o ingresá con tu cuenta haciendo clic en este
            botón:
          </h3>
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded w-24"
            onClick={() => signIn()}
          >
            Ingresar/Login
          </button>
          <br></br>
          <Link href="/client/login/createform">
            <button className="overflow-hidden">
              {" "}
              O hace click aquí para registrarte
            </button>
          </Link>
          <p className="overflow-hidden my-20">
            (info resumida sobre facilidades para empresas)
          </p>
        </div>
      </div> */}
    </>
  );
};

export default NotSigned;
