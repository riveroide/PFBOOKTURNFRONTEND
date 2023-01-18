import Link from "next/link";
import React, {useEffect} from "react";
import AOS from 'aos';
import 'aos/dist/aos.css';

const NavBar2 = () => {
  useEffect(() => {
    
    AOS.init()
  })

  return (
    <nav className="bg-white shadow dark:bg-blue-700">

      <div className="container flex items-center justify-center p-6 mx-auto text-gray-600 capitalize dark:text-gray-300 font-cool_g">
      <Link
          href="/business"
          className="text-gray-800 transition-colors duration-300 transform dark:text-gray-200 border-b-2 border-blue-500 mx-1.5 sm:mx-6 text-3xl"
        >
          Bookturn 
        </Link>
        <Link
          href="#"
          className="border-b-2 border-transparent hover:text-gray-800 transition-colors duration-300 transform dark:hover:text-gray-200 hover:border-blue-500 mx-1.5 sm:mx-6"
        >
          Funcionalidades
        </Link>

        <Link
          href="#"
          className="border-b-2 border-transparent hover:text-gray-800 transition-colors duration-300 transform dark:hover:text-gray-200 hover:border-blue-500 mx-1.5 sm:mx-6"
        >
          Quiénes Somos
        </Link>

        <Link
          href="#"
          className="border-b-2 border-transparent hover:text-gray-800 transition-colors duration-300 transform dark:hover:text-gray-200 hover:border-blue-500 mx-1.5 sm:mx-6"
        >
          Precios
        </Link>

        <Link
          href="#"
          className="border-b-2 border-transparent hover:text-gray-800 transition-colors duration-300 transform dark:hover:text-gray-200 hover:border-blue-500 mx-1.5 sm:mx-6"
        >
          Categorias
        </Link>

        <Link
          href="#"
          className="border-b-2 border-transparent hover:text-gray-800 transition-colors duration-300 transform dark:hover:text-gray-200 hover:border-blue-500 mx-1.5 sm:mx-6"
        >
          Contacto
        </Link>
        <Link
          href="/business/dashboard"
          className="border-b-2 border-transparent hover:text-gray-800 transition-colors duration-300 transform dark:hover:text-gray-200 hover:border-blue-500 mx-1.5 sm:mx-6"
        >
          Dashboard
        </Link>
        <Link
          href="/business/login"
          className="border-b-2 border-transparent hover:text-gray-800 transition-colors duration-300 transform dark:hover:text-gray-200 hover:border-blue-500 mx-1.5 sm:mx-6"
        >
          Acceder(empresa)
        </Link>
      </div>
    </nav>
  );
};

export default NavBar2;
