
import React from "react";
import { useSession, signIn, signOut } from "next-auth/react";
import Link from "next/link";

const Signed = () => {
  const { data: session } = useSession();
  return (
    <div className="flex justify-center flex-col items-center py-20 font-cool_p text-4xl my-auto ">
        <h2 className="overflow-hidden my-12">Bienvenido {session.user.name}</h2>
        <Link href="/profile">
        <button className="overflow-hidden px-6 py-2 font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-blue-600 rounded-lg hover:bg-blue-500 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-80">Mi Perfil</button>
        </Link>
        
        <p className="overflow-hidden text-[60%] mt-48">No es tu nombre?</p>
        <button className="overflow-hidden px-4 py-1 font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-red-600 rounded-lg hover:bg-gray-500 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-80 text-[50%]" onClick={() => signOut()}>Cerrar sesión</button>
      </div>
  );
};

export default Signed;
