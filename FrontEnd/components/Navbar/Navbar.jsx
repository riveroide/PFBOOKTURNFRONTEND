import Link from "next/link";
import React, {useEffect} from "react";
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useSession } from "next-auth/react";
import { useRouter } from "next/router";

const NavBar2 = () => {

  const router = useRouter();
  const {data: session} = useSession()

  useEffect(() => {
    
    AOS.init()
  })

  const handler = () => {
    if(session){
      router.push("/business/dashboard")
    }else{
      alert("Primero debes iniciar sesión.")
      router.push("/business/login")
    }
  }

  return (
    <nav className="bg-white shadow dark:bg-blue-700">

      <div className="container flex items-center justify-center p-6 mx-auto text-gray-600 capitalize dark:text-gray-300 font-cool_g">
      <Link
          href="/"
          className="text-gray-800 transition-colors duration-300 transform dark:text-gray-200 border-b-2 border-blue-500 mx-1.5 sm:mx-6 text-3xl"
        >
          Bookturn 
        </Link>

        <Link
          href="/business/features"
          className="border-b-2 border-transparent hover:text-gray-800 transition-colors duration-300 transform dark:hover:text-gray-200 hover:border-blue-500 mx-1.5 sm:mx-6"
        >
          Funcionalidades
        </Link>

        <Link
          href="/business/about_us"
          className="border-b-2 border-transparent hover:text-gray-800 transition-colors duration-300 transform dark:hover:text-gray-200 hover:border-blue-500 mx-1.5 sm:mx-6"
        >
          Quiénes Somos
        </Link>

        <Link
          href="/business/prices"
          className="border-b-2 border-transparent hover:text-gray-800 transition-colors duration-300 transform dark:hover:text-gray-200 hover:border-blue-500 mx-1.5 sm:mx-6"
        >
          Precios
        </Link>

        <Link
          href="/business/categories"

          className="border-b-2 border-transparent hover:text-gray-800 transition-colors duration-300 transform dark:hover:text-gray-200 hover:border-blue-500 mx-1.5 sm:mx-6"
        >
          Categorias
        </Link>

        <Link
          href="/business/contact"
          className="border-b-2 border-transparent hover:text-gray-800 transition-colors duration-300 transform dark:hover:text-gray-200 hover:border-blue-500 mx-1.5 sm:mx-6"
        >
          Contacto
        </Link>
        <div
           onClick={()=> handler()}
          className="cursor-pointer border-b-2 border-transparent hover:text-gray-800 transition-colors duration-300 transform dark:hover:text-gray-200 hover:border-blue-500 mx-1.5 sm:mx-6"
        >
          Dashboard
        </div>
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
