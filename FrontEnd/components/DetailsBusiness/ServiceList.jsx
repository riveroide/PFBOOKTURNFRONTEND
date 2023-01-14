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


        <div className="mt-2 space-y-8 xl:mt-12">
            {services.data?.map(e =>{
                return(
                    <div className="flex items-center justify-between max-w-2xl px-8 py-4 mx-auto border cursor-pointer rounded-xl dark:border-gray-700">
                <div className="flex items-center">
             
                    <div className="flex flex-col items-center mx-5 space-y-1">
                        <h2 className="text-lg font-medium text-gray-700 sm:text-2xl dark:text-gray-200 capitalize">{e.attributes.name}</h2>
                    </div>
                </div>

                <h2 className="text-2xl font-semibold text-gray-500 sm:text-4xl dark:text-gray-300 overflow-hidden">${e.attributes.price}</h2>
            </div>
                )
            })}

        </div>
    </div>
</div>
  )
}

export default ServiceList