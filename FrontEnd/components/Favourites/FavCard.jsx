import React from "react";
import Link from "next/link";

export default function FavCard({name, address, telephone, id, closehour, openhour}) {
    return (
        <div class="max-w-sm mb-2 p-6 tracking-wide bg-white border border-gray-200 rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700 -z-10">
            <a href="#">
                <h5 class="mb-2 font-cool_g  text-2xl tracking-tight text-gray-900 dark:text-white">{name}</h5>
            </a>
            <span class="mr-5 font-cool_g text-gray-700 dark:text-gray-400">{address}</span>
            <span class="mb-3 font-cool_g text-gray-700 dark:text-gray-400"> tel: {telephone}</span>
            <p class="mb-3 font-cool_g text-gray-700 dark:text-gray-400">Horarios: {openhour}:00 - {closehour}:00</p>
            <Link href={{
                pathname: "/business/about/[businessId]",
                query: {
                  businessId: id,
                },
            }}>
                <div href="#" class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                    Ver Detalles
                    <svg aria-hidden="true" class="w-4 h-4 ml-2 -mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                </div>
            </Link>
            
        </div>
    )
}