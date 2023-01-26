import { signIn } from "next-auth/react";
import Link from "next/link";
import React from "react";

const NotSigned = () => {
  return (
    <>
      {/* <section className="bg-white  h-screen">
        <div className="flex flex-col justify-center py-8 px-4 mx-auto max-w-screen-xl sm:py-16 lg:px-6">
          <div className="dark:bg-blue-700 mx-auto max-w-screen-sm text-center">
            <h2 className="mb-4 text-4xl tracking-tight font-extrabold leading-tight text-gray-900 dark:text-white"></h2>
            <p className="mb-6 font-light text-gray-500 dark:text-gray-400 md:text-lg">
              Por favor registrate o ingresá con tu cuenta haciendo click en
              este botón
            </p>

            <button
              classNameName="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded w-24"
              onClick={() => signIn()}
            >
              Login
            </button>
            <p className="mb-6 mt-6 font-light text-gray-500 dark:text-gray-400 md:text-lg">
              O hace click <Link href="/business/login/createform">aquí</Link>{" "}
              para registrarte
            </p>
          </div>
        </div>
      </section> */}
      <section className="flex bg-white h-full">
        <div className="container flex flex-col items-center px-4 py-28 mx-auto text-center ">
          <h2 className="max-w-2xl mx-auto text-3xl font-semibold tracking-tight text-gray-800 xl:text-6xl font-cool_p tracking-wider">
            Ven con tu empresa a BookTurn y sentite en{" "}
            <span className="text-blue-500">el próximo nivel.</span>
          </h2>

          <p className="max-w-4xl mt-6 text-center text-gray-500">
            Podés hacer clic en "Ingresar" para logear tu cuenta, o bien si
            todavía no sos usuario de Bookturn podes crear tu usuario y empresa
            con un simple clic en "Registrate"
          </p>

          <div className="inline-flex w-full mt-6 sm:w-auto gap-8" >
            <button className="inline-flex items-center justify-center w-full px-6 py-2 text-white duration-300 bg-blue-600 rounded-lg hover:bg-blue-500 focus:ring focus:ring-blue-300 focus:ring-opacity-80"
            onClick={()=>signIn()}>
              Ingresar
            </button>
            <Link href="/business/login/createform">
              <button className="inline-flex items-center justify-center w-full px-6 py-2 text-white duration-300 bg-blue-600 rounded-lg hover:bg-blue-500 focus:ring focus:ring-blue-300 focus:ring-opacity-80">
                Registrate
              </button>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default NotSigned;
