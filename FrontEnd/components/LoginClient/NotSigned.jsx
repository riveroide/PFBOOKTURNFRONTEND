import React from 'react'
import { useSession, signIn, signOut } from "next-auth/react";
import Link from "next/link";

const NotSigned = () => {
    
  return (
    <div className="flex justify-center flex-col items-center py-20 font-cool_p text-4xl my-auto ">
      <h3 className="overflow-hidden my-12">Por favor registrate o ingresá con tu cuenta haciendo clic en este botón:</h3>
      <button
        className="overflow-hidden px-6 py-2 font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-blue-600 rounded-lg hover:bg-blue-500 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-80"
        onClick={() => signIn()}
      >
        Ingresar/Login
      </button>
      <br></br>
      <Link href="/client/login/createform">
        <button className="overflow-hidden"> O hace click aquí para registrarte</button>
      </Link>
      <p className="overflow-hidden my-20">(info resumida sobre facilidades para cliente)</p>
    </div>
    
  )
}

export default NotSigned