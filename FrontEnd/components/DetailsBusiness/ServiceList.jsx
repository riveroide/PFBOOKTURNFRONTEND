import React from 'react'
import Link from 'next/link'

const ServiceList = ({services}) => {
    console.log(services)
  return (
    <div className="bg-white dark:bg-gray-900 font-cool_p tracking-widest">
    <div className="container px-6 py-8 mx-auto">
        <p className="text-xl text-center text-gray-500 dark:text-gray-300 font-cool_g tracking-widest">
            Lista de servicios:
        </p>

        <h1 className="mt-4 text-3xl font-semibold text-center text-gray-800 capitalize lg:text-4xl dark:text-white overflow-hidden font-cool_g tracking-widest">Servicios</h1>

        <div className="mt-6 space-y-8 xl:mt-12">
            {services.data?.map(e =>{
                return(
                    <div className="flex items-center justify-between max-w-2xl px-8 py-4 mx-auto border cursor-pointer rounded-xl dark:border-gray-700">
                <div className="flex items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 text-gray-400 sm:h-9 sm:w-9" viewBox="0 0 20 20" fill="currentColor">
                        <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
                    </svg>
                        
                    <div className="flex flex-col items-center mx-5 space-y-1">
                        <h2 className="text-lg font-medium text-gray-700 sm:text-2xl dark:text-gray-200 capitalize">{e.attributes.name}</h2>
                    </div>
                </div>

                <h2 className="text-2xl font-semibold text-gray-500 sm:text-4xl dark:text-gray-300 overflow-hidden">${e.attributes.price}</h2>
            </div>
                )
            })}


            <div className="flex justify-center">
                <Link href="/booking/step1">
                <button className="px-8 py-2 tracking-wide text-white capitalize transition-colors duration-300 transform bg-blue-600 rounded-md hover:bg-blue-500 focus:outline-none focus:bg-blue-500 focus:ring focus:ring-blue-300 focus:ring-opacity-80 font-cool_g">
                    Reservar
                </button>
                </Link>
            </div>
        </div>
    </div>
</div>
  )
}

export default ServiceList