import { signOut, useSession } from 'next-auth/react';
import Link from 'next/link';
import React from 'react'

const Signed = ({session}) => {
  
  return (
    // <div className="flex justify-center flex-col items-center py-20 font-cool_p text-4xl my-auto ">
    //     <h2 className="overflow-hidden my-12">Bienvenido {session.user.name}</h2>
    //     <Link href="/business/dashboard">
    //     <button className="overflow-hidden px-6 py-2 font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-blue-600 rounded-lg hover:bg-blue-500 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-80">Mi Perfil</button>
    //     </Link>
        
    //     <p className="overflow-hidden text-[60%] mt-48">No es tu nombre?</p>
    //     <button className="overflow-hidden px-4 py-1 font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-red-600 rounded-lg hover:bg-gray-500 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-80 text-[50%]" onClick={() => signOut()}>Cerrar sesión</button>
    //   </div>
    <>
    <section className="flex bg-white h-full">
        <div className="container flex flex-col items-center px-4 py-36 mx-auto text-center ">
          <h2 className="max-w-2xl mx-auto text-3xl font-semibold tracking-tight text-gray-800 xl:text-6xl font-cool_p tracking-wider">
            Bienvenido{" "}
            <span className="text-blue-500">{session.user.name}</span>
          </h2>

          <p className="max-w-4xl mt-6 text-center text-gray-500">
            Que placer verte de nuevo por aquí, por favor hacé clic en "Ir a mi Dashboard" para poder ingresar en tu plataforma para ver tus turnos, informaciones y más...
          </p>

          <div className="inline-flex w-full mt-6 sm:w-auto gap-8" >
            <Link href="/business/dashboard">
              <button className="inline-flex items-center justify-center w-full px-6 py-2 text-white duration-300 bg-blue-600 rounded-lg hover:bg-blue-500 focus:ring focus:ring-blue-300 focus:ring-opacity-80">
                Ir a mi Dashboard
              </button>
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}

export default Signed