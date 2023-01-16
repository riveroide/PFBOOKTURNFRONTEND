import Link from "next/link";
import React from "react";

const NavBarAdmin = () => {
    return (
        <nav className="bg-white shadow dark:bg-blue-700">
      <div className="container flex items-center  p-6 mx-auto text-gray-600 capitalize dark:text-gray-300 font-cool_g">
      <Link
          href="/"
          className="text-gray-800 transition-colors duration-300 transform dark:text-gray-200 border-b-2 border-blue-500 mx-1.5 sm:mx-6 text-3xl"
        >
          Bookturn 
        </Link>
        <p
          className="border-b-2 border-transparent hover:text-gray-800 transition-colors duration-300 transform dark:hover:text-gray-200 hover:border-blue-500 mx-1.5 sm:mx-6"
        >
          Administracion
        </p>
      </div>
    </nav>
    )
};

export default NavBarAdmin;